import React from "react";
import { Link, NavLink } from "react-router-dom";
import './sidebar.css'

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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `menu-link ${isActive ? "active" : ""}`
                }
              >
                <iconify-icon
                  icon="solar:home-smile-angle-outline"
                  className="menu-icon"
                ></iconify-icon>
                <span>&nbsp;&nbsp;Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="client" className={({ isActive }) =>
                  `menu-link ${isActive ? "active" : ""}`
                }>
                <iconify-icon icon="mdi:user-outline"></iconify-icon>
                &nbsp;&nbsp; Client
              </NavLink>
            </li>
            <li>
              <NavLink to="material_inward" className={({ isActive }) =>
                  `menu-link ${isActive ? "active" : ""}`
                }>
                <iconify-icon icon="lets-icons:materials"></iconify-icon>
                &nbsp;&nbsp;Material Inward
              </NavLink>
            </li>
            <li>
              <NavLink to="jobs" className={({ isActive }) =>
                  `menu-link ${isActive ? "active" : ""}`
                }>
                <iconify-icon icon="hugeicons:new-job"></iconify-icon>
                &nbsp;&nbsp;Jobs
              </NavLink>
            </li>
            <li>
              <NavLink to="production_details" className={({ isActive }) =>
                  `menu-link ${isActive ? "active" : ""}`
                }>
                <iconify-icon icon="eos-icons:products"></iconify-icon>
                &nbsp;&nbsp;Production Details
              </NavLink>
            </li>
            <li>
              <NavLink to="filing_details" className={({ isActive }) =>
                  `menu-link ${isActive ? "active" : ""}`
                }>
                <iconify-icon icon="mdi:filing-cabinet"></iconify-icon>
                &nbsp;&nbsp; Filing Details
              </NavLink>
            </li>
            <li>
              <NavLink to="dispatch_details" className={({ isActive }) =>
                  `menu-link ${isActive ? "active" : ""}`
                }>
                <iconify-icon icon="iconamoon:delivery-fast-thin"></iconify-icon>
                &nbsp;&nbsp;Dispatch Details
              </NavLink>
            </li>
            <li>
              <NavLink to="logout" className={({ isActive }) =>
                  `menu-link ${isActive ? "active" : ""}`
                }>
                <iconify-icon icon="uiw:logout"></iconify-icon>
                &nbsp;&nbsp; Logout
              </NavLink>
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
