const slider = document.getElementById("slider");
const image = document.getElementById("image");
const viewInputs = document.querySelectorAll('input[name="view"]');

const suffixesMosslorn = [
  "065",
  "075",
  "085",
  "095",
  "105",
  "115",
  "125",
  "135",
  "145",
  "155",
  "165",
  "175",
  "185",
  "200",
  "230",
  "260",
  "290",
  "320",
];

const webpMaps = [
  "map-zone/MOSSLORN_1.png",
  "map-zone/MOSSLORN_2.png",
  "map-zone/MOSSLORN_3.png",
];

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
