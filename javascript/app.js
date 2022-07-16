let getDefaultCompanyState = document.querySelector(".company-default-state");
let getDefaultFeatureState = document.querySelector(".features-default-state");
let featuresLink = document.querySelector(".features-link");
let companyLink = document.querySelector(".company-link");
let featuresDefaultArrow = document.querySelector(".features-default-arrow");
let featuresActiveArrow = document.querySelector(".features-active-arrow");
let companyDefaultArrow = document.querySelector(".company-default-arrow");
let companyActiveArrow = document.querySelector(".company-active-arrow");

console.log(companyLink.classList.contains("company-link"));

companyLink.addEventListener("mouseover", function (event) {
  getDefaultCompanyState.classList.add("company-active-state");
  companyDefaultArrow.style.display = "none";
  companyActiveArrow.style.display = "inline-block";
});

companyLink.addEventListener("mouseout", function (event) {
  getDefaultCompanyState.classList.remove("company-active-state");
  companyActiveArrow.style.display = "none";
  companyDefaultArrow.style.display = "inline-block";
});

featuresLink.addEventListener("mouseover", function (event) {
  getDefaultFeatureState.classList.add("features-active-state");
  featuresDefaultArrow.style.display = "none";
  featuresActiveArrow.style.display = "inline-block";
});

featuresLink.addEventListener("mouseout", function (event) {
  /* getDefaultFeatureState.classList.remove("features-active-state"); */
  featuresActiveArrow.style.display = "none";
  featuresDefaultArrow.style.display = "inline-block";
});

