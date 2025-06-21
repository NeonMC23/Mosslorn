const map = document.getElementById("map");
const viewer = document.getElementById("viewer");

let isDragging = false;
let startX, startY;
let offsetX = 0,
  offsetY = 0;
let scale = 1;

viewer.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX - offsetX;
  startY = e.clientY - offsetY;
  viewer.style.cursor = "grabbing";
});

viewer.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  offsetX = e.clientX - startX;
  offsetY = e.clientY - startY;
  updateTransform();
});

viewer.addEventListener("mouseup", () => {
  isDragging = false;
  viewer.style.cursor = "grab";
});

viewer.addEventListener("mouseleave", () => {
  isDragging = false;
  viewer.style.cursor = "grab";
});

viewer.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();

    const zoomFactor = 0.1;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const prevScale = scale;
    if (e.deltaY < 0) {
      scale *= 1 + zoomFactor;
    } else {
      scale *= 1 - zoomFactor;
    }

    scale = Math.max(0.2, Math.min(60, scale));

    const dx = mouseX - offsetX;
    const dy = mouseY - offsetY;
    offsetX -= dx * (scale / prevScale - 1);
    offsetY -= dy * (scale / prevScale - 1);

    updateTransform();
  },
  { passive: false }
);

function updateTransform() {
  map.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
}
