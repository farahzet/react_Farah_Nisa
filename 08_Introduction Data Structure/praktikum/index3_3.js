const btn_submit = document.querySelector('#btn_submit')
btn_submit.addEventListener("click", (e) => {
    

    // console.log("masuk sini");
     e.preventDefault();
     

    // var radio_value = document.querySelector('input[name="flexRadioDefault"]:checked').value;
    // console.log(radio_value);

    var productName = document.getElementById("formGroupExampleInput").value;
    var categoryProduct = document.getElementById("categoryProduct").value;
    var imageProduct = document.getElementById("inputGroupFile02").value; 
    var freshness = document.querySelector('input[name="flexRadioDefault"]:checked').value;
    var additionalDescription = document.getElementById("decs").value;
    var productPrice = document.getElementById("formGroupExampleInput1").value;

    // Validasi input
    if (!productName || categoryProduct === "Choose" || !freshness || !additionalDescription || !productPrice) {
        console.log("Harus diisi semua");
        return;
    }

    // Membuat objek produk
    var product = {
        name: productName,
        category: categoryProduct,
        image: imageProduct,
        freshness: freshness,
        description: additionalDescription,
        price: productPrice
    };

    // Menambahkan produk ke dalam tabel
    TambahTable(product);

    function TambahTable(product) {
    var tableBody = document.getElementById("productTableBody");
    var row = tableBody.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    
    cell1.innerHTML = tableBody.rows.length - 1;
    cell2.innerHTML = product.name;
    cell3.innerHTML = product.category;
    cell4.innerHTML = product.image;
    cell5.innerHTML = product.freshness;
    cell6.innerHTML = product.description;
    cell7.innerHTML = product.price;
 }


})