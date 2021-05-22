document.querySelector(".page-header__toggle").addEventListener("click", () => {
  document.querySelector(".page-header__menu").classList.toggle("page-header__menu--expand")
});

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector("body").classList.remove("js-disabled")
});

let toogle_page_header_scroll = function() {
  if (window.pageYOffset === 0) {
    document.querySelector(".page-header__menu").classList.remove("page-header__menu--scroll")
  } else {
    document.querySelector(".page-header__menu").classList.add("page-header__menu--scroll")
  }
};

function throttle(fn, wait) {
 let timeoutID = null;
  return function() {
      if (!timeoutID) {
          clearTimeout(timeoutID);
          timeoutID = setTimeout(function() {
            fn();
              timeoutID = null;
          }, wait);
      }
  }
}

toogle_page_header_scroll();

window.addEventListener('scroll', throttle(toogle_page_header_scroll, 300));
