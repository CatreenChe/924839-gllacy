var feedbackFormOpenButton = document.querySelector(".open-feedback-form");
var feedbackFormCloseButton = document.querySelector(".feedback-form-close");
var feedbackForm = document.querySelector(".feedback-form");
var pageFadeOverlay = document.querySelector(".page-fade-overlay")

feedbackFormOpenButton.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackForm.classList.add("feedback-form-show");
  pageFadeOverlay.classList.add("page-fade-overlay-show")
});

feedbackFormCloseButton.addEventListener('click', function(event) {
  event.preventDefault();
  feedbackForm.classList.remove("feedback-form-show");
  pageFadeOverlay.classList.remove("page-fade-overlay-show")
});

pageFadeOverlay.addEventListener('click', function(event) {
  event.preventDefault();
  feedbackForm.classList.remove("feedback-form-show");
  pageFadeOverlay.classList.remove("page-fade-overlay-show")
});