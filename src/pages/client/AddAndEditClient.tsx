import React from "react";

const AddAndEditClient: React.FC = () => {
  return (
    <>
      <div className="dashboard-main-body">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
          <h6 className="fw-semibold mb-0">Input From</h6>
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
            <li>-</li>
            <li className="fw-medium">Input Form</li>
          </ul>
        </div>

        <div className="row gy-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title mb-0">Default Inputs</h6>
              </div>
              <div className="card-body">
                <div className="row gy-3">
                  <div className="col-12">
                    <label className="form-label">Basic Input</label>
                    <input type="text" name="#0" className="form-control" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Input with Placeholder</label>
                    <input
                      type="text"
                      name="#0"
                      className="form-control"
                      placeholder="info@gmail.com"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Input with Phone </label>
                    <input
                      type="text"
                      className="form-control flex-grow-1"
                      placeholder="+1 (555) 253-08515"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Input Date</label>
                    <input type="date" name="#0" className="form-control" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Input with Payment</label>
                    <div className="input-group">
                      <span className="input-group-text bg-base">
                        <img
                          src="assets/images/card/payment-icon.png"
                          alt="image"
                        />
                      </span>
                      <input
                        type="text"
                        className="form-control flex-grow-1"
                        placeholder="Card number"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-24">
              <div className="card-header">
                <h6 className="card-title mb-0">Input Group</h6>
              </div>
              <div className="card-body">
                <div className="row gy-3">
                  <div className="col-12">
                    <label className="form-label">Input</label>
                    <div className="input-group">
                      <span className="input-group-text bg-base">
                        <iconify-icon icon="mynaui:envelope"></iconify-icon>
                      </span>
                      <input
                        type="text"
                        className="form-control flex-grow-1"
                        placeholder="info@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Input</label>
                    <div className="input-group">
                      <select className="form-select input-group-text w-90-px flex-grow-0">
                        <option>US</option>
                        <option>US</option>
                        <option>US</option>
                        <option>US</option>
                        <option>US</option>
                      </select>
                      <input
                        type="text"
                        className="form-control flex-grow-1"
                        placeholder="info@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Input</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control flex-grow-1"
                        placeholder="info@gmail.com"
                      />
                      <select className="form-select input-group-text w-90-px flex-grow-0">
                        <option>US</option>
                        <option>US</option>
                        <option>US</option>
                        <option>US</option>
                        <option>US</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Input</label>
                    <div className="input-group">
                      <span className="input-group-text bg-base">
                        {" "}
                        http://{" "}
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="www.random.com"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Input</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="www.random.com"
                      />
                      <button
                        type="button"
                        className="input-group-text bg-base"
                      >
                        <iconify-icon icon="lucide:copy"></iconify-icon> Copy
                      </button>
                    </div>
                    <p className="text-sm mt-1 mb-0">
                      This is a hint text to help user.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title mb-0">Input Sizing</h6>
              </div>
              <div className="card-body">
                <div className="row gy-3">
                  <div className="col-12">
                    <label className="form-label">Input Large</label>
                    <input
                      type="text"
                      name="#0"
                      className="form-control form-control-lg"
                      placeholder="info@gmail.com"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Input Medium</label>
                    <input
                      type="text"
                      name="#0"
                      className="form-control"
                      placeholder="info@gmail.com"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Input Small</label>
                    <input
                      type="text"
                      name="#0"
                      className="form-control form-control-sm"
                      placeholder="info@gmail.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Textarea input field</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4 was-validated">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        rows={4}
                        cols={50}
                        placeholder="Enter a description..."
                      ></textarea>
                      <div className="invalid-feedback">
                        Please enter a message in the textarea.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAndEditClient;
