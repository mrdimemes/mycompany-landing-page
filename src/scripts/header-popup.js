const popupIcon = document.querySelector(".header__popup-icon");
const headerNav = document.querySelector(".header__nav");

const toggleHeaderPopup = () => {
  popupIcon.classList.toggle("active");
  headerNav.classList.toggle("active");
}

popupIcon.addEventListener("click", toggleHeaderPopup);