// File preview logic
const profilePictureInput = document.getElementById("profilePicture");
const filePreview = document.getElementById("filePreview");
const previewImage = document.getElementById("previewImage");

profilePictureInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.src = e.target.result;
      filePreview.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    filePreview.style.display = "none";
  }
});

// Form submission logic
document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
  // Add form handling logic (e.g., send data to server)
});
