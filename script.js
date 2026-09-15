function buatIDCard() {
  // Ambil nilai dari input
  const nama = document.getElementById('nama').value;
  const kelas = document.getElementById('kelas').value;
  const favorit = document.getElementById('favorit').value;
  const motto = document.getElementById('motto').value;

  // Validasi input
  if (nama === '' || kelas === '' || favorit === '' || motto === '') {
    alert('Semua field harus diisi!');
    return;
  }

  // Masukkan nilai ke span di ID Card
  document.getElementById('hasilNama').textContent = nama;
  document.getElementById('hasilKelas').textContent = kelas;
  document.getElementById('hasilFavorit').textContent = favorit;
  document.getElementById('hasilMotto').textContent = motto;

  // Tampilkan ID Card
  document.querySelector('.id-card').classList.add('show');
}