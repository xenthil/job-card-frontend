import React from "react";
import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
  return (
    <>
      <aside className="sidebar">
        <button type="button" className="sidebar-close-btn">
          <iconify-icon icon="radix-icons:cross-2"></iconify-icon>
        </button>
        <div>
          <a href="index.html" className="sidebar-logo">
            <img
              src="assets/images/logo.png"
              alt="site logo"
              className="light-logo"
            />
            <img
              src="assets/images/logo-light.png"
              alt="site logo"
              className="dark-logo"
            />
            <img
              src="assets/images/logo-icon.png"
              alt="site logo"
              className="logo-icon"
            />
          </a>
        </div>
        <div className="sidebar-menu-area">
          <ul className="sidebar-menu" id="sidebar-menu">
            <li className="">
              <Link to="/">
                <iconify-icon
                  icon="solar:home-smile-angle-outline"
                  className="menu-icon"
                ></iconify-icon>
                <span>&nbsp;&nbsp;Dashboard</span>
              </Link>
              {/* <ul className="sidebar-submenu">
                <li>
                  <a href="index.html">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto"></i>
                    Home
                  </a>
                </li>
              </ul> */}
            </li>

            {/* <li className="dropdown">
              <Link to="/">
                <iconify-icon
                  icon="hugeicons:invoice-03"
                  className="menu-icon"
                ></iconify-icon>
                <span>Invoice</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <a href="invoice-list.html">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto"></i>{" "}
                    List
                  </a>
                </li>
                <li>
                  <a href="invoice-preview.html">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto"></i>{" "}
                    Preview
                  </a>
                </li>
                <li>
                  <a href="invoice-add.html">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto"></i>{" "}
                    Add new
                  </a>
                </li>
                <li>
                  <a href="invoice-edit.html">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto"></i>{" "}
                    Edit
                  </a>
                </li>
              </ul>
            </li> */}

            {/* <li className="sidebar-menu-group-title">Jobs</li> */}

            <li className="dropdown">
              <Link to="/client">
                <iconify-icon
                  icon="heroicons:document"
                  className="menu-icon"
                ></iconify-icon>
                <span> &nbsp;&nbsp;Clients</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link to="client">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto"></i>
                    Client
                  </Link>
                </li>
                <li>
                  <Link to="material_inward">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto"></i>
                    Material Inward
                  </Link>
                </li>
                <li>
                  <Link to="production_details">
                    <i className="ri-circle-fill circle-icon text-success-main w-auto"></i>{" "}
                    Production Details
                  </Link>
                </li>
                <li>
                  <Link to="filing_details">
                    <i className="ri-circle-fill circle-icon text-success-main w-auto"></i>{" "}
                    Filing Details
                  </Link>
                </li>
                <li>
                  <Link to="dispatch_details">
                    <i className="ri-circle-fill circle-icon text-success-main w-auto"></i>{" "}
                    Dispatch Details
                  </Link>
                </li>
              </ul>
            </li>

            {/* <li className="dropdown">
              <Link to="">
                <iconify-icon
                  icon="flowbite:users-group-outline"
                  className="menu-icon"
                ></iconify-icon>
                <span>Users</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <a href="users-list.html">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto"></i>{" "}
                    Users List
                  </a>
                </li>
                <li>
                  <a href="users-grid.html">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto"></i>{" "}
                    Users Grid
                  </a>
                </li>
                <li>
                  <a href="add-user.html">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto"></i>{" "}
                    Add User
                  </a>
                </li>
                <li>
                  <a href="view-profile.html">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto"></i>{" "}
                    View Profile
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <Link to="/">
                <iconify-icon
                  icon="icon-park-outline:setting-two"
                  className="menu-icon"
                ></iconify-icon>
                <span>Settings</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <a href="company.html">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto"></i>{" "}
                    Company
                  </a>
                </li>
                <li>
                  <a href="notification.html">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto"></i>{" "}
                    Notification
                  </a>
                </li>
                <li>
                  <a href="notification-alert.html">
                    <i className="ri-circle-fill circle-icon text-info-main w-auto"></i>{" "}
                    Notification Alert
                  </a>
                </li>
                <li>
                  <a href="theme.html">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto"></i>{" "}
                    Theme
                  </a>
                </li>
                <li>
                  <a href="currencies.html">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto"></i>{" "}
                    Currencies
                  </a>
                </li>
                <li>
                  <a href="language.html">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto"></i>{" "}
                    Languages
                  </a>
                </li>
                <li>
                  <a href="payment-gateway.html">
                    <i className="ri-circle-fill circle-icon text-danger-main w-auto"></i>{" "}
                    Payment Gateway
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
