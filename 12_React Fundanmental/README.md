Catatan materi React Fundamental
	JSX
•	Apa itu JSX
JSX adalah singkatan dari Javascript XML dan berekstensi pada javascript (JSX)
Const element = <h1>Hello, World!</h1>;

•	Kenapa menggunakan JSX
JSX digunakan karena dibuat berdasarkan fakta kalua logika rendering sangat terikat dengan logic UI, dan Separation of Technology -> separation of Concerns

•	JSX vs React. CreateElemnt
Menggunakan JSX memudahkan dalam menulis aplikasi React
<MyButton color=”blue” shadowSize={2}>
   Klik saya
</MyButton>
Syntatctic sugar dari fungsi React.createElement(componen, prop,…children)
React.createElement(
     MyButton,
{color: ‘blue’, shadowSize : 2},
)

•	Spesifikasi Jenis elemen React
-	 Kapitaslisasi untuk komponen React
-	Huruf kecil (lowercase) untuk komponen bawaan
.	<MyButton color=”blue” shadowSize={2}>
 Klik saya
</MyButton>

.	<h1>Halo, Dunia!</h1>
.	import React from 'react';
// Benar! Ini adalah sebuah komponen dan memang seharusnya dikapitalisasi:
function Hello(props) {
// Benar! Penggunaan <div> ini sesuai aturan karena div adalah sebuah penanda HTML yang valid:
return <div>Hello {props.towhat}</div>;
}
function HelloWorld() {
Benar! React tahu bahwa <Hello / adalah sebuah komponen karena dikapitalisasi.
return <Hello toWhat="World" />;
}
.	import React from 'react';
// Benar! Int adalah sebuah komponen dan memang seharusnya dikapitalisasi:
function Hello(props) {
// Benar! Penggunaan <div> int sesuat aturan karena div adalah sebuah penanda HTML yang valid:
return <div>Hello {props.toWhat}</div>;
}
function HelloWorld() {
// Benar! React tahu bahwa <Hello /> adalah sebuah komponen karena dikapitalisasi.
return <Hello toWhat="World" />;
}
•	Menaruh expression pada JSX
Ekspresi JS yang valid pada JSX dengan menggunakan kurung kurawal
•	JSX adalah Expression
Setelah dikompilasi, ekspresi JSX akan menjadi panggilan fungsi JavaScript biasa dan menajdi objek Javascript
•	Menentukan atribut dengan JSX
.	Tanda kutip untuk menentukan string literal
Const element = <div tabIndex=”0”></div>;
.	Kurung kurawal untuk menyematkan ekspresi Javascript
Const element = <img src={user.avatarUrl}></img>;
.	React DOM menggunakan camelCase sebagai konvensi penamaan
/ / Valid
<button onClick={handleClick} className="myButton">Click Me</button>
// Tidak Valid
<button onclick={handleClick} class="myButton">Click Me</button>
•	Menspesifikasikan elemen Anak dengan JSX
.	Jika tag bersifat kosong (tidak memiliki elemen anak), bisa saja menutupnya secara langsung dengan />
Const element = <img src={user.avatarUrl}/>;
.	Tag  JSX dimungkinkan untuk memeiliki elemen anak
Const element = (
    <div>
        <h1>Halo!</h1>
        <h2> Seneng melihatmu disini.</h2>
     </div>
);

	React Components
•	Apa itu component?
Komponen React adalah bagian kode yang dapat digunakan Kembali yang digunakan untuk menentukan tampilan, behavior, dan state Sebagian UI
 
•	Membagi UI menjadi beberapa komponen
.	[
[category: "Sporting Goods", price: "$49.99", stocked: true, name:
"Football"}[category: "Sporting Goods", price: "$9.99", stocked: true, name:
"Baseball"},
[category: "Sporting Goods", price: "$29.99", stocked: false,
name: "Basketball"},
[category: "Electronics", price: "$99.99", stocked: true, name:
*iPod Touch"},
name:
[category: "Electronics", price: "$399.99", stocked: false, name:
*{Phone 5"},
{category: "Electronics", price: "$199.99", stocked: true, name:
"Nexus 7"}
1
•	Function and class component
.	function Welcome() {
return <h1>Hello, Dunia!</h1>;
}
.	class Welcome extends React.Component {
     render() {
         return <h1>Hello, Dunia!</h1>;
    }
}
•	Membuat & merender component
.	function Welcome() {
    return <h1>Halo Teman2</h1>;
}
const element = <Welcome/>;
ReactDOM.render(
   element,
    document.getElementById( 'root')
);
	Component Composite
•	Apa itu props?
Props adalah singkatan dari properties, yang  digunakan untuk membuat dan dapat memberikan argument/data pada component, props juga membantu untuk mmebuat komponen menjadi lebih dinamis, props dioper ke component sama seperti memberikan atribut pada tag HTML, dan props juga pada component adalah read-only dan tidak dapat diubah.

•	One Way data flow pada react

•	Komposisi komponen
Komposisi komponen ada 2 yaitu :
-	Kontainmen
-	spesialisasi
	React Lifecycle
•	Lifecycle method yang umum
-	Render()
.	Fungsi yang paling sering dipakai
.	Required pada class component
.	Pure function. Tidak boleh ada setState()
-	componentDidMount()
.	dipanggil Ketika component sudah dirender untuk pertama kali
.	tempat yang tepat untuk pemanggilan API
.	boleh ada setState()
-	componentDidUpdate()
.	dipanggil Ketika terjadi pdate (props atau state berubah)
-	componentWillUnmount()
.	dipanggil Ketika component akan dihancurkan 
.	cocok untuk clean up actions
•	lifecycle method yang lainnya
-	shouldComponentUpdate()
-	static getDerivedStateFromProps()
-	getSnapshotBeforeUpdate()
-	
	Condition and list
•	Render bersyarat
Pada react, dapat membuat komponen berbeda yang mencakup perilaku yang di butuhkan. Lalu, kita dapat me-render hanya beberapa bagian saja, berdasarkan state dari aplikasi.
-	Menggunakan  If
-	Inline If dengan operator &&
-	Inline If-else dengan ternary conditional operator
-	Mencegah komponen untuk rendering
•	Render list
Dapat membangun koleksi dari beberapa elemen dan menyertakannya dalam JSX menggunkana tanda kurung kurawal {}
•	Key 
Key membantu react untuk mengidentifikasi item mana yang telah diubah, ditambahakan atau dihilangkan
	Directory structure
React tidak memiliki pendapat (unoptionated) tentang bagaimana cara memasukkan file ke folder
•	Pengelompokkan berdasarkan fitur atau rute
•	Pengelompokkan berdasarkan jenis file
api/

	Styling inline\
•	Classes dan CSS
/ style.css
.button {
      background-color: yellow;
}
// Button.jsx
import './style.css"
const Button = () => {
      return <button className="button">A
button</button>
}
•	Atribut style
const Button = () => {
       return <button style={{ backgroundColor: 'yellow' }}>A button</button>
}
const buttonStyle = { backgroundColor: 'yellow' }
const Button = () => {
        return <button style={buttonStyle}>A button</button>
}
•	Modul CSS
import style from './Button.module.css';
const Button = ( ) => {
          return <button className={style.content}>A button</button>
}
