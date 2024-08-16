import React from 'react';

const Client:React.FC = ()=>{
    return (
        <>
           <div className="dashboard-main-body">

<div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
<h6 className="fw-semibold mb-0">Basic Table</h6>
<ul className="d-flex align-items-center gap-2">
<li className="fw-medium">
  <a href="index.html" className="d-flex align-items-center gap-1 hover-text-primary">
    <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg"></iconify-icon>
    Dashboard
  </a>
</li>
<li>-</li>
<li className="fw-medium">Basic Table</li>
</ul>
</div>

<div className="card basic-data-table">
  <div className="card-header">
    <h5 className="card-title mb-0">Default Datatables</h5>
  </div>
  <div className="card-body">
    <table className="table bordered-table mb-0" id="dataTable" data-page-length='10'>
      <thead>
        <tr>
          <th scope="col">
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                S.L
              </label>
            </div>
          </th>
          <th scope="col">Invoice</th>
          <th scope="col">Name</th>
          <th scope="col">Issued Date</th>
          <th scope="col">Amount</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                01
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#526534</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list1.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Kathryn Murphy</h6>
            </div>
          </td>
          <td>25 Jan 2024</td>
          <td>$200.00</td>
          <td> <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                02
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#696589</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list2.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Annette Black</h6>
            </div>
          </td>
          <td>25 Jan 2024</td>
          <td>$200.00</td>
          <td> <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                03
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#256584</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list3.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Ronald Richards</h6>
            </div>
          </td>
          <td>10 Feb 2024</td>
          <td>$200.00</td>
          <td> <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                04
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#526587</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list4.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Eleanor Pena</h6>
            </div>
          </td>
          <td>10 Feb 2024</td>
          <td>$150.00</td>
          <td> <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                05
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#105986</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list5.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Leslie Alexander</h6>
            </div>
          </td>
          <td>15 March 2024</td>
          <td>$150.00</td>
          <td> <span className="bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm">Pending</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                06
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#526589</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list6.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Albert Flores</h6>
            </div>
          </td>
          <td>15 March 2024</td>
          <td>$150.00</td>
          <td> <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                07
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#526520</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list7.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Jacob Jones</h6>
            </div>
          </td>
          <td>27 April 2024</td>
          <td>$250.00</td>
          <td> <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                08
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#256584</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list8.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Jerome Bell</h6>
            </div>
          </td>
          <td>27 April 2024</td>
          <td>$250.00</td>
          <td> <span className="bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm">Pending</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                09
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#200257</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list9.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Marvin McKinney</h6>
            </div>
          </td>
          <td>30 April 2024</td>
          <td>$250.00</td>
          <td> <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                10
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#526525</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list10.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Cameron Williamson</h6>
            </div>
          </td>
          <td>30 April 2024</td>
          <td>$250.00</td>
          <td> <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                01
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#526534</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list1.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Kathryn Murphy</h6>
            </div>
          </td>
          <td>25 Jan 2024</td>
          <td>$200.00</td>
          <td> <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                02
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#696589</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list2.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Annette Black</h6>
            </div>
          </td>
          <td>25 Jan 2024</td>
          <td>$200.00</td>
          <td> <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                03
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#256584</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list3.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Ronald Richards</h6>
            </div>
          </td>
          <td>10 Feb 2024</td>
          <td>$200.00</td>
          <td> <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                04
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#526587</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list4.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Eleanor Pena</h6>
            </div>
          </td>
          <td>10 Feb 2024</td>
          <td>$150.00</td>
          <td> <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                05
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#105986</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list5.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Leslie Alexander</h6>
            </div>
          </td>
          <td>15 March 2024</td>
          <td>$150.00</td>
          <td> <span className="bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm">Pending</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                06
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#526589</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list6.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Albert Flores</h6>
            </div>
          </td>
          <td>15 March 2024</td>
          <td>$150.00</td>
          <td> <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                07
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#526520</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list7.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Jacob Jones</h6>
            </div>
          </td>
          <td>27 April 2024</td>
          <td>$250.00</td>
          <td> <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                08
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#256584</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list8.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Jerome Bell</h6>
            </div>
          </td>
          <td>27 April 2024</td>
          <td>$250.00</td>
          <td> <span className="bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm">Pending</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                09
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#200257</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list9.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Marvin McKinney</h6>
            </div>
          </td>
          <td>30 April 2024</td>
          <td>$250.00</td>
          <td> <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                10
              </label>
            </div>
          </td>
          <td><a href="#" className="text-primary-600">#526525</a></td>
          <td>
            <div className="d-flex align-items-center">
              <img src="assets/images/user-list/user-list10.png" alt="" className="flex-shrink-0 me-12 radius-8" />
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Cameron Williamson</h6>
            </div>
          </td>
          <td>30 April 2024</td>
          <td>$250.00</td>
          <td> <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span> </td>
          <td>
            <a href="#" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit"></iconify-icon>
            </a>
            <a href="#" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line"></iconify-icon>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>
        </>
    )
}

export default Client;