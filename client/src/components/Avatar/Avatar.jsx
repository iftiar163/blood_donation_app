import avatar from "../../assets/frontend/img/patients/patient.jpg";

const Avatar = ({ url }) => {
  return (
    <>
      <img src={url ? url : avatar} alt="" />
    </>
  );
};

export default Avatar;
