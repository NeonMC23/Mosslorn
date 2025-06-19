const slider = document.getElementById("slider");
const image = document.getElementById("image");
const viewInputs = document.querySelectorAll('input[name="view"]');

// Suffixes pour MOSSLORN
const suffixesMosslorn = [
  "065",
  "075",
  "085",
  "095",
  "105",
  "120",
  "135",
  "150",
  "170",
  "200",
  "230",
  "260",
  "290",
  "320",
];

// Fichiers .webp pour MAPS_WEBP
const webpMaps = ["map1.webp", "map2.webp", "map3.webp"];

let currentView = "MOSSLORN";
let currentIndex = 0;

function updateImage() {
  if (currentView === "MOSSLORN") {
    const filename = `MOSSLORN_${suffixesMosslorn[currentIndex]}.png`;
    image.src = `src/map-level/${filename}`;
  } else if (currentView === "MAPS_WEBP") {
    image.src = `src/${webpMaps[currentIndex]}`;
  }
}

// Slider input
slider.addEventListener("input", () => {
  currentIndex = parseInt(slider.value, 10);
  updateImage();
});

// Toggle change
viewInputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) {
      currentView = input.value;

      // Adapter le slider
      if (currentView === "MOSSLORN") {
        slider.max = suffixesMosslorn.length - 1;
        slider.value = 0;
        slider.style.display = "block";
      } else if (currentView === "MAPS_WEBP") {
        slider.max = webpMaps.length - 1;
        slider.value = 0;
        slider.style.display = "block";
      }

      currentIndex = 0;
      updateImage();
    }
  });
});
