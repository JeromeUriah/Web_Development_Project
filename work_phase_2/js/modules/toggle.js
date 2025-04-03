function toggle() {
    var x = document.getElementById("menu");

    // Check if the screen width is large enough (desktop size, e.g., 1024px and above)
    if (window.innerWidth >= 800) {
        x.style.display = "block"; // Always show menu on desktop
    } else {
        // Toggle based on current display state for smaller screens
        if (x.style.display === "" || x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
}

window.addEventListener("resize", function() {
    var x = document.getElementById("menu");
    if (window.innerWidth >= 800) {
        x.style.display = "block"; 
    } else if (x.style.display !== "none") {
        x.style.display = "none";
    }  
});
