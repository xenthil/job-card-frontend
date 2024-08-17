import React from "react";


const Header:React.FC = ()=>{
    return (
        <>
           <div className="navbar-header">
  <div className="row align-items-center justify-content-between">
    <div className="col-auto">
      <div className="d-flex flex-wrap align-items-center gap-4">
        <button type="button" className="sidebar-toggle">
          <iconify-icon icon="heroicons:bars-3-solid" id="desktop-big-view-toggle" className="icon text-2xl non-active"></iconify-icon>
          <iconify-icon icon="iconoir:arrow-right" id="desktop-small-view-toggle" style={{display:'none'}} className="icon text-2xl active"></iconify-icon>
        </button>
        <button type="button" className="sidebar-mobile-toggle">
          <iconify-icon icon="heroicons:bars-3-solid" className="icon"></iconify-icon>2
        </button>
      </div>
    </div>
    <div className="col-auto">
      <div className="d-flex flex-wrap align-items-center gap-3">
        <button type="button" data-theme-toggle className="w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center"></button>
        <div className="dropdown d-none d-sm-inline-block">
          <button className="has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center" type="button" data-bs-toggle="dropdown">
            <img src="assets/images/lang-flag.png" alt="image" className="w-24 h-24 object-fit-cover rounded-circle" />
          </button>
          <div className="dropdown-menu to-top dropdown-menu-sm">
            <div className="py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
              <div>
                <h6 className="text-lg text-primary-light fw-semibold mb-0">Choose Your Language</h6>
              </div>
            </div>

            <div className="max-h-400-px overflow-y-auto scroll-sm pe-8">
              <div className="form-check style-check d-flex align-items-center justify-content-between mb-16">
                <label className="form-check-label line-height-1 fw-medium text-secondary-light" > 
                  <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"> 
                    <img src="assets/images/flags/flag1.png" alt="" className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0" />
                    <span className="text-md fw-semibold mb-0">English</span>
                  </span>
                </label>
                <input className="form-check-input" type="radio" name="crypto" id="english" />
              </div>
  
              <div className="form-check style-check d-flex align-items-center justify-content-between mb-16">
                <label className="form-check-label line-height-1 fw-medium text-secondary-light" > 
                  <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"> 
                    <img src="assets/images/flags/flag2.png" alt="" className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0" />
                    <span className="text-md fw-semibold mb-0">Japan</span>
                  </span>  
                </label>
                <input className="form-check-input" type="radio" name="crypto" id="japan" />
              </div>
              
              <div className="form-check style-check d-flex align-items-center justify-content-between mb-16">
                <label className="form-check-label line-height-1 fw-medium text-secondary-light" > 
                  <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"> 
                    <img src="assets/images/flags/flag3.png" alt="" className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0" />
                    <span className="text-md fw-semibold mb-0">France</span>
                  </span>  
                </label>
                <input className="form-check-input" type="radio" name="crypto" id="france"/>
              </div>
              
              <div className="form-check style-check d-flex align-items-center justify-content-between mb-16">
                <label className="form-check-label line-height-1 fw-medium text-secondary-light" > 
                  <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"> 
                    <img src="assets/images/flags/flag4.png" alt="" className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0" />
                    <span className="text-md fw-semibold mb-0">Germany</span>
                  </span>  
                </label>
                <input className="form-check-input" type="radio" name="crypto" id="germany" />
              </div>
              
              <div className="form-check style-check d-flex align-items-center justify-content-between mb-16">
                <label className="form-check-label line-height-1 fw-medium text-secondary-light" > 
                  <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"> 
                    <img src="assets/images/flags/flag5.png" alt="" className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0" />
                    <span className="text-md fw-semibold mb-0">South Korea</span>
                  </span>  
                </label>
                <input className="form-check-input" type="radio" name="crypto" id="korea" />
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <button className="has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center" type="button" data-bs-toggle="dropdown">
            <iconify-icon icon="mage:email" className="text-primary-light text-xl"></iconify-icon>
          </button>
          <div className="dropdown-menu to-top dropdown-menu-lg p-0">
            <div className="m-16 py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
              <div>
                <h6 className="text-lg text-primary-light fw-semibold mb-0">Message</h6>
              </div>
              <span className="text-primary-600 fw-semibold text-lg w-40-px h-40-px rounded-circle bg-base d-flex justify-content-center align-items-center">05</span>
            </div>
            
           <div className="max-h-400-px overflow-y-auto scroll-sm pe-4">
            
            <a href="#" className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between">
              <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"> 
                <span className="w-40-px h-40-px rounded-circle flex-shrink-0 position-relative">
                  <img src="assets/images/notification/profile-3.png" alt="" />
                  <span className="w-8-px h-8-px bg-success-main rounded-circle position-absolute end-0 bottom-0"></span>
                </span> 
                <div>
                  <h6 className="text-md fw-semibold mb-4">Kathryn Murphy</h6>
                  <p className="mb-0 text-sm text-secondary-light text-w-100-px">hey! there i’m...</p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-end"> 
                <span className="text-sm text-secondary-light flex-shrink-0">12:30 PM</span>
                <span className="mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-warning-main rounded-circle">8</span>
              </div>
            </a>

            <a href="#" className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between">
              <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"> 
                <span className="w-40-px h-40-px rounded-circle flex-shrink-0 position-relative">
                  <img src="assets/images/notification/profile-4.png" alt="" />
                  <span className="w-8-px h-8-px  bg-neutral-300 rounded-circle position-absolute end-0 bottom-0"></span>
                </span> 
                <div>
                  <h6 className="text-md fw-semibold mb-4">Kathryn Murphy</h6>
                  <p className="mb-0 text-sm text-secondary-light text-w-100-px">hey! there i’m...</p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-end"> 
                <span className="text-sm text-secondary-light flex-shrink-0">12:30 PM</span>
                <span className="mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-warning-main rounded-circle">2</span>
              </div>
            </a>

            <a href="#" className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50">
              <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"> 
                <span className="w-40-px h-40-px rounded-circle flex-shrink-0 position-relative">
                  <img src="assets/images/notification/profile-5.png" alt="" />
                  <span className="w-8-px h-8-px bg-success-main rounded-circle position-absolute end-0 bottom-0"></span>
                </span> 
                <div>
                  <h6 className="text-md fw-semibold mb-4">Kathryn Murphy</h6>
                  <p className="mb-0 text-sm text-secondary-light text-w-100-px">hey! there i’m...</p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-end"> 
                <span className="text-sm text-secondary-light flex-shrink-0">12:30 PM</span>
                <span className="mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-neutral-400 rounded-circle">0</span>
              </div>
            </a>

            <a href="#" className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50">
              <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"> 
                <span className="w-40-px h-40-px rounded-circle flex-shrink-0 position-relative">
                  <img src="assets/images/notification/profile-6.png" alt="" />
                  <span className="w-8-px h-8-px bg-neutral-300 rounded-circle position-absolute end-0 bottom-0"></span>
                </span> 
                <div>
                  <h6 className="text-md fw-semibold mb-4">Kathryn Murphy</h6>
                  <p className="mb-0 text-sm text-secondary-light text-w-100-px">hey! there i’m...</p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-end"> 
                <span className="text-sm text-secondary-light flex-shrink-0">12:30 PM</span>
                <span className="mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-neutral-400 rounded-circle">0</span>
              </div>
            </a>

            <a href="#" className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between">
              <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"> 
                <span className="w-40-px h-40-px rounded-circle flex-shrink-0 position-relative">
                  <img src="assets/images/notification/profile-7.png" alt="" />
                  <span className="w-8-px h-8-px bg-success-main rounded-circle position-absolute end-0 bottom-0"></span>
                </span> 
                <div>
                  <h6 className="text-md fw-semibold mb-4">Kathryn Murphy</h6>
                  <p className="mb-0 text-sm text-secondary-light text-w-100-px">hey! there i’m...</p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-end"> 
                <span className="text-sm text-secondary-light flex-shrink-0">12:30 PM</span>
                <span className="mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-warning-main rounded-circle">8</span>
              </div>
            </a>

           </div>
            <div className="text-center py-12 px-16"> 
                <a href="#" className="text-primary-600 fw-semibold text-md">See All Message</a>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <button className="has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center" type="button" data-bs-toggle="dropdown">
            <iconify-icon icon="iconoir:bell" className="text-primary-light text-xl"></iconify-icon>
          </button>
          <div className="dropdown-menu to-top dropdown-menu-lg p-0">
            <div className="m-16 py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
              <div>
                <h6 className="text-lg text-primary-light fw-semibold mb-0">Notifications</h6>
              </div>
              <span className="text-primary-600 fw-semibold text-lg w-40-px h-40-px rounded-circle bg-base d-flex justify-content-center align-items-center">05</span>
            </div>
            
           <div className="max-h-400-px overflow-y-auto scroll-sm pe-4">
            <a href="#" className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between">
              <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"> 
                <span className="w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                  <iconify-icon icon="bitcoin-icons:verify-outline" className="icon text-xxl"></iconify-icon>
                </span> 
                <div>
                  <h6 className="text-md fw-semibold mb-4">Congratulations</h6>
                  <p className="mb-0 text-sm text-secondary-light text-w-200-px">Your profile has been Verified. Your profile has been Verified</p>
                </div>
              </div>
              <span className="text-sm text-secondary-light flex-shrink-0">23 Mins ago</span>
            </a>
            
            <a href="#" className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50">
              <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"> 
                <span className="w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                  <img src="assets/images/notification/profile-1.png" alt=""/>
                </span> 
                <div>
                  <h6 className="text-md fw-semibold mb-4">Ronald Richards</h6>
                  <p className="mb-0 text-sm text-secondary-light text-w-200-px">You can stitch between artboards</p>
                </div>
              </div>
              <span className="text-sm text-secondary-light flex-shrink-0">23 Mins ago</span>
            </a>
            
            <a href="#" className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between">
              <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"> 
                <span className="w-44-px h-44-px bg-info-subtle text-info-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                  AM
                </span> 
                <div>
                  <h6 className="text-md fw-semibold mb-4">Arlene McCoy</h6>
                  <p className="mb-0 text-sm text-secondary-light text-w-200-px">Invite you to prototyping</p>
                </div>
              </div>
              <span className="text-sm text-secondary-light flex-shrink-0">23 Mins ago</span>
            </a>

            <a href="#" className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50">
              <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"> 
                <span className="w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                  <img src="assets/images/notification/profile-2.png" alt=""/>
                </span> 
                <div>
                  <h6 className="text-md fw-semibold mb-4">Annette Black</h6>
                  <p className="mb-0 text-sm text-secondary-light text-w-200-px">Invite you to prototyping</p>
                </div>
              </div>
              <span className="text-sm text-secondary-light flex-shrink-0">23 Mins ago</span>
            </a>

            <a href="#" className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between">
              <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"> 
                <span className="w-44-px h-44-px bg-info-subtle text-info-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                  DR
                </span> 
                <div>
                  <h6 className="text-md fw-semibold mb-4">Darlene Robertson</h6>
                  <p className="mb-0 text-sm text-secondary-light text-w-200-px">Invite you to prototyping</p>
                </div>
              </div>
              <span className="text-sm text-secondary-light flex-shrink-0">23 Mins ago</span>
            </a>
           </div>

            <div className="text-center py-12 px-16"> 
                <a href="#" className="text-primary-600 fw-semibold text-md">See All Notification</a>
            </div>

          </div>
        </div>

        <div className="dropdown">
          <button className="d-flex justify-content-center align-items-center rounded-circle" type="button" data-bs-toggle="dropdown">
            <img src="assets/images/user.png" alt="image" className="w-40-px h-40-px object-fit-cover rounded-circle" />
          </button>
          <div className="dropdown-menu to-top dropdown-menu-sm">
            <div className="py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
              <div>
                <h6 className="text-lg text-primary-light fw-semibold mb-2">Shaidul Islam</h6>
                <span className="text-secondary-light fw-medium text-sm">Admin</span>
              </div>
              <button type="button" className="hover-text-danger">
                <iconify-icon icon="radix-icons:cross-1" className="icon text-xl"></iconify-icon> 
              </button>
            </div>
            <ul className="to-top-list">
              <li>
                <a className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3" href="view-profile.html"> 
                 My Profile</a>
              </li>
              <li>
                <a className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3" href="email.html"> 
                 Inbox</a>
              </li>
              <li>
                <a className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3" href="company.html"> 
                  Setting</a>
              </li>
              <li>
                <a className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-danger d-flex align-items-center gap-3" href="#"> 
                 Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
        </>
    )
}

export default Header;