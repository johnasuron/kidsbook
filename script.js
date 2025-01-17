let currentSpread = 0; // Start with the cover page
const totalSpreads = 5;

function showSpread(spreadNumber) {
    const spreads = document.querySelectorAll('.spread');
    spreads.forEach((spread, index) => {
        if (index === spreadNumber) {
            spread.style.transform = 'translateX(0)';
        } else if (index < spreadNumber) {
            spread.style.transform = 'translateX(-100%)';
        } else {
            spread.style.transform = 'translateX(100%)';
        }
    });
}

function nextSpread() {
    if (currentSpread < totalSpreads) {
        currentSpread++;
        showSpread(currentSpread);
    }
}

function prevSpread() {
    if (currentSpread > 0) {
        currentSpread--;
        showSpread(currentSpread);
    }
}

// Initialize the first spread (cover page)
showSpread(currentSpread);