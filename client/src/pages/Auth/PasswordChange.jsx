import { useEffect } from "react";
import { changeAuthPassword } from "../../features/auth/authApiSlice";
import { alertMesasgeReset, authSelector } from "../../features/auth/authSlice";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import createAlert from "../../utils/toastify";

const PasswordChange = () => {
	const { error, message, loader } = useSelector(authSelector);
	const dispatch = useDispatch();

	const { input, handleInputChange, resetForm } = useForm({
		oldPass: "",
		newPass: "",
		confPass: "",
	});

	const handlePasswordChange = (e) => {
		e.preventDefault();
		dispatch(changeAuthPassword(input));
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
	}, [message, error, dispatch]);

	return (
		<>
			<div className="card">
				<div className="card-body">
					<div className="row">
						<div className="col-md-12 col-lg-6">
							{/* Change Password Form */}
							<form onSubmit={handlePasswordChange}>
								<div className="mb-3">
									<label className="mb-2">Old Password</label>
									<input
										type="password"
										className="form-control"
										name="oldPass"
										value={input.oldPass}
										onChange={handleInputChange}
									/>
								</div>
								<div className="mb-3">
									<label className="mb-2">New Password</label>
									<input
										type="password"
										className="form-control"
										name="newPass"
										value={input.newPass}
										onChange={handleInputChange}
									/>
								</div>
								<div className="mb-3">
									<label className="mb-2">Confirm Password</label>
									<input
										type="password"
										className="form-control"
										name="confPass"
										value={input.confPass}
										onChange={handleInputChange}
									/>
								</div>
								<div className="submit-section">
									<button type="submit" className="btn btn-primary submit-btn">
										Save Changes
									</button>
								</div>
							</form>
							{/* /Change Password Form */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PasswordChange;
