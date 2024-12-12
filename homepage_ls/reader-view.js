document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const increaseFont = document.getElementById("increase-font");
    const decreaseFont = document.getElementById("decrease-font");
    const toggleTheme = document.getElementById("toggle-theme");
    const readerContent = document.querySelector(".reader-content");

    // Font size adjustment
    let currentFontSize = 16;
    increaseFont.addEventListener("click", () => {
        currentFontSize += 2;
        readerContent.style.fontSize = `${currentFontSize}px`;
    });

    decreaseFont.addEventListener("click", () => {
        if (currentFontSize > 12) {
            currentFontSize -= 2;
            readerContent.style.fontSize = `${currentFontSize}px`;
        }
    });

    // Theme toggle
    toggleTheme.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });
});
