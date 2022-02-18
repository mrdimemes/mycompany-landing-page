const headerPopup = () => {
  const popupIcon = document.querySelector(".header__popup-icon");
  const headerNav = document.querySelector(".header__nav");

  const toggleHeaderPopup = () => {
    popupIcon.classList.toggle("header__popup-icon_active");
    headerNav.classList.toggle("header__nav_active");
  }

  popupIcon.addEventListener("click", toggleHeaderPopup);
}

headerPopup();