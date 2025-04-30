document.addEventListener("DOMContentLoaded", () => {
    const fullimgbox = document.getElementById("fullimgbox");
    const fullimg = document.getElementById("fullimg");
    const closebtn = document.getElementById("closebtn");
    const thumbnails = document.querySelectorAll(".img-gallery img");

    thumbnails.forEach(img => {
        img.addEventListener("click", () => {
            fullimg.src = img.src;
            fullimgbox.style.display = "flex";
        });
    });

    closebtn.addEventListener("click", () => {
        fullimgbox.style.display = "none";
    });

    fullimgbox.addEventListener("click", (e) => {
        if (e.target === fullimgbox) {
            fullimgbox.style.display = "none";
        }
    });
});