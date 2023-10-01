=== React Testing ===

1. Basic Testing
Testing => proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nillai true kecuali ada bug di kode kita.

Manfaat => Menguragi bug pada aplikasi

= Kategori testing =
a. Rendering component trees
b. Menjalankan aplikasi lengkap

= Pertimbangan pemilihan perkakas =
a. Kec iterasi vs environment yang realistis
b. Seberapa banyak MOck

Rekomendasi Tools => Jest, React Testing Library, Install

2. Create Basic Testing RTL
a. Komponen Rendering => Render dan Debug
b. Memilih Elemen
c. Handle Event 
d. Handle Asynchronous =>  digunakan ketika hendak mengetes fetch sebuah API. Pada kasus ini kita perlu membuat mock untuk axios (atau yang lain). Selanjutnya kita perlu membuat mock promise hasilnya ketika resolve atau reject. Ini dikembalikan lagi kepada skenario kita.


3. Testing Custom Hook
Library yang digunakan => React Hooks Testing Library