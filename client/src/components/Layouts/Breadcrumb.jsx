import { useLocation } from "react-router-dom";
import { tittleGenerator } from "../../helpers/Helper";

const Breadcrumb = () => {
  const { pathname } = useLocation();

  // BreadCrumb Access List
  const breadCrumbs = ["/login", "/register", "/donor-register"];
  if (!breadCrumbs.includes(pathname)) {
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
                      {tittleGenerator(pathname)}
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
  }
};

export default Breadcrumb;
