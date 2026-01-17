import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Admin from "./pages/admin/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar />
      <Admin />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        toastStyle={{ fontSize: "1.6rem" }}
      />
    </div>
  );
}

export default App;
