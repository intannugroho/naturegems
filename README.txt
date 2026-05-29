NATURE GEMS FINAL - AUTH + PROFILE FEATURE + REALPICT

FITUR YANG SUDAH DITAMBAHKAN:
1. Tahap awal aplikasi sekarang ada Login dan Registrasi.
2. Data registrasi tersimpan di localStorage browser.
3. Nama, email, initial avatar, dan domisili/provinsi tampil otomatis di Profile.
4. Login memakai data akun yang sudah didaftarkan.
5. Profile sudah lengkap:
   - Pengaturan: mode terang, kartu compact, bahasa.
   - Notifikasi: rekomendasi destinasi, pengingat perjalanan, update tempat baru.
   - Privasi dan Keamanan: izin lokasi, ganti password, hapus data lokal.
   - Riwayat Lokasi: daftar lokasi terakhir dari GPS.
   - Keluar: logout dan kembali ke login.
6. Foto realpict untuk semua destinasi memakai URL online berdasarkan keyword destinasi.
7. Tetap responsive untuk desktop dan mobile.
8. Tetap ada 38 provinsi dan 190 destinasi.
9. Tombol Navigasi membuka Google Maps.
10. Tombol Gunakan GPS mendeteksi lokasi otomatis.

CARA MENJALANKAN:
1. Extract ZIP.
2. Buka folder ini di VS Code.
3. Jalankan dengan Live Server.
4. Klik Mulai.
5. Daftar akun dulu, lalu data akan masuk ke Profile.

CATATAN FOTO:
- Foto realpict memakai link online dari Unsplash Source berdasarkan keyword nama destinasi.
- Karena fotonya online, laptop/HP harus tersambung internet saat aplikasi dibuka.
- Jika gambar gagal tampil, aplikasi otomatis memakai fallback picsum photos.

CATATAN GPS:
- GPS sebaiknya dibuka memakai Live Server/localhost.
- Browser akan meminta izin lokasi. Klik Allow/Izinkan.


UPDATE FITUR TAMBAHAN:
1. Mode Offline: aktif/nonaktif, unduh paket offline, simpan destinasi dan kontak darurat ke localStorage.
2. Kontak Darurat: Polsek Bandung, Puskesmas Bandung, Basarnas Bandung, Damkar Bandung. Nomor bisa diklik dari HP memakai link tel:.
3. Laporkan Kondisi Jalan: tombol di detail destinasi dengan pilihan Aman, Rusak, Ditutup. Laporan tersimpan di localStorage browser.


UPDATE KONTAK DARURAT SESUAI DESTINASI:
- Kontak darurat sekarang mengikuti destinasi tujuan yang dipilih.
- Saat membuka Detail destinasi atau klik Navigasi, destinasi tersebut otomatis menjadi tujuan darurat.
- Di halaman Mode Offline ada dropdown Destinasi Tujuan.
- Kontak menyesuaikan nama destinasi dan provinsi tujuan:
  1. Polisi terdekat
  2. Fasilitas kesehatan / ambulans
  3. SAR / Basarnas wilayah
  4. Damkar wilayah
- Nomor kontak memakai nomor darurat nasional sebagai template demo: 110, 119, 115, 113.
