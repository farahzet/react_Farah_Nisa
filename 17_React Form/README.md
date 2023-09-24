React Form
=> Salah satu hal yang krusial dalam pengembangan web. Form dapa digunakan untuk mengandle inputan dari user.

Macam2 Form :
a. Elemen <input> => Digunakan untuk inputan yang tidak panjang
b. Elemen <textarea> => Digunkan untuk elemen yang cukup panjang. ex: deskripsi
c. elemen <select> => Digunakan untuk inputan yang pilihannya sudah ditentukan.
d. RadioButton => Digunakan untuk memilih salah  satu inputan.
e. Checkbox => Digunakan untuk memilih lebih dari satu inputan.
f. color, password, dll

Controlled Component : Sebuah elemen masukkan form yang nilainya di kontrol oleh React. Sebuah controlled input menerima nilai saat ini sebagai prop, serta callback untuk mengubah nilai tersebut. Kita bisa mengatakan ini adalah cara yang lebih "React way" untuk pendekatan ini (yang tidak berarti harus selalu menggunakannya). 
a. Tag Select
b. Tag Textarea

- Flow Controlled Component : Setiap kali kita mengetik karakter baru, handleNameChange dipanggil. Dibutuhkan nilai baru dari input dan mengaturnya di state.

Cara mengandle banyak input dengan menggunakan atribut name pada setiap elemen.

Kenapa Perlu Validasi :
a. Mencari input data yang benar dan sesuai format
b. Melindungi akun pengguna
c. Melindungi Sistem/aplikasi

Uncontrolled Component : alternatif lain dari controlled component. Diaman data form akan ditangani oleh DOMnya. Cara paling serhana untuk mengimplementasikan input formulir.

Tipe Validasi Data Formulir :
a. Client-side Validation = Validasi yang dilakukan pada sisi klien (browser). Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke server.
- Terbagi atas 2 bagian : Built-in form validation dan Menggunakan javascript.

b. Server-side Validation = Validasi yang dilakukan pada sisi server. Sisi server bertugas untuk memvalidasi data kembali, sebelum disimpan di database. Jika ditemukan kesalahan, maka response akan dikirim kembali ke client berupa koreksi atas kesalahan yang dibuat oleh pengguna.



