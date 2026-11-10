const antreanSiswa = ["Andi", "Budi", "Citra"];

console.log("Antrean awal:", antreanSiswa);
console.log("Jumlah siswa awal:", antreanSiswa.length);

antreanSiswa.push("Deni");
console.log("Setelah 'Deni' masuk (push):", antreanSiswa);

antreanSiswa.unshift("Eka");
console.log("Setelah 'Eka' masuk (unshift):", antreanSiswa);

const siswaPertamaDihapus = antreanSiswa.shift();
console.log("Siswa pertama dihapus (shift):", siswaPertamaDihapus);

const siswaTerakhirDihapus = antreanSiswa.pop();
console.log("Siswa terakhir dihapus (pop):", siswaTerakhirDihapus);

console.log("Antrean akhir:", antreanSiswa);
console.log("Jumlah siswa tersisa:", antreanSiswa.length);