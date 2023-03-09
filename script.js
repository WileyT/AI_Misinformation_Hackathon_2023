const uploadSection = document.getElementById("upload-section");
const urlSection = document.getElementById("url-section");

document.getElementById("upload").addEventListener("click", () => {
  uploadSection.style.display = "block";
  urlSection.style.display = "none";
});

document.getElementById("url").addEventListener("click", () => {
  urlSection.style.display = "block";
  uploadSection.style.display = "none";
});