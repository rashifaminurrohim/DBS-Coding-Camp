const icons = document.getElementsByClassName('favorite-icon');
for(let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", () => {
    if (icons[i].classList.contains('filled')) {
      icons[i].classList.toggle('filled');
      icons[i].innerHTML = "&#9825;";
    } else {
      icons[i].classList.toggle('filled');
      icons[i].innerHTML = "&#10084;";
    }
  });
}

