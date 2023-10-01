=== Redux ===
Library untuk manajemen state global

Global State Management

Kapan saat menggunakan redux :
a. Banyak state yang perlu di taroh di banyak tempat
b. State pada app sering berubah
c. Logic untuk mengubah state kompleks
d. Ukuran codebase yang sedang-besar dan dikerjakan oleh banayk orang
e. Perlu untuk mengetahui bagaimana state di update seiring dengan waktu

Redux Libraries dan Tools => React-Redux, Redux Toolkit, Redux Devtools Extension

Komponen penting di redux 
a. Actions => Digunakan untuk memberikan informasi dari aplikasi ke store
b. Reducer => Pure Javascript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikkan stste aplikasi terbaru.
c. Store => Objek sentral yang menyimpan state pada aplikasi

Redux thunk perlu?
a. untuk menghandle side effect logic yang kompleks
b. untuk logic async seperti request data

== Fetching Data ==
caranya :
1. Fetch API
2. Axios
3. React Query Library
