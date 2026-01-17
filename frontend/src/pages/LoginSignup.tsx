import { useState } from "react";
import "./css/LoginSignup.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface FormData {
  userName: string;
  password: string;
  email: string;
}

const initialForm: FormData = {
  userName: "",
  password: "",
  email: "",
};
interface SignupResponse {
  success: boolean;
  token: string;
  errors: string;
}

function LoginSignup() {
  const [state, setState] = useState<string>("Login");
  const [formData, setFormData] = useState<FormData>(initialForm);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async () => {
    console.log("Login function executed", formData);

    let responseData!: SignupResponse;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      toast.success("You've signed up successfully");
      navigate("/");
    } else {
      toast.error(responseData.errors);
    }
  };

  const handleLogin = async () => {
    console.log("Signup function executed", formData);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === "Login") handleLogin();
    else handleSignup();
  };

  return (
    <form onSubmit={handleFormSubmit} className="form-loginsignup">
      <div className="loginsignup-container">
        <h2>{state}</h2>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input
              onChange={handleChange}
              name="userName"
              value={formData.userName}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            onChange={handleChange}
            name="email"
            value={formData.email}
            type="email"
            placeholder="Email Address"
          />
          <input
            onChange={handleChange}
            name="password"
            value={formData.password}
            type="password"
            placeholder="Password"
          />
        </div>
        <button type="submit">Continue</button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account{" "}
            <span onClick={() => setState("Sign Up")}>Signup here</span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </form>
  );
}

export default LoginSignup;
