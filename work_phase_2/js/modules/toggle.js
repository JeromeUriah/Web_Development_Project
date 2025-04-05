function toggle() {
    var x = document.getElementById("menu");

    if (window.innerWidth >= 800) {
        x.style.display = "block"; 
    } else {
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
