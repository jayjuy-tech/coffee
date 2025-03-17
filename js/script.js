// Toggle class active
// Toggle ialah untuk yang ga ada jadi ada dan yang ada jadi ga ada

// ambil dulu elemen navbar-nav karena elemen tersebut yang akan diberikan class active (dibawah ini mengambil .navbar-nav)
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger-menu di klik
// ambil dulu elemen menunya (dibawah ini ini id menunya ialah menu)

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');

    // Ketika diklik class active nya akan ada (menambah class nya .navbar-nav) dan ketika diklik kembali maka class active nya akan menghilang
};

// Klik diluar sidebar untuk menghilangkan navbar yang disamping (sidebar)
const hamburger = document.querySelector('#hamburger-menu');
// const hamburger = document.querySelector('#hamburger-menu')  ialah untuk mencari elemen #hamburger-menu. Atau dengan kata lain "tolong carikan saya elemen dengan nama #hamburger-menu"
document.addEventListener('click', function(e) {
// document.addEventListener('click', function(e) {  ketika di klik akan menjalankan fungsi dibawah ini
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    // Jika bukan hamburger-menu yang diklik dan bukan navbar-nav (sidebar) yang diklik, maka...
        navbarNav.classList.remove('active');
        // ...maka akan menghapus class active yang ada pada kode sebelumnya (sehingga sidebar dapat tertutup dengan mengklik dimanapun selama diluar navbar (sidebar) nya
    }
});