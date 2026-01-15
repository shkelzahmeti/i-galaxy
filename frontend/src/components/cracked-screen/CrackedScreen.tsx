import { useState, useRef, useEffect } from "react";

interface CrackedScreenProps {
  width: number;
  height: number;
  image: string;
  crackedSvg: string;
  startPercent: number; // 0 to 1
}

function CrackedScreen({
  width,
  height,
  image,
  crackedSvg,
  startPercent,
}: CrackedScreenProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dividerY, setDividerY] = useState<number>(height * startPercent);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Drag handlers
  const startDrag = () => setIsDragging(true);
  const stopDrag = () => setIsDragging(false);

  const onDrag = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const clientY =
      "touches" in e && e.touches.length > 0
        ? e.touches[0].clientY
        : (e as MouseEvent).clientY;

    let newY = clientY - rect.top;
    newY = Math.max(0, Math.min(newY, rect.height));
    setDividerY(newY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", onDrag);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", onDrag);
    window.addEventListener("touchend", stopDrag);

    return () => {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", onDrag);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [isDragging]); // <-- only reattach when dragging state changes

  return (
    <div
      style={{
        position: "relative",
        width: `${width + 120}px`,
        margin: "0 auto",
      }}
    >
      {/* PHONE */}
      <div
        ref={containerRef}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          position: "relative",
          overflow: "hidden",
          borderRadius: "35px",
          userSelect: "none",
          border: "4px solid #000",
          margin: "0 auto",
          boxShadow: "0 0 20px rgba(0,0,0,0.4)",
          backgroundColor: "#000",
        }}
      >
        <img
          src={image}
          alt="phone"
          draggable={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            inset: 0,
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: dividerY,
            bottom: 0,
            width: "100%",
            backdropFilter: "blur(7px)",
            background: "rgba(255,255,255,0.1)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <img
          src={crackedSvg}
          alt="cracks"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            zIndex: 2,
            clipPath: `inset(${dividerY}px 0px 0px 0px)`,
          }}
        />
      </div>

      {/* GRABBER */}
      <div
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        style={{
          position: "absolute",
          top: dividerY - 25,
          left: 0,
          width: "100%",
          height: "50px",
          cursor: isDragging ? "grabbing" : "grab",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          animation: !isDragging
            ? "grabberNudge 4s ease-in-out infinite"
            : "none",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: `${width + 120}px`,
            height: "12px",
            background: "rgba(255,255,255,0.85)",
            borderTop: "1px solid #aaa",
            borderBottom: "1px solid #aaa",
            backdropFilter: "blur(4px)",
            borderRadius: "6px",
          }}
        />
      </div>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes grabberNudge {
            0%   { transform: translateY(0); }
            40%  { transform: translateY(10px); }
            50%  { transform: translateY(0); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

export default CrackedScreen;
