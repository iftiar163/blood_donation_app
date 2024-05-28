import Avatar from "../../components/Avatar/Avatar";
import { useDispatch } from "react-redux";
import { userLogout } from "../../features/auth/authApiSlice";
import userInfo from "../../hooks/userInfo";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
	const dispatch = useDispatch();

	const { auth } = userInfo();

	const handleUserLogout = (e) => {
		e.preventDefault();
		dispatch(userLogout());
	};
	return (
		<div className="main-wrapper">
			{/* Page Content */}
			<div className="content">
				<div className="container">
					<div className="row">
						{/* Profile Sidebar */}
						<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
							<div className="profile-sidebar">
								<div className="widget-profile pro-widget-content">
									<div className="profile-info-widget">
										<a href="#" className="booking-doc-img">
											<Avatar url={auth?.photo && auth.photo} />
											{/* <img
                        src="assets/img/patients/patient.jpg"
                        alt="User Image"
                      /> */}
										</a>

										<div className="profile-det-info">
											<h3>{auth.name}</h3>
											<div className="patient-details">
												{auth.birthDate && (
													<>
														<h5>
															<i className="fas fa-birthday-cake" />{" "}
															{auth.birthDate}
														</h5>
													</>
												)}

												<h5 className="mb-0">
													{auth.address && (
														<>
															<i className="fas fa-map-marker-alt" />{" "}
															{auth.address}
														</>
													)}
												</h5>
											</div>
										</div>
									</div>
								</div>
								<div className="dashboard-widget">
									<nav className="dashboard-menu">
										<ul>
											<li className="active">
												<Link to="dashboard-ui">
													<i className="fas fa-columns" />
													<span>Dashboard</span>
												</Link>
											</li>
											<li>
												<a href="favourites.html">
													<i className="fas fa-bookmark" />
													<span>Favourites</span>
												</a>
											</li>

											<li>
												<a href="chat.html">
													<i className="fas fa-comments" />
													<span>Message</span>
													<small className="unread-msg">23</small>
												</a>
											</li>

											<li>
												<Link to="profile-settings">
													<i className="fas fa-user-cog" />
													<span>Profile Settings</span>
												</Link>
											</li>
											<li>
												<Link to="change-password">
													<i className="fas fa-lock" />
													<span>Change Password</span>
												</Link>
											</li>
											<li>
												<a href="#" onClick={handleUserLogout}>
													<i className="fas fa-sign-out-alt" />
													<span>Logout</span>
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
						{/* / Profile Sidebar */}
						<div className="col-md-7 col-lg-8 col-xl-9">
							<Outlet />
						</div>
					</div>
				</div>
			</div>
			{/* /Page Content */}
		</div>
	);
};

export default Dashboard;
