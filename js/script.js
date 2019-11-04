var currentLocation = window.location;

function nojs() {
  var blockAll = document.querySelectorAll(".main-nav--nojs");
  var addBlockHandler = function (block) {
    block.classList.remove("main-nav--nojs");
  };
  for (var i = 0; i < blockAll.length; i++) {
    addBlockHandler(blockAll[i]);
  }
}

function mainNav() {
  var menu = document.querySelector(".page-header__main-nav");
  var toggle = document.querySelector(".main-nav__toggle");
  toggle.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (menu.classList.contains('main-nav--closed')) {
      menu.classList.remove('main-nav--closed');
      menu.classList.add('main-nav--opened');
    } else {
      menu.classList.add('main-nav--closed');
      menu.classList.remove('main-nav--opened');
    }
  })
}

function legendToggle() {
  var fieldsetAll = document.querySelectorAll(".main-filter__set");
  var addToggleHandler = function (toggle, fieldset) {
    toggle.addEventListener("click", function () {
      fieldset.classList.toggle("main-filter__set--active");
    });
  };
  for (var i = 0; i < fieldsetAll.length; i++) {
    var fieldset = fieldsetAll[i];
    var toggle = fieldset.querySelector(".main-filter__toggle");
    addToggleHandler(toggle, fieldset);
    fieldset.classList.remove("main-filter__set--active");
  }
}

function headerCountryFilter() {
  var activateBlock = document.querySelector(".page-main__item--choose-country");
  var button = activateBlock.querySelector(".choose-country__btn--toggle");
  var closeBtn = activateBlock.querySelector(".alphabet__btn");
  button.addEventListener("click", function () {
    activateBlock.classList.toggle("choose-country--active");
  });
  closeBtn.addEventListener("click", function () {
    activateBlock.classList.remove("choose-country--active");
  });
}

function businessPrice() {
  var toggle = document.querySelector(".add-profile__business-price");
  var price = document.querySelector(".business-price");
  var closeBtn = document.querySelector(".business-price__close");
  toggle.addEventListener("click", function (evt) {
    evt.preventDefault();
    price.classList.toggle("business-price--active");
  });
  closeBtn.addEventListener("click", function () {
    price.classList.remove("business-price--active");
  });
}

function chooseCountryForm() {
  var blockAll = document.querySelectorAll(".country-list1__item");
  var addToggleHandler = function (toggle, block) {
    toggle.addEventListener("click", function () {
      block.classList.toggle("country-item--active");
    });
  };
  for (var i = 0; i < blockAll.length; i++) {
    var block = blockAll[i];
    var toggle = block.querySelector(".country-item__btn-toggle");
    addToggleHandler(toggle, block);
  }
}

function scrollMenu() {
  var header = document.querySelector(".page-header");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 740 && window.innerWidth >= 1200 || window.pageYOffset > 0 && window.innerWidth < 1200) {
      header.classList.add("page-header--scrolled");
    } else {
      header.classList.remove("page-header--scrolled");
    }
  });
}

nojs();
mainNav();
scrollMenu();


if (document.querySelector(".add-profile__business-price") !== null) {
  businessPrice();
}

if (currentLocation.pathname.lastIndexOf("/catalog.html") >= 0) {
  legendToggle();
  headerCountryFilter();
}

if (currentLocation.pathname.lastIndexOf("/form.html") >= 0) {
  chooseCountryForm()
}
