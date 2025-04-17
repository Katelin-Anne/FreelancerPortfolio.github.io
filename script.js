function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

  const form = document.getElementById("contact-form");
  const loading = document.getElementById("loading");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("close-popup");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    loading.style.display = "block";

    // Simulate form processing
    setTimeout(() => {
      loading.style.display = "none";
      form.reset();
      popup.style.display = "block";
    }, 1500);
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });



