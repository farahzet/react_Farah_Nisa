Data Structure

Data => cakupan luas yang merujuk semua tipe informasi yang tersimpan dalam memori komputer seperti number,string,boolean dll.

Data structure => Bagaimana meyimpan dan mengorganisir value/elemen dan data di dalam memori karakter


Basic data :
a. array => memiliki index yang mengidentifikasi dimana posisi elemen bersada

operasi :
- reading => Melihat nilai yang terkandung pada indeks tertentu di dalam array, operasi yang efesien, setiap cell pada memori memiliki alamat spesifik
- searching => Mencari apakah ada nilai tertentu, kebalikkan dari reading, ketika melakukan operasi searching pada array komputer tidak memiliki cara untuk melompat langsung ke nilai tertentu, komputer tidak bisa tau nilai apa saja yang terkandung pada setiap memori, mememriksa satu persaty cell
- Insert =>  Efesien tergantung dimana kita memasukkan nilainya, memasukkan value baru dia wal atau tengah harus menggeser data yang sudah ada
- Deletion => operasi menghilangkan value pada index tertentu


b. Set => Data structurenya sama sseperti aary tapi bedanya hanya pada set yang tidak mengizinkan duplikat value dimasukkan kedalamnya.
Operasi :
- reading => dapat menggunakan forEach
- Searching => menggunakan has method
- insert => perlu step tambahan untuk memastikan bahwa value yang dimasukkan tidak ada di dalam set dan operasi searching harus dijalankan terlebih dahuhu untuk mengecek valuenya.
- Delete

Set penting jika kita menginginkan data structure yang terbebas dari duplikasi namun lebih lambat dari array pada proses insert valuenya.