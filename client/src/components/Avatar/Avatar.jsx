import avatar from "../../assets/frontend/img/patients/avaterImg.jpg";

const Avatar = ({ url }) => {
  return (
    <>
      <img
        className="avatar-img rounded-circle"
        src={url ? url : avatar}
        alt=""
      />
    </>
  );
};

export default Avatar;
