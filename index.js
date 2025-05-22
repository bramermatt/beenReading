// Example values; you can update these dynamically as needed
const currentPage = 100;
const totalPages = 1249;
const percentage = ((currentPage / totalPages) * 100).toFixed(1) + '%';

// Set the values in the DOM
document.getElementById('currentPage').textContent = currentPage;
document.getElementById('totalPages').textContent = totalPages;
document.getElementById('percentage').textContent = percentage;