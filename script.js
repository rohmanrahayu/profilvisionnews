 // Fungsi untuk smooth scrolling
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validasi formulir kontak sederhana
document.getElementById('kontakForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim.');
    this.reset();
});

// Fungsi Animasi Scroll
function handleScrollAnimations() {
    const sections = document.querySelectorAll('.section-animate');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('is-visible');
        } else {
            section.classList.remove('is-visible');
        }
    });
}

// Fungsi Back to Top
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll ke atas saat tombol di klik
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Tambahkan event listener untuk scroll
window.addEventListener('scroll', handleScrollAnimations);
// Jalankan saat halaman dimuat
handleScrollAnimations();