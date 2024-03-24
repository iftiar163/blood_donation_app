import { useSelector } from "react-redux";
import { authSelector } from "../features/auth/authSlice";

const userInfo = () => {
  const { user } = useSelector(authSelector);
  return { auth: user };
};

export default userInfo;
