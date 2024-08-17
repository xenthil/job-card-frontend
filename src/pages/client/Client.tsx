import React, { useState, useEffect } from "react";
import Pagination from "../../components/Pagination";
import { Link ,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSupplier, addMessage,removeSupplier } from "../../redux/reducers/ClientSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { toast } from "react-toastify";
import PageLoader from "../../components/PageLoader";
import DynamicTable  from '../../components/DynamicTable'
import { Column } from 'react-table';
import ModalComponent  from '../../components/ModalComponent'

interface Address {
  id: number;
  clientId: number;
  email: string;
  contact: string;
  address: string;
  area: string;
  city: string;
  pincode: string;
  contactPersonName: string;
  contactPersonContact: string;
  description: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Clients {
  id: number;
  clientName: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  address: Address[];
}


const Client: React.FC = () => {
  const data = useSelector((state: RootState) => state.client.supplier);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [deletedData, setDeletedData] = useState<any>([]);

  const columns: Column<Clients>[] = React.useMemo(
    () => [
      {
        Header: "Client Name",
        accessor: "clientName",
      },
      {
        Header: "Address",
        accessor: (row: any) => row.address[0]?.address || "N/A",
      },
      {
        Header: "City",
        accessor: (row: any) => row.address[0]?.city || "N/A",
      },
      {
        Header: "Contact Person",
        accessor: (row) => row.address[0]?.contactPersonName || "N/A",
      },
      {
        Header: "Contact Person Contact",
        accessor: (row) => row.address[0]?.contactPersonContact || "N/A",
      },
    ],
    []
  );

  const handleEdit = (row: Clients) => {
    navigate('/editClient', { state: row});
  };

  const handleDelete = (row: Clients) => {
    setDeletedData(row)
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSaveChanges = () => {
    setModalOpen(false);
    let data:any = {clientId :deletedData?.id,addressId : deletedData?.address?.[0]?.id } 
    dispatch(removeSupplier(data))
      .unwrap()
      .then((response: any) => {
        console.log("API response:", response);
        if (response?.status === 200 || response?.status === 201) {
          toast.success(response?.message);
          getSupplierData()
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
    dispatch(getSupplier({}))
      .unwrap()
      .then((response: any) => {
        console.log("API response:", response);
        if (response?.status === 200 || response?.status === 201) {
          toast.success(response?.message);
        } else {
          // Handle other status codes if needed
        }
      })
      .catch((err: any) => {
        console.error("API call error:", err);
        dispatch(addMessage({ error: err }));
      });
  };

  useEffect(() => {
    getSupplierData();
  }, [dispatch]);

  return (
    <>
      <div className="dashboard-main-body">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
          <h6 className="fw-semibold mb-0">Client</h6>
          <ul className="d-flex align-items-center gap-2">
            <li className="fw-medium">
              {" "}
              <Link to="/addClient" className="btn btn-primary">
                {" "}
                Add client
              </Link>{" "}
            </li>
          </ul>
        </div>

        <div className="card basic-data-table">
          <div className="card-header">
            <h5 className="card-title mb-0">Client informations</h5>
          </div>
          <div className="card-body">
          <DynamicTable columns={columns} data={data} onEdit={handleEdit} onDelete={handleDelete} />
            <br></br>
            <div>
              <Pagination />
            </div>
          </div>
        </div>
            <ModalComponent
            show={modalOpen}
            title="Are you Sure"
            body="Do you want to remove ?"
            onClose={handleCloseModal}
            onSave={handleSaveChanges}
          />
      </div>
    </>
  );
};

export default Client;
