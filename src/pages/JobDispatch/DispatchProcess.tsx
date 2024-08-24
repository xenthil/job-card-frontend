import React from "react";
import { Link, useLocation } from "react-router-dom";
import AlertComponent from "../../components/AlertComponent";
import "./dispatch.css";

const ProductionProcess: React.FC = () => {

  const location = useLocation();
  const jobData = location?.state?.jobData;
  console.log('jobData',jobData)
  
  return (
    <>
      <div className="dashboard-main-body">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
          <h6 className="fw-semibold mb-0">Dispatch</h6>
          <ul className="d-flex align-items-center gap-2">
            <Link
              to="/dispatch_details"
              className="fw-medium btn btn-primary"
            >
              Back
            </Link>
          </ul>
        </div>

        <div className="row gy-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <h6 className="job-header">
                    <u>Dispatch details</u>
                  </h6>
                  <br></br>
                  <div className="col-md-4">
                    <p>
                      <span className="job-lable"> Client name : </span>
                      <span className="job-value">
                        {jobData.client.clientName}
                      </span>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p>
                      <span className="job-lable"> Dc number :</span>
                      <span className="job-value">
                        {jobData.dcNumber}
                      </span>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p>
                      <span className="job-lable"> Job type : </span>
                      <span className="job-value">
                        {jobData.jobType.name}
                      </span>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p>
                      <span className="job-lable">Received quantity :</span>
                      <span className="job-value"> {jobData.receivedQty} </span>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p>
                      <span className="job-lable">Coating required :</span>
                      <span className="job-value">
                        {jobData.coatingRequired}
                      </span>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p>
                      <span className="job-lable">No Of Materials :</span>
                      <span className="job-value">
                        {jobData.noOfMaterials}
                      </span>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p>
                      <span className="job-lable"> Received date :</span>
                      <span className="job-value">
                        {new Date(jobData.receivedDate)
                          .toISOString()
                          .slice(0, 10)}
                      </span>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p>
                      <span className="job-lable">
                        Estimated dispatch date :
                      </span>
                      <span className="job-value">
                        {new Date(jobData.estimatedDispatchDate)
                          .toISOString()
                          .slice(0, 10)}
                      </span>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p>
                      <span className="job-lable"> Inspection :</span>
                      <span className="job-value">
                        {jobData.inspection}
                      </span>
                    </p>
                  </div>
                </div>
                 <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductionProcess;
