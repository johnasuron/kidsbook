let currentPage = 0;
const totalPages = 10;

function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
        if (index === pageNumber) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function goToCover() {
    currentPage = 0; // Reset to the cover page
    showPage(currentPage);
}

// Initialize the first page (cover page)
showPage(currentPage);