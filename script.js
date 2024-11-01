
document.addEventListener('DOMContentLoaded', () => {
    const adventures = [
        "Take a 10-minute walk and photograph 3 interesting things.",
        "Write a poem about your favorite food.",
        "Try a new recipe and cook it today.",
        "Spend 15 minutes learning a new skill online.",
        "Call or video chat with a friend you haven't spoken to in a while.",
        "Draw or paint something using only three colors.",
        "Spend 20 minutes meditating or doing yoga.",
        "Organize a small area of your home."
    ];

    const spinBtn = document.getElementById('spinBtn');
    const wheel = document.getElementById('wheel');
    const resultBox = document.getElementById('resultBox');
    let currentDegree = 0; // Keep track of the current degree

    spinBtn.addEventListener('click', () => {
        const spins = 4; // Number of complete spins
        const degreesPerSegment = 360 / adventures.length; // Calculate degrees per segment
        const randomIndex = Math.floor(Math.random() * adventures.length);
        const randomDegree = spins * 360 + randomIndex * degreesPerSegment; // Calculate the final degree
        
        currentDegree += randomDegree; // Update the current degree
        
        // Set the spin animation
        wheel.style.transition = 'transform 5s cubic-bezier(0.33, 1, 0.68, 1)'; // Ensure the same easing
        wheel.style.transform = `rotate(${currentDegree}deg)`;

        setTimeout(() => {
            resultBox.textContent = 'Your Adventure: ' + adventures[randomIndex];
            resultBox.style.display = 'block';
        }, 5000); // Show result after spin duration
    });

    // Reset the wheel position after the spin animation ends (optional)
    wheel.addEventListener('transitionend', () => {
        wheel.style.transition = ''; // Reset transition
        wheel.style.transform = `rotate(${currentDegree % 360}deg)`; // Keep the wheel at the final position
        currentDegree %= 360; // Normalize the currentDegree
    });
});




