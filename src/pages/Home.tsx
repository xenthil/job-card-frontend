import React, { useEffect } from "react";
import { getDashboard } from "../redux/reducers/materialSlice";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Home: React.FC = () => {
  const data: any = useSelector(
    (state: RootState) => state.clientMaterial.dashboardDetails
  );
  const dispatch: AppDispatch = useDispatch();
  console.log("data", data);

  const getDashobardData = () => {
    dispatch(getDashboard({}))
      .unwrap()
      .then((response: any) => {
        console.log("API response:", response);
        if (response?.status === 200 || response?.status === 201) {
          // toast.success(response?.message);
        } else {
          toast.error(response?.message);
        }
      })
      .catch((err: any) => {
        console.error("API call error:", err);
      });
  };

  useEffect(() => {
    getDashobardData();
  }, []);

  return (
    <>
      <div className="dashboard-main-body">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
          <h6 className="fw-semibold mb-0">Dashboard</h6>
          <ul className="d-flex align-items-center gap-2">
            <li className="fw-medium">
              <a
                href="index.html"
                className="d-flex align-items-center gap-1 hover-text-primary"
              >
                <iconify-icon
                  icon="solar:home-smile-angle-outline"
                  className="icon text-lg"
                ></iconify-icon>
                Dashboard
              </a>
            </li>
            
          </ul>
        </div>

        <div className="row row-cols-xxxl-5 row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4">
          <div className="col">
            <div className="card shadow-none border bg-gradient-start-1 h-100">
              <div className="card-body p-20">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                  <div>
                    <p className="fw-medium text-primary-light mb-1">
                      Total Jobs
                    </p>
                    <h6 className="mb-0">{data?.jobCount}</h6>
                  </div>
                  <div className="w-50-px h-50-px bg-cyan rounded-circle d-flex justify-content-center align-items-center">
                    <iconify-icon icon="material-symbols:work-update-sharp"></iconify-icon>
                  </div>
                </div>
                {/* <p className="fw-medium text-sm text-primary-light mt-12 mb-0">
                  <span className="text-success-main"> 100</span>
                  Last 30 days jobss
                </p> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-none border bg-gradient-start-2 h-100">
              <div className="card-body p-20">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                  <div>
                    <p className="fw-medium text-primary-light mb-1">
                      Total Pending
                    </p>
                    <h6 className="mb-0">{data?.pendingJobCount}</h6>
                  </div>
                  <div className="w-50-px h-50-px bg-purple rounded-circle d-flex justify-content-center align-items-center">
                    <iconify-icon icon="ic:twotone-group-work"></iconify-icon>
                  </div>
                </div>
                {/* <p className="fw-medium text-sm text-primary-light mt-12 mb-0">
                  <span className="text-danger-main"> -50</span>
                  Last 30 days Completed
                </p> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-none border bg-gradient-start-3 h-100">
              <div className="card-body p-20">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                  <div>
                    <p className="fw-medium text-primary-light mb-1">
                      Total Clients
                    </p>
                    <h6 className="mb-0">{data?.clientCount}</h6>
                  </div>
                  <div className="w-50-px h-50-px bg-info rounded-circle d-flex justify-content-center align-items-center">
                    <iconify-icon icon="ph:user-fill"></iconify-icon>
                  </div>
                </div>
                {/* <p className="fw-medium text-sm text-primary-light mt-12 mb-0">
                  <span className="text-success-main">5</span>
                  Last 30 days
                </p> */}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-none border bg-gradient-start-5 h-100">
              <div className="card-body p-20">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                  <div>
                    <p className="fw-medium text-primary-light mb-1">
                      Total Material
                    </p>
                    <h6 className="mb-0">{data?.totalQuantity} KG</h6>
                  </div>
                  <div className="w-50-px h-50-px bg-red rounded-circle d-flex justify-content-center align-items-center">
                    <iconify-icon icon="lets-icons:materials"></iconify-icon>
                  </div>
                </div>
                {/* <p className="fw-medium text-sm text-primary-light mt-12 mb-0">
                  <span className="text-success-main">+50 KG</span>
                  Last 30 days
                </p> */}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-none border bg-gradient-start-5 h-100">
              <div className="card-body p-20">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                  <div>
                    <p className="fw-medium text-primary-light mb-1">
                      Total No Of Material
                    </p>
                    <h6 className="mb-0">{data?.noOfMaterials} </h6>
                  </div>
                  <div className="w-50-px h-50-px bg-red rounded-circle d-flex justify-content-center align-items-center">
                    <iconify-icon icon="mdi:material-design"></iconify-icon>
                  </div>
                </div>
                {/* <p className="fw-medium text-sm text-primary-light mt-12 mb-0">
                  <span className="text-success-main">+50 KG</span>
                  Last 30 days
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
