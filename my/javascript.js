// Tab switching logic
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

function showTab(tabId) {
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
}

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        showTab(btn.getAttribute('data-tab'));
    });
});

// Set default active tab
showTab('about');