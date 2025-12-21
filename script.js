function startEventSlider(className) {
    let currentIndex = 0;
    const items = document.querySelectorAll(className);

    // Ensure we have items before starting the timer
    if (items.length === 0) return;

    setInterval(() => {
        // Remove active class from current item
        items[currentIndex].classList.remove('active');

        // Move to next index
        currentIndex = (currentIndex + 1) % items.length;

        // Add active class to new item
        items[currentIndex].classList.add('active');
    }, 4000); // 4 seconds for readability
}

// Start only the event slider when the page loads
document.addEventListener('DOMContentLoaded', () => {
    startEventSlider('.event-item');
});