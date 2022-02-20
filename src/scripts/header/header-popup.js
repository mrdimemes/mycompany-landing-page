const headerPopup = () => {
  const popupIcon = document.querySelector(".header__popup-icon");
  const headerNav = document.querySelector(".header__nav");

  const toggleHeaderPopup = () => {
    popupIcon.classList.toggle("header__popup-icon_active");
    headerNav.classList.toggle("header__nav_active");
  }

  popupIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleHeaderPopup()
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    const isTargetPopup = target == headerNav || headerNav.contains(target);
    const isActive = headerNav.classList.contains("header__nav_active");

    if (!isTargetPopup && isActive) {
      toggleHeaderPopup();
    }
  });
}

headerPopup();