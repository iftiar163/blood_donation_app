import { Link, useNavigate } from "react-router-dom";
import banner from "../../assets/frontend/img/donor_camp.jpg";
import { useDispatch, useSelector } from "react-redux";
import { alertMesasgeReset, authSelector } from "../../features/auth/authSlice";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";
import createAlert from "../../utils/toastify";
import { userLogin } from "../../features/auth/authApiSlice";

const Login = () => {
  const { error, message, loader } = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form Data
  const { input, handleInputChange, resetForm } = useForm({
    auth: "",
    password: "",
  });

  // Handle User Login
  const handleUserLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin(input));
  };

  // Use effect
  useEffect(() => {
    if (message) {
      createAlert(message, "success");
      dispatch(alertMesasgeReset());
      resetForm();
      navigate("/dashboard");
    }

    if (error) {
      createAlert(error);
      dispatch(alertMesasgeReset());
    }
  }, [message, error, dispatch, resetForm]);

  return (
    <>
      {/* Page Content */}
      <div className="content top-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Login Tab Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={banner}
                      className="img-fluid"
                      alt="Doccure Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login <span>Doccure</span>
                      </h3>
                    </div>
                    <form onSubmit={handleUserLogin}>
                      <div className="mb-3 form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          name="auth"
                          value={input.auth}
                          onChange={handleInputChange}
                        />
                        <label className="focus-label">Email Or Phone</label>
                      </div>
                      <div className="mb-3 form-focus">
                        <input
                          type="password"
                          className="form-control floating"
                          name="password"
                          value={input.password}
                          onChange={handleInputChange}
                        />
                        <label className="focus-label">Password</label>
                      </div>
                      <div className="text-end">
                        <a className="forgot-link" href="forgot-password.html">
                          Forgot Password ?
                        </a>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="submit"
                      >
                        Login
                      </button>
                      <div className="login-or">
                        <span className="or-line" />
                        <span className="span-or">or</span>
                      </div>
                      <div className="row social-login">
                        <div className="col-6">
                          <a href="#" className="btn btn-facebook w-100">
                            <i className="fab fa-facebook-f me-1" /> Login
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="#" className="btn btn-google w-100">
                            <i className="fab fa-google me-1" /> Login
                          </a>
                        </div>
                      </div>
                      <div className="text-center dont-have">
                        Don’t have an account?{" "}
                        <Link to="/register">Register</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* /Login Tab Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default Login;
