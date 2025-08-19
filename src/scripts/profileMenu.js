import userService from "./userService.js";

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("profileToggle");
  const menu = document.getElementById("dropdownMenu");
  const arrow = document.getElementById("arrowIcon");
  const logout = document.getElementById("logout");

  const arrowDown = "/src/assets/svg/arrow-down.svg";
  const arrowUp = "/src/assets/svg/arrow-up.svg";

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("show");
    arrow.src = isOpen ? arrowUp : arrowDown;
  });

  document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("show");
      arrow.src = arrowDown;
    }
  });

  logout.addEventListener("click", (event) => {
    event.preventDefault();
    userService
      .logout()
      .then(() => {
        window.location.href = "/login";
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  });
});
