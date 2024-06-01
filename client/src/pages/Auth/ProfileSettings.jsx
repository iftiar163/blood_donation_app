import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../components/Avatar/Avatar";
import userInfo from "../../hooks/userInfo";
import {
	updateProfileData,
	updateUserPhoto,
} from "../../features/auth/authApiSlice";
import { alertMesasgeReset, authSelector } from "../../features/auth/authSlice";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";
import createAlert from "../../utils/toastify";

const ProfileSettings = () => {
	const { error, message, loader } = useSelector(authSelector);
	const { auth } = userInfo();
	const dispatch = useDispatch();
	const { input, handleInputChange } = useForm({
		name: auth.name,
		email: auth.email,
		phone: auth.phone,
		address: auth.address,
		bloodType: auth.bloodType,
		bio: auth.bio,
		birthDate: auth.birthDate,
		status: "",
	});

	// Handle Profile Update
	const handleProfileUpdate = (e) => {
		e.preventDefault();

		dispatch(updateProfileData(input));
	};

	// Profile photo upload
	const profilePhotoUpload = (e) => {
		const profilePhoto = e.target.files[0];

		const form_data = new FormData();

		form_data.append("profile-photo", profilePhoto);

		dispatch(updateUserPhoto(form_data));
	};

	// Use effect
	useEffect(() => {
		if (message) {
			createAlert(message, "success");
			dispatch(alertMesasgeReset());
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
					{/* Profile Settings Form */}
					<form onSubmit={handleProfileUpdate}>
						<div className="row">
							<div className="col-12 col-md-12">
								<div className="mb-3">
									<div className="change-avatar">
										<div className="profile-img">
											<Avatar url={auth.photo && auth.photo} />
										</div>
										<div className="upload-img">
											<div className="change-photo-btn">
												<span>
													<i className="fa fa-upload" /> Upload Photo
												</span>
												<input
													type="file"
													className="upload"
													onChange={profilePhotoUpload}
												/>
											</div>
											<small className="form-text text-muted">
												{loader
													? "Uploading...."
													: "Allowed JPG, GIF or PNG. Max size of 2MB"}
											</small>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="mb-3">
									<label className="mb-2">Full Name</label>
									<input
										type="text"
										className="form-control"
										name="name"
										value={input.name}
										onChange={handleInputChange}
									/>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="mb-3">
									<label className="mb-2">Date of Birth</label>
									<div className="cal-icon">
										<input
											type="text"
											className="form-control datetimepicker"
											defaultValue="24-07-1983"
											name="birthDate"
											value={input.birthDate}
											onChange={handleInputChange}
										/>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="mb-3">
									<label className="mb-2">Blood Group</label>
									<select
										className="form-select form-control"
										name="bloodType"
										value={input.bloodType}
										onChange={handleInputChange}
									>
										<option>-- Select --</option>
										<option>A+</option>
										<option>B-</option>
										<option>B+</option>
										<option>AB-</option>
										<option>AB+</option>
										<option>O-</option>
										<option>O+</option>
									</select>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="mb-3">
									<label className="mb-2">Email ID</label>
									<input
										type="email"
										className="form-control"
										name="email"
										value={input.email}
										onChange={handleInputChange}
									/>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="mb-3">
									<label className="mb-2">Mobile</label>
									<input
										type="text"
										className="form-control"
										name="phone"
										value={input.phone}
										onChange={handleInputChange}
									/>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="mb-3">
									<label className="mb-2">Address</label>
									<input
										type="text"
										className="form-control"
										name="address"
										value={input.address}
										onChange={handleInputChange}
									/>
								</div>
							</div>
							<div className="col-12">
								<div className="mb-3">
									<label className="mb-2">Bio</label>
									<input
										type="text"
										className="form-control"
										name="bio"
										value={input.bio}
										onChange={handleInputChange}
									/>
								</div>
							</div>
							<div className="col-12">
								<div className="mb-3">
									<label className="mb-2">Status</label>
									<input type="text" className="form-control" value="" />
								</div>
							</div>
						</div>
						<div className="submit-section">
							<button type="submit" className="btn btn-primary submit-btn">
								Save Changes
							</button>
						</div>
					</form>
					{/* /Profile Settings Form */}
				</div>
			</div>
		</>
	);
};

export default ProfileSettings;
