import normalize from "normalize.css";
import style from "./_scss/main.scss";


const dropdownCity = document.getElementById('dropdown-city');
const btnCity = document.getElementById('btn-city');
const cities = document.querySelectorAll('#dropdown-city li');
let cityLabel = document.querySelector('#btn-city .label');
for (let i = 0; i < cities.length; i++) {
  cities[i].addEventListener('click', function(){
    cityLabel.innerText = cities[i].innerText;
  });
};

// gallery event listeners to show lightbox or something
const galleryItems = document.querySelectorAll('.gallery .thumb');
for (let i = 0; i < galleryItems.length; i++) {
  galleryItems[i].addEventListener('click', function(){
    alert(`show lightbox or something for image #${i}`);
  });
};

// styled dropdown
function dropdownContent() {
  dropdownCity.classList.toggle('show');
}

if (btnCity) {
  btnCity.addEventListener('click', dropdownContent);
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#btn-city')) {
    if (dropdownCity.classList.contains('show')) {
      dropdownCity.classList.remove('show');
    }
  }
}
