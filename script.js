document.addEventListener("DOMContentLoaded", function () {
    const text = document.getElementById("blinkingText");
    const readButton = document.getElementById('readButton');

    // Function to change text color randomly
    function changeTextColor() {
        const colors = ["red", "green", "blue", "purple", "#954535","#bf5700","#644536","#008080"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        text.style.color = randomColor;
    }

    // Automatically change text color every 2 seconds
    setInterval(changeTextColor, 2000);

    // Add a click event listener to the button
    readButton.addEventListener('click', () => {
        // Change the window location to the desired HTML file (e.g., index.html)
        window.location.href = 'home.html';
    });
});
