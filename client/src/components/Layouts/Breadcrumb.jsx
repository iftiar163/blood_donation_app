import { useLocation } from "react-router-dom";
import { tittleGenerator } from "../../helpers/Helper";

const Breadcrumb = ({ title }) => {
  const { pathname } = useLocation();
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2
                className="breadcrumb-title"
                style={{ textTransform: "capitalize" }}
              >
                {tittleGenerator(pathname)}
              </h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
    </>
  );
};

export default Breadcrumb;
