Clean Code 

- Istilah untuk code yang mudah dipahami, dibaca dan diubah oleh programmer.

Kenapa?
- Semua orang harus bisa membaca code saat melakukan kerjasama
- Code yang rapih juga dapat membantu developer dalam melakukan debugging


Karakterisktik :
a. Penamaan mudah dipahami
b. Mudah dieja atau dicari
c. Singkat namun mendeskripsikan konteks
d. Konsisten
e. Hindari penambahan konteks yang tidak perlu
f. Komentar
g. Good Function
h. Gunakan konveksi
i. Sesuai Format : lebar baris code 80 - 120 karakter, satu class 300 -500 baris, dekatkat fungsi dan pemanggilannya dll.

Prinsip Clean Code :
a. Kiss = Keep it so simple
    - Fungsi class harus kecil
    - Fungsi dibuat hanya untuk satu tugas saja
    - Jangan gunakan terlalu banyak argumen dll

b. DRY = Dont Repeat Yourself
=> Duplikasi code terjasi karena terlalu sering copy paste. Sebaiknya gunakan fungsi yang dapat digunakan secara berulang ulang.

Refactoring => proses restrukturisasi kode yang dibuat dengan cara mengubah perilaku eksternal.
Teknik :
a. Membuat sebuah abstraksi
b. Memecahkan kode dengan fungsi/class
c.Perbaiki penamaan dan lokasi code
d. Deteksi kode yang memiliki duplikasi