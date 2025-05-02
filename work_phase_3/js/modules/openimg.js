export function setupImageModalViewer({
    gallerySelector = ".img-gallery img",
    modalSelector = "#fullimgbox",
    imageSelector = "#fullimg",
    captionSelector = "#caption",
    closeBtnSelector = "#closebtn"
} = {}) {
    console.log("setupImageModalViewer called");

    const init = () => {
        const fullimgbox = document.querySelector(modalSelector);
        const fullimg = document.querySelector(imageSelector);
        const caption = document.querySelector(captionSelector);
        const closebtn = document.querySelector(closeBtnSelector);
        const thumbnails = document.querySelectorAll(gallerySelector);

        if (!fullimgbox || !fullimg || !caption || !closebtn) {
            console.warn("Modal viewer elements not found in DOM.");
            return;
        }

        thumbnails.forEach(img => {
            img.addEventListener("click", () => {
                fullimg.src = img.src;
                fullimg.alt = img.alt;
                caption.textContent = img.alt || "";
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

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                fullimgbox.style.display = "none";
            }
        });
    };

    // Safe DOM load
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
}
