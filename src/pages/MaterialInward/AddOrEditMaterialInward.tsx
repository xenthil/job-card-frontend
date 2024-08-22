import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  addMaterialInward,
  editMaterialInwardr,
  addMessage,
} from "../../redux/reducers/materialSlice";
import { getAllSupplier } from "../../redux/reducers/ClientSlice";
import { getJobType } from "../../redux/reducers/CommonSlice";
import { toast } from "react-toastify";
import AlertComponent from "../../components/AlertComponent";
import PageLoader from "../../components/PageLoader";
import "./material_inward.css";

interface ClientFormInput {
  email: string;
  contact: string;
  pincode: string;
  address: string;
  area: string;
  city: string;
  contactPersonName: string;
  contactPersonContact: string;
  description: string;
}

interface IFormInput {
  clientId: string;
  quantity: number;
  noOfMaterials: number;
  dcNumber: number;
  dcImage: any;
  receivedDate: string;
  estimatedDispatchDate: string;
  isQtyApproved: string;
  coatingRequired: string;
  jobType: string;
  inspection: string;
}

interface MaterialDetails {
  index: number;
  material: string;
  thickness: string;
}

const AddAndEditMaterialInward: React.FC = () => {
  const ClientData = useSelector(
    (state: RootState) => state.client.allSupplier
  );
  const jobTypeList = useSelector(
    (state: RootState) => state.common.getJobType
  );
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState([]);

  const location = useLocation();
  const editData = location?.state;
  console.log("editData", editData);
  const [formData, setFormData] = useState<IFormInput>({
    clientId: editData?.clientId || "",
    quantity: editData?.quantity || "",
    noOfMaterials: editData?.noOfMaterials || "",
    dcNumber: editData?.dcNumber || "",
    dcImage: "",
    receivedDate: editData?.receivedDate
      ? new Date(editData?.receivedDate).toISOString().slice(0, 10)
      : "",
    estimatedDispatchDate: editData?.estimatedDispatchDate
      ? new Date(editData?.estimatedDispatchDate).toISOString().slice(0, 10)
      : "",
    isQtyApproved: editData?.isQtyApproved?.toString() || "",
    jobType: editData?.jobType || "",
    coatingRequired: editData?.coatingRequired || "",
    inspection: editData?.inspection || "",
  });

  let initialMaterialDetails: MaterialDetails[] = [];
  if (editData) {
    if (editData?.materialInwardDetails?.length > 0) {
      editData?.materialInwardDetails?.map((data: any, index: number) => {
        let material: any = {};
        material.index = index;
        material.material = data.material;
        material.thickness = data.thickness;
        initialMaterialDetails.push(material);
      });
    } else {
      initialMaterialDetails = [{ index: 1, material: "", thickness: "" }];
    }
  } else {
    initialMaterialDetails = [{ index: 1, material: "", thickness: "" }];
  }

  const [materialDetails, setMaterialDetails] = useState<MaterialDetails[]>(
    initialMaterialDetails
  );
  const [clientFormData, setClientFormData] = useState<ClientFormInput>({
    email: "",
    contact: "",
    pincode: "",
    address: "",
    area: "",
    city: "",
    contactPersonName: "",
    contactPersonContact: "",
    description: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object().shape({
    clientId: Yup.string().required("Client name is required"),
    quantity: Yup.string().required("Qunatity is required"),
    noOfMaterials: Yup.string().required("No of materials is required"),
    dcNumber: Yup.string().required("DC Number is required"),
    receivedDate: Yup.string().required("Received date is required"),
    estimatedDispatchDate: Yup.string().required(
      "Estimated Dispatch Date is required"
    ),
    jobType: Yup.string().required("Job type  is required"),
    coatingRequired: Yup.string().required("Coating required is required"),
    inspection: Yup.string().required("inspection contact is required"),
    isQtyApproved: Yup.string().required("Quantity check is required"),
  });

  const getJobTypeDetails = () => {
    dispatch(getJobType({}))
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
        dispatch(addMessage({ error: err }));
      });
  };

  const getSupplierData = () => {
    dispatch(getAllSupplier({}))
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
        dispatch(addMessage({ error: err }));
      });
  };

  useEffect(() => {
    getJobTypeDetails();
    getSupplierData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "dcImage") {
      if (e.target.files && e.target.files.length > 0) {
        setFormData({ ...formData, [name]: e.target.files[0] });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      const formPayload = new FormData();
      Object.keys(formData).forEach((key) => {
        const typedKey = key as keyof IFormInput;
        const value = formData[typedKey];
        formPayload.append(key, value);
      });
      formPayload.append("materialDetails", JSON.stringify(materialDetails));

      if (editData) {
        formPayload.append("materialInwardId", editData.id);
        formPayload.append("oldDCImage", editData.dcImage);
        makeApiCall(editMaterialInwardr(formPayload));
      } else {
        makeApiCall(addMaterialInward(formPayload));
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const newErrors: any = {};
        err.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path] = error.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const makeApiCall = (functionName: any) => {
    dispatch(functionName)
      .unwrap()
      .then((response: any) => {
        setIsLoading(false);
        if (response?.status === 200 || response?.status === 201) {
          toast.success(response?.message);
          setServerError([]);
          navigate("/material_inward");
        } else {
          setServerError(response?.data);
        }
      })
      .catch((err: any) => {
        setIsLoading(false);
        dispatch(addMessage({ error: err }));
      });
  };

  const handleMaterialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let nameAndId = name.split("-");
    let materialUpdate = materialDetails.map((material: any) => {
      if (material.index == nameAndId[1]) {
        return { ...material, [nameAndId[0]]: value };
      }
      return material;
    });
    setMaterialDetails(materialUpdate);
  };

  const handleClientNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const clientId = selectedOption.value;
    const clientAddress = selectedOption.dataset.clientAddress
      ? JSON.parse(selectedOption.dataset.clientAddress)
      : null;
    setFormData({ ...formData, clientId: clientId });
    setClientFormData(clientAddress);
  };

  const handleJobTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const jobType = selectedOption.value;
    setFormData({ ...formData, jobType: jobType });
  };

  const addMaterial = () => {
    let material = [
      ...materialDetails,
      { index: materialDetails.length + 1, material: "", thickness: "" },
    ];
    setMaterialDetails(material);
  };
  const removeMaterial = (id: number) => {
    let material = materialDetails.filter((m: any) => m.index != id);
    setMaterialDetails(material);
  };

  return (
    <>
      {isLoading && <PageLoader />}
      <div className="dashboard-main-body">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
          <h6 className="fw-semibold mb-0">Material Inward</h6>
          <ul className="d-flex align-items-center gap-2">
            <Link to="/material_inward" className="fw-medium btn btn-primary">
              Back
            </Link>
          </ul>
        </div>

        <div className="row gy-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                {serverError?.length > 0 && (
                  <AlertComponent serverError={serverError} />
                )}
                <form onSubmit={handleSubmit}>
                  <div className="row formStyle">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="clientId">Supplier Name</label>
                        <select
                          className="form-control"
                          name="clientId"
                          id="clientId"
                          value={formData.clientId}
                          onChange={handleClientNameChange}
                        >
                          <option value="">Please select</option>
                          {ClientData.map((client: any) => {
                            return (
                              <>
                                <option
                                  id={client.id}
                                  data-client-address={JSON.stringify(
                                    client.address?.[0]
                                  )}
                                  value={client.id}
                                >
                                  {client.clientName}
                                </option>
                              </>
                            );
                          })}
                        </select>
                        {errors.clientId && (
                          <p style={{ color: "red" }}>{errors.clientId}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Supplier Email</label>
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="email"
                          disabled={true}
                          value={clientFormData.email}
                          placeholder="Supplier email"
                        />
                        {errors.email && (
                          <p style={{ color: "red" }}>{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="contact">Supplier Contact</label>
                        <input
                          type="text"
                          className="form-control"
                          name="contact"
                          id="contact"
                          disabled={true}
                          value={clientFormData.contact}
                          placeholder="Supplier Contact"
                        />
                        {errors.contact && (
                          <p style={{ color: "red" }}>{errors.contact}</p>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="address">Supplier Address</label>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          id="address"
                          disabled={true}
                          value={clientFormData.address}
                          placeholder="Supplier Address"
                        />
                        {errors.address && (
                          <p style={{ color: "red" }}>{errors.address}</p>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="area">Supplier Area</label>
                        <input
                          type="text"
                          className="form-control"
                          name="area"
                          id="area"
                          disabled={true}
                          value={clientFormData.area}
                          placeholder="Supplier Area"
                        />
                        {errors.area && (
                          <p style={{ color: "red" }}>{errors.area}</p>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="city">Supplier city</label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          id="city"
                          disabled={true}
                          value={clientFormData.city}
                          placeholder="Supplier city"
                        />
                        {errors.city && (
                          <p style={{ color: "red" }}>{errors.city}</p>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="city">Pincode</label>
                        <input
                          type="text"
                          className="form-control"
                          name="pincode"
                          id="pincode"
                          disabled={true}
                          value={clientFormData.pincode}
                          placeholder="pincode"
                        />
                        {errors.pincode && (
                          <p style={{ color: "red" }}>{errors.pincode}</p>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="contactPersonName">
                          Contact Person Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="contactPersonName"
                          id="contactPersonName"
                          value={clientFormData.contactPersonName}
                          disabled={true}
                          placeholder="Contact Person Name"
                        />
                        {errors.contactPersonName && (
                          <p style={{ color: "red" }}>
                            {errors.contactPersonName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="contactPersonContact">
                          Contact Person Contact
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="contactPersonContact"
                          id="contactPersonContact"
                          value={clientFormData.contactPersonContact}
                          disabled={true}
                          placeholder="Contact Person Contact"
                        />
                        {errors.contactPersonContact && (
                          <p style={{ color: "red" }}>
                            {errors.contactPersonContact}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                          type="text"
                          className="form-control"
                          name="description"
                          id="description"
                          value={clientFormData.description}
                          disabled={true}
                          placeholder="Description"
                        />
                      </div>
                    </div>
                    <hr></hr>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="quantity">Quantity (KG)</label>
                        <input
                          type="text"
                          className="form-control"
                          name="quantity"
                          id="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="Quantity"
                        />
                      </div>
                      {errors.quantity && (
                        <p style={{ color: "red" }}>{errors.quantity}</p>
                      )}
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="noOfMaterials">No of materials</label>
                        <input
                          type="text"
                          className="form-control"
                          name="noOfMaterials"
                          id="noOfMaterials"
                          value={formData.noOfMaterials}
                          onChange={handleChange}
                          placeholder="No of materials"
                        />
                      </div>
                      {errors.noOfMaterials && (
                        <p style={{ color: "red" }}>{errors.noOfMaterials}</p>
                      )}
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="dcNumber">DC Number</label>
                        <input
                          type="text"
                          className="form-control"
                          name="dcNumber"
                          id="dcNumber"
                          value={formData.dcNumber}
                          onChange={handleChange}
                          placeholder="DC Number"
                        />
                      </div>
                      {errors.dcNumber && (
                        <p style={{ color: "red" }}>{errors.dcNumber}</p>
                      )}
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="dcImage">
                          DC Image &#8203; 
                          {editData?.dcImage ? (
                            <span>
                              <a target="_blank"
                                href={`${process.env.REACT_APP_BACKEND_FILE_URL}/materialInwards/1724748362096.pdf`}
                                download
                              >
                                <iconify-icon icon="mingcute:download-fill"></iconify-icon>
                              </a>
                            </span>
                          ) : (
                            <span></span>
                          )}
                        </label>

                        <input
                          type="file"
                          className="form-control"
                          name="dcImage"
                          id="dcImage"
                          onChange={handleChange}
                          placeholder="DC Image"
                        />
                      </div>
                      {errors.dcImage && (
                        <p style={{ color: "red" }}>{errors.dcImage}</p>
                      )}
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="receivedDate">Received Date</label>
                        <input
                          type="date"
                          className="form-control"
                          name="receivedDate"
                          id="receivedDate"
                          min={new Date().toISOString().split("T")[0]}
                          value={formData.receivedDate}
                          onChange={handleChange}
                          placeholder="receivedDate"
                        />
                      </div>
                      {errors.receivedDate && (
                        <p style={{ color: "red" }}>{errors.receivedDate}</p>
                      )}
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="estimatedDispatchDate">
                          Estimated Dispatch Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          name="estimatedDispatchDate"
                          id="estimatedDispatchDate"
                          min={new Date().toISOString().split("T")[0]}
                          value={formData.estimatedDispatchDate}
                          onChange={handleChange}
                          placeholder="Estimated Dispatch Date"
                        />
                      </div>
                      {errors.estimatedDispatchDate && (
                        <p style={{ color: "red" }}>
                          {errors.estimatedDispatchDate}
                        </p>
                      )}
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="coatingRequired">
                          Coating Required
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="coatingRequired"
                          id="coatingRequired"
                          value={formData.coatingRequired}
                          onChange={handleChange}
                          placeholder="Coating Required"
                        />
                      </div>
                      {errors.coatingRequired && (
                        <p style={{ color: "red" }}>{errors.coatingRequired}</p>
                      )}
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="inspection">Inspection</label>
                        <input
                          type="text"
                          className="form-control"
                          name="inspection"
                          id="inspection"
                          value={formData.inspection}
                          onChange={handleChange}
                          placeholder="Inspection"
                        />
                      </div>
                      {errors.inspection && (
                        <p style={{ color: "red" }}>{errors.inspection}</p>
                      )}
                    </div>

                    <div className="col-md-6">
                      {/* <div className="form-group">
                        <label htmlFor="isQtyApproved">Approved</label>
                        <input
                          type="text"
                          className="form-control"
                          name="isQtyApproved"
                          id="isQtyApproved"
                          value={formData.isQtyApproved}
                          onChange={handleChange}
                          placeholder="Approved"
                        />
                      </div> */}
                      <br></br>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          value="1"
                          onChange={handleChange}
                          name="isQtyApproved"
                          type="radio"
                          checked={formData.isQtyApproved == "1"}
                          id="isQtyApproved"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          &#8203; All Quantity received
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          value="0"
                          onChange={handleChange}
                          name="isQtyApproved"
                          type="radio"
                          checked={formData.isQtyApproved == "0"}
                          id="isQtyApprovedPartial"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          &#8203; Partially received
                        </label>
                      </div>
                      {errors.isQtyApproved && (
                        <p style={{ color: "red" }}>{errors.isQtyApproved}</p>
                      )}
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="jobType">Job Type</label>
                        <select
                          className="form-control"
                          name="jobType"
                          id="jobType"
                          value={formData.jobType}
                          onChange={handleJobTypeChange}
                        >
                          {jobTypeList?.map((jobList: any) => {
                            return (
                              <>
                                <option value={jobList.id}>
                                  {jobList.name}
                                </option>
                              </>
                            );
                          })}
                          <option value="">Please select </option>
                        </select>
                      </div>
                      {errors.jobType && (
                        <p style={{ color: "red" }}>{errors.jobType}</p>
                      )}
                    </div>

                    <hr></hr>
                    <span className="add-material" onClick={addMaterial}>
                      <iconify-icon icon="zondicons:add-solid"></iconify-icon>
                    </span>
                    {materialDetails.map((data) => {
                      return (
                        <>
                          <div className="col-md-5">
                            <div className="form-group">
                              <label htmlFor={`material-${data.index}`}>
                                Material
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name={`material-${data.index}`}
                                id={`material-${data.index}`}
                                value={data.material}
                                onChange={handleMaterialChange}
                                placeholder="Material"
                              />
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="form-group">
                              <label htmlFor={`material-${data.index}`}>
                                Thickness
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name={`thickness-${data.index}`}
                                id={`thickness-${data.index}`}
                                value={data.thickness}
                                onChange={handleMaterialChange}
                                placeholder="Thickness"
                              />
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="form-group">
                              <span
                                className="remove-material"
                                id={`remove-${data.index}`}
                                onClick={() => removeMaterial(data.index)}
                              >
                                <iconify-icon icon="clarity:remove-solid"></iconify-icon>
                              </span>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <br></br>
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <Link
                      to="/material_inward"
                      className="fw-medium btn btn-primary"
                    >
                      Back
                    </Link>
                    <button
                      type="submit"
                      style={{ marginLeft: "5px" }}
                      className="btn btn-success"
                    >
                      {editData ? "Update" : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAndEditMaterialInward;
