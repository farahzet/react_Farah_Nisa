Router
=> Merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA ( Single Page Aplication)

a.	Multi Page Application ( MPA) => disebut juga dengan tradisional web app adalah jenis aplikasi website dimana perlu memuat seluruh halaman web setiap kali membuat permintaan baru.
-	Keunggulan 
•	SEO website akan lebih mudah dioptimasi
•	Memudahkanmu untuk mengubah hal tertentu untuk setiap kebutuhan berbeda
•	Menggunkan tools analisis sperti google analytics yang dapat terintegrasi langsung dengan website
-	Kekurangan 
•	Kecepatan download website jauh lebih lama jika dibandingkan dengan SPA 
•	Perlu mengintergrasi antara FE dan BE
•	Lebih sering membutuhkan maintenance dan update

b.	Single Page Application (SPA) => salah satu aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut.
-	Keunggulan
•	Waktu loading jauh lebih cepat
•	Tidak ada query tambahan ke server
•	FE yang cepat dan responsive
•	Menigkatkan pengalaman pengguna

-	Kekurangan 
•	Tidak bagus dala hal SEO 
•	Berat saat di load pertama kali
•	Kurang aman disbanding dengan website biasa
•	Masalah kompatibilitas browser
Macam2 React Router
a.	Browser router
b.	Switch
c.	Route
d.	Link
Parameter URL => suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman.
Contoh : path=”/movie/:id”
Perbedaan :
a.	Link
-	Dapat digunakan pada kondisi apapun
-	Memberikan history baru pada browser
-	Bereaksi dengan clik seperti a href
b.	Redirect
-	Lebih sering digunakan pada halaman 404
-	Menimpa history pada browser
-	Bereaksi dengan suatu kondisi

Hook routing react
a.	useHistory => memberi kita akses ke instance Riwayat yang dapat digunakan untuk bernavigasi
contoh : length, go, goback, push, goForward

b.	useParams => mengembalikan objek pasangan kunci/ nilai parameter URL. Gunakan saat mengakses match.params dari <route> saat ini.

c.	useRouteMatch => mencoba mencocokkan URL saat ini dengan cara yang sama segerti <Route>. Ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tapa benar-benar merender <Routes.

