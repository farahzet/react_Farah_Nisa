const btn_submit = document.querySelector('#btn_submit')
btn_submit.addEventListener("click", (e) => {
   // console.log("yoo");

	event.preventDefault();



	var firstName = document.getElementById("First").value;
    var lastName = document.getElementById("Last").value;
	var username = document.getElementById("uname").value;
    var email = document.getElementById("email").value;
    var gender = document.querySelector('input[name="flexRadioDefault"]:checked').value;
    var address1 = document.getElementById("address1").value;
    var address2 = document.getElementById("address2").value;
    var nationality = document.getElementById("Nationality").value;
    var checkbox = document.getElementsByName("Language");
    var Language = " ";
    for (var i = 0;  i < checkbox.length; i++) {
    	if (checkbox[i].checked){
    		Language = Language + checkbox[i].value + ", "
    	}
    }
    if (!firstName || !lastName || !username || !email || !gender || !address1 || !nationality) {
        console.log("Field cannot be empty");
        return;
    }

    // Membuat objek pengguna
    var user = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        gender: gender,
        address1: address1,
        address2: address2,
        nationality: nationality,
        Language: Language
    };

    // Menambahkan pengguna ke dalam tabel
    TambahTable(user);


function TambahTable(user) {
    var tableBody = document.getElementById("productTableBody");
    var row = tableBody.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);

    cell1.innerHTML = tableBody.rows.length - 1;
    cell2.innerHTML = user.firstName;
    cell3.innerHTML = user.lastName;
    cell4.innerHTML = user.username;
    cell5.innerHTML = user.email;
    cell6.innerHTML = user.gender;
    cell7.innerHTML = user.address1;
    cell8.innerHTML = user.address2;
    cell9.innerHTML = user.nationality;
    cell10.innerHTML = user.Language.replace(/,\s*$/, "");
 }

})
