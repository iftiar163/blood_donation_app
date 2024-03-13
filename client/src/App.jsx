import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./route/route";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        style={{ zIndex: "999999999" }}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <RouterProvider router={router} />
    </>
  );
}

export default App;
