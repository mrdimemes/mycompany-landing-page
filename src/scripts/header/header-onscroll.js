const headerOnScroll = () => {
  const header = document.querySelector(".header");
  const headerNav = document.querySelector(".header__nav");
  const popupIcon = document.querySelector(".header__popup-icon");

  const handleScroll = () => {
    headerNav.classList.remove("header__nav_active");
    popupIcon.classList.remove("header__popup-icon_active");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add("header_scrolled");
      headerNav.classList.add("header__nav_scrolled");
    } else {
      header.classList.remove("header_scrolled");
      headerNav.classList.remove("header__nav_scrolled");
    }
  }

  window.onscroll = handleScroll;
}

headerOnScroll();