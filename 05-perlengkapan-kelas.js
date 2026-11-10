const daftarBarang = [
"Buku Tulis",
"Pensil",
"Penghapus",
"Spidol"
];

const barangBaru = "Pulpen";
const barangDicari = "Penghapus";
const barangDihapus = "Spidol";

console.log("=== PENGELOLAAN PERLENGKAPAN KELAS ===");

if (daftarBarang.length === 0) {
console.log("Daftar barang kosong.");
} else {
console.log("Jumlah barang awal:", daftarBarang.length);

console.log("\n[Tambah Barang]");
if (barangBaru && barangBaru.trim() !== "") {
    daftarBarang.push(barangBaru);
    console.log(`${barangBaru} berhasil ditambahkan.`);
} else {
    console.log("Penambahan ditolak: nama barang tidak boleh kosong.");
}


console.log("\n[Pencarian Barang]");
if (daftarBarang.includes(barangDicari)) {
    const indeksCari = daftarBarang.indexOf(barangDicari);
    console.log(`${barangDicari} ditemukan pada indeks ${indeksCari}.`);
} else {
    console.log(`${barangDicari} tidak ditemukan / tidak tersedia.`);
}

console.log("\n[Hapus Barang]");
const indeksHapus = daftarBarang.indexOf(barangDihapus);
if (indeksHapus !== -1) {
    daftarBarang.splice(indeksHapus, 1);
    console.log(`${barangDihapus} berhasil dihapus.`);
} else {
    console.log(`Penghapusan ditolak: ${barangDihapus} tidak ditemukan.`);
}

console.log("\n=== DAFTAR BARANG TERBARU ===");
for (let i = 0; i < daftarBarang.length; i++) {
    console.log(`${i + 1}. ${daftarBarang[i]}`);
}
console.log("Total barang:", daftarBarang.length);
}