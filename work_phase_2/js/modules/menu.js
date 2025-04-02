function setupMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".list_container");

    if (!menuToggle || !menu) return;

    // Ensure event listeners are only added once
    if (menuToggle.dataset.listenerAttached) return;
    menuToggle.dataset.listenerAttached = true;

    menuToggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("show");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener("pointerdown", (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("show");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}

export { setupMenu };