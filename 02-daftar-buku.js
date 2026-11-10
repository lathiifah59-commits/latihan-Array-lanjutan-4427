const daftarBuku = [
"HTML Dasar",
"CSS Dasar",
"JavaScript Dasar",
"PHP Dasar"
];

console.log("Daftar buku awal:", daftarBuku);
const indeksCSS = daftarBuku.indexOf("CSS Dasar");

if (indeksCSS !== -1) {
daftarBuku.splice(indeksCSS, 1, "CSS Modern");
}

const indeksJS = daftarBuku.indexOf("JavaScript Dasar");
if (indeksJS !== -1) {
daftarBuku.splice(indeksJS + 1, 0, "Git Dasar");
}

const indeksPHP = daftarBuku.indexOf("PHP Dasar");
if (indeksPHP !== -1) {
daftarBuku.splice(indeksPHP, 1);
}

console.log("Daftar buku setelah perubahan:", daftarBuku);
console.log("Jumlah buku yang tersisa:", daftarBuku.length);