•	Apa itu CSS?
CSS adalah singkatan dari Cascanding style sheets yang dapat menghias halaman web seperti color, size, font, background, width, height, dll. Dan dapat juga mengatur posisi pada halaman web seperti float, align, display, position, dll. 
Sebuah website tanpa css  tampilan terlihat tidak menarik dan akan membosankan, maka dari itu agar sebuah website terlihat menarik dan tidak membosankan maka digunakan CSS.

•	3 cara menambahkan file CSS ke dalam HTML
-	External CSS
<link rel=”stylesheet” href=”main.css”>
Syntax ini disispkan ke dalam tag <head> pada HTML. Dengan ekstensi file CSS yaitu .css

-	Internal CSS
<style.
	body {
		background-color: #19355f;
	}
</style>
Styntax ini dapat digunakan di dalam sat file HTMl. Didefisinikan didalam elemen <style>, didalam bagian <head> atau didalam bagian <body>.

-	Inline CSS
<h1 style=”color: #19355f;”>Hello World</h1>
Syntax ini dapat digunakan untuk elemen Tunggal pada HTML. Diprioritaskan untuk menerapkan style yang unik.

•	Syntax CSS

 
•	CSS selector 
Sebuah pola yang digunakan untuk memilih element, yang ingin di styling.
-	Penanda HTML ke dalam CSS Menggunakan selector ID dan Class
o	ID (#)
	Setia
	P elemen hanya dapat memiliki satu tag id
	Dalam satu halaman tidak boleh dua penamaan id yang berbeda
CSS Selector 
ID = (#)
HTML                                                                                         
<html>
	<body>
	          <div id=’content”>
		Alterra Academy
	          </div>
	</body>
</html>

#content {
     Padding : 20px;
     Font-size ; 20px;
     Font-family : `Muli’ ,
     Sans-serif ;
     Font-weight : 700 ;
}


o	Class (.)
	Tag class dengam nama yang sama dapat dipakai berulang-ulang pada suatau halaman
	Satu elemen boleh memiliki lebih dari satu class yang berbeda-beda
CSS Selector
Class (.)
<html>
	<body>
	          <div class=’content”>
		Alterra Academy
	          </div>
	</body>
</html>

#content {
     Padding : 20px;
     Font-size ; 20px;
     Font-family : `Muli’ ,
     Sans-serif ;
     Font-weight : 800 ;
}
•	CSS Grouping
Beberapa selector dapat dokelompokkan dalam satu deklarasi style.
<selector>,<selector>
-	HTML
<html>
	<body>
	          <h1> Hai !</h1>
	          <h2> Alpha Tech Academy </h2>
	</body>
</html>

-	CSS
h1,
h2 {
	font-family : `Muli’ ,
sans-serif;
	color : #f47523;
}

•	CSS font
Beberapa style di CSS
-	CSS font Properties
Font  untuk menetapkan semua property font dalam satu deklarasi
Font-family untuk menentukan kelompok font teks
Font-size untuk menentukan ukuran font teks
Font-weight untuk menentukan ktebalan untuk font teks
Font-style untuk menentukan font teks menjadi miring
-	CSS font
Font online: https://fonts.google.com/
Import font:
@font-face {
font-family: 'SFCompactDisplay-Bold',
sans-serif;
font-weight: 700;
src: url("../fonts/SFCompactDisplay-Bold.ttf")
format ("truetype");
} 

•	CSS Margin & Padding
Membuat ruang disekitar element CSS

•	CSS Background
Beberapa style background di css
-	CSS Background Properties
Background-color untuk menetapkan warna background pada suatu elemen
Background-image untuk menentukan gambar background pada suatu elemen
Background-repeat untuk menentukan gambar background untuk di ulang
Background-size untuk menentukan ukuran gambar untuk background
Background-positionuntuk mengatur posisi awal gambar background

•	CSS Link Event
Beberapa link event pada css
:hover  = Kondisi style ketika mouse berada diatas elemen
:active = Style ketika link "a" ditekan.
:visited = Style dimana elemen link "a" telah di kunjungi / di klik.

-	CSS transisi
Transisi CSS dapat mengubah value property menjadi lebih halus dalam durasi yang ditentukan.
•	CSS Display
Menentukan tampilan pada elemen
o	Block adalah Elemen block selalu dimulai pada baris baru.(dimulai dari kiri ke kanan).
o	Inline-block adalah Elemen inline-block membutuhkan lebar sesuai yang diperlukan.
o	None yaitu Menyembunyikan elemen untuk tidak ditampilkan.
•	CSS Table
Membuat style pada elemen table HTML
-	Border untuk menambahkan border pada table, th dan td
-	Border-collapse untuk membuat border menjadi single border
-	: nth-child (even) untuk membuat background stripe
-	Style Clearfix
