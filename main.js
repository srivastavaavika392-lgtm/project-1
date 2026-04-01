document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainDashboard = document.getElementById('main-dashboard');

    // Simulate Biometric Scanning time (e.g., 3.5 seconds)
    setTimeout(() => {
        // Change text right before transition
        const scanText = document.querySelector('.scan-text');
        scanText.textContent = "Identity Verified";
        scanText.style.color = "var(--success)";
        scanText.style.textShadow = "0 0 10px var(--success)";
        
        const laser = document.querySelector('.scan-laser');
        laser.style.transition = "top 0.5s ease"; // ensure smooth last movement
        laser.style.backgroundColor = "var(--success)";
        laser.style.boxShadow = "0 0 20px var(--success), 0 0 40px var(--success)";
        laser.style.animation = "none"; // stop animation
        laser.style.opacity = "1";
        laser.style.top = "50%"; // lock laser in middle

        // Trigger transition 0.5s after "Verified"
        setTimeout(() => {
            splashScreen.classList.add('hidden');
            mainDashboard.classList.remove('hidden');
        }, 800);
        
    }, 3500);

    // Mock interactions for storage items
    const storageItems = document.querySelectorAll('.storage-item');
    storageItems.forEach(item => {
        item.addEventListener('click', () => {
            const itemName = item.querySelector('.item-name').textContent;
            console.log(`Decrypting ${itemName}...`);
            // Add a subtle flash effect to simulate click
            item.style.backgroundColor = "rgba(0, 255, 204, 0.1)";
            setTimeout(() => {
                item.style.backgroundColor = ""; // revert
            }, 300);
        });
    });
});
