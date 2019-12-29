window.addEventListener("DOMContentLoaded", function(e) {
  document.querySelector("t1-presentation").onclick = handlePresentationClick;
});

function handlePresentationClick() {
  var current = document.querySelector("t1-slide.active");
  var next = current.nextElementSibling;

  //guard code.
  while (next && next.tagName != "T1-SLIDE") {
    next = next.nextElementSibling;
  }

  if (next) {
    current.classList.remove("active");
    next.classList.add("active");
  }
}
