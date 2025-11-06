 // Initialize the toast
    const toastEl = document.getElementById('workToast');
    const workToast = new bootstrap.Toast(toastEl);

    // Add event listeners to all toast-triggering nav links
    document.querySelectorAll('.toast-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();  // prevent scroll jump
        workToast.show();
    });
});

