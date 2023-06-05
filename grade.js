const mtk = 74;
const bahasaIndonesia = 80;
const bahasaInggris = 85;
const ipa = 79;

// Hitung rata-rata nilai
const rataNilai = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

cekData = typeof mtk === 'number' && typeof bahasaIndonesia === 'number' && typeof bahasaInggris === 'number' && typeof ipa === 'number' ? console.log(`Rata-rata = ${rataNilai}`) : 'data bukan number';

// Pemeringkatan nilai
const gradeNilai = (Nilai) => {
  Nilai >= 90 && Nilai <= 100
    ? console.log('Grade = A')
    : Nilai >= 80 && Nilai <= 90
    ? console.log('Grade = B')
    : Nilai >= 70 && Nilai <= 80
    ? console.log('Grade = C')
    : Nilai >= 60 && Nilai <= 70
    ? console.log('Grade = D')
    : Nilai < 60
    ? console.log('Grade = E')
    : 'Nilai tidak teridentifikasi';
};

gradeNilai(rataNilai);
