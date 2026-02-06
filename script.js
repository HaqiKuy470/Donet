document.addEventListener('DOMContentLoaded', function() {
    
    // Logic untuk Accordion FAQ
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            // Toggle active class
            this.classList.toggle('active');
            
            // Toggle max-height untuk animasi
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

});

// Logic Tombol Buka Gambar
function openImage() {
    // Ganti URL ini dengan URL gambar atau link donasi asli
    const url = "img/qr-full.jpeg";
    window.open(url, '_blank');
}