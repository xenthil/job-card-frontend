import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import $ from 'jquery';
import store from './redux/store'; 
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

$(document).ready(() => {
  $(".sidebar-menu .dropdown").on("click", function(){
    var item = $(this);
    item.siblings(".dropdown").children(".sidebar-submenu").slideUp();
  
    item.siblings(".dropdown").removeClass("dropdown-open");
  
    item.siblings(".dropdown").removeClass("open");
  
    item.children(".sidebar-submenu").slideToggle();
  
    item.toggleClass("dropdown-open");
  });

  $("#desktop-big-view-toggle").on("click", function(){
    $("#desktop-big-view-toggle").hide();
    $("#main-layouts").removeClass('grid-container')
    $("#main-layouts").addClass('mobile-grid-container')
    $("#desktop-small-view-toggle").show();
    $(".sidebar").toggleClass("active");
    $(".dashboard-main").toggleClass("active");
  });

  $("#desktop-small-view-toggle").on("click", function(){
    $("#desktop-big-view-toggle").show();
    $("#main-layouts").addClass('grid-container')
    $("#main-layouts").removeClass('mobile-grid-container')
    $("#desktop-small-view-toggle").hide();
    $(".sidebar").toggleClass("active");
    $(".dashboard-main").toggleClass("active");
  });

  $(".sidebar-mobile-toggle").on("click", function(){
    $(".sidebar").addClass("sidebar-open");
    $("body").addClass("overlay-active");
  });

  $(".sidebar-close-btn").on("click", function(){
    $(".sidebar").removeClass("sidebar-open");
    $("body").removeClass("overlay-active");
  });

  function calculateSettingAsThemeString({ localStorageTheme } : {localStorageTheme:any}) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
    return "light";
  }
  
  /**
  * Utility function to update the button text and aria-label.
  */
  function updateButton({ buttonEl, isDark }:{ buttonEl:any, isDark:any }) {
    const newCta = isDark ? "dark" : "light";
    // use an aria-label if you are omitting text on the button
    // and using a sun/moon icon, for example
    if(buttonEl){
      buttonEl.setAttribute("aria-label", newCta);
      buttonEl.innerText = newCta;
    }
    
  }
  
  /**
  * Utility function to update the theme setting on the html tag
  */
  function updateThemeOnHtmlEl({ theme }:{ theme:any }) {
    let el = document.querySelector("html");
    if(el){
      el.setAttribute("data-theme", theme);
    }
  }
  
  /**
  * 1. Grab what we need from the DOM and system settings on page load
  */
  const button = document.querySelector("[data-theme-toggle]");
  const localStorageTheme = localStorage.getItem("theme");
  
  /**
  * 2. Work out the current site settings
  */
  let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme });
  
  /**
  * 3. Update the theme setting and button text accoridng to current settings
  */
  updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
  updateThemeOnHtmlEl({ theme: currentThemeSetting });
  
  /**
  * 4. Add an event listener to toggle the theme
  */
 if(button){
  button.addEventListener("click", (event) => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
  
    localStorage.setItem("theme", newTheme);
    updateButton({ buttonEl: button, isDark: newTheme === "dark" });
    updateThemeOnHtmlEl({ theme: newTheme });
  
    currentThemeSetting = newTheme;
  }); 
 }
 
  
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ToastContainer />
      <App />
  </Provider>,
  </React.StrictMode>
);

