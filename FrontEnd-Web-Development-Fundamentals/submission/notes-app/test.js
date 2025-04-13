const addButton = document.getElementById('add-notes-btn');
const mainContent = document.querySelector(".main-content");

  addButton.addEventListener("click", () => {
    mainContent.classList.toggle("show");
  });