document.addEventListener("DOMContentLoaded", function () {
  function toggleOptions() {
    document.querySelectorAll(".option").forEach((option) => {
      const radioInput = option.querySelector(".selectbtn");
      const sizeColorSection = option.querySelector(".size-color-section");

      if (radioInput.checked) {
        option.classList.add("selected");
        sizeColorSection.style.display = "block";
      } else {
        option.classList.remove("selected");
        sizeColorSection.style.display = "none";
      }
    });
  }

  toggleOptions();

  document.querySelectorAll(".selectbtn").forEach((input) => {
    input.addEventListener("change", toggleOptions);
  });
});
