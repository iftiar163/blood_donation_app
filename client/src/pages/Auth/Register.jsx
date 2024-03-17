import { Link } from "react-router-dom";
import banner from "../../assets/frontend/img/donor_camp.jpg";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { registerPatient } from "../../features/auth/authApiSlice";
import { alertMesasgeReset, authSelector } from "../../features/auth/authSlice";
import { useEffect } from "react";
import createAlert from "../../utils/toastify";

const Register = () => {
  const { error, message, loader } = useSelector(authSelector);
  const dispatch = useDispatch();

  // Form Data
  const { input, handleInputChange, resetForm } = useForm({
    name: "",
    auth: "",
    password: "",
    role: "patient",
    conpass: "",
  });

  // Create Data For Patient
  const handlePatientCreate = () => {
    if (input.password !== input.conpass) {
      createAlert("Password Doen't Match");
    } else {
      dispatch(registerPatient(input));
    }
  };

  // Use effect
  useEffect(() => {
    if (message) {
      createAlert(message, "success");
      dispatch(alertMesasgeReset());
      resetForm();
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
              {/* Register Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={banner}
                      className="img-fluid"
                      alt="Doccure Register"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Patient Register{" "}
                        <Link to="/donor-register">Are you a Donor?</Link>
                      </h3>
                    </div>
                    {/* Register Form */}

                    <div className="mb-3 form-focus">
                      <input
                        type="text"
                        className="form-control floating"
                        name="name"
                        value={input.name}
                        onChange={handleInputChange}
                      />
                      <label className="focus-label">Name</label>
                    </div>
                    <div className="mb-3 form-focus">
                      <input
                        type="text"
                        className="form-control floating"
                        name="auth"
                        value={input.auth}
                        onChange={handleInputChange}
                      />
                      <label className="focus-label">
                        Mobile or Email Address
                      </label>
                    </div>
                    <div className="mb-3 form-focus">
                      <input
                        type="password"
                        className="form-control floating"
                        name="password"
                        value={input.password}
                        onChange={handleInputChange}
                      />
                      <label className="focus-label">Create Password</label>
                    </div>
                    <div className="mb-3 form-focus">
                      <input
                        type="password"
                        className="form-control floating"
                        name="conpass"
                        value={input.conpass}
                        onChange={handleInputChange}
                      />
                      <label className="focus-label">Create Password</label>
                    </div>
                    <div className="text-end">
                      <a className="forgot-link" href="login.html">
                        Already have an account?
                      </a>
                    </div>
                    <button
                      className="btn btn-primary w-100 btn-lg login-btn"
                      onClick={handlePatientCreate}
                    >
                      {loader ? "Creating . . ." : "Signup"}
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

                    {/* /Register Form */}
                  </div>
                </div>
              </div>
              {/* /Register Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default Register;
