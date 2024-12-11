# Change Log

## [v1.3.1.1] - 2024-12-11

### Added:

  - Validasi data pengguna setelah registrasi untuk memastikan data yang disimpan di Firestore lengkap sebelum melanjutkan.
  - Penghapusan akun otomatis jika data yang disimpan di Firestore tidak lengkap atau tidak valid (misalnya, email, username, role, telegram, atau nomor telepon kosong).
  - Pesan notifikasi yang lebih terperinci untuk setiap langkah registrasi, dengan pesan default jika konfigurasi khusus tidak ditemukan.


### Fixed:

  - Mencegah permintaan registrasi ganda dengan penambahan flag isRegistering.
 
  - Memastikan data tidak terkirim dalam keadaan kosong, serta memberikan notifikasi jika data tidak lengkap.

  - Menghapus akun pengguna yang baru dibuat secara otomatis jika terjadi kesalahan data setelah proses registrasi.


### Improved:

  - Penggunaan async/await pada proses registrasi untuk meningkatkan keterbacaan dan pengelolaan alur asinkron.

  - Menambahkan pengecekan data yang lebih aman di Firestore untuk validasi sebelum melanjutkan ke proses verifikasi email.



---

Perubahan ini memastikan proses registrasi lebih aman dengan pengecekan data yang lebih cermat dan menghindari terjadinya data yang tidak valid atau duplikat pada pengguna.

