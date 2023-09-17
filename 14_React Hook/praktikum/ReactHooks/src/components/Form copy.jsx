import React, { useState } from 'react'
import Logo from '../assets/Bootstrap_logo.png'


function Form() {

      // Buat state untuk menyimpan data produk dalam bentuk array objek
  const [form, setForm] = useState([]);
  const [selectedFreshness, setSelectedFreshness] = useState('');

  
  // Buat state untuk menyimpan data produk yang sedang diisi dalam form
  const [newform, setNewForm] = useState({
    productName: '',
    productCategory: '',
    productFreshness: '',
    productPrice: '',
  });

  // Buat fungsi untuk mengambil input dari pengguna dan menyimpannya dalam state formData
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewForm({
      ...newform,
      [name]: value,
    });
  };

  // Buat fungsi untuk menambahkan data produk ke dalam state products saat tombol "Submit" diklik
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newform.productName &&
      newform.productCategory &&
      newform.productFreshness &&
      newform.productPrice
    ) {
      // Buat objek baru untuk data produk
      const newProduct = {
        productName: newform.productName,
        productCategory: newform.productCategory,
        productFreshness: newform.productFreshness,
        productPrice: newform.productPrice,
      };
      
      setSelectedFreshness(e.target.id);
      // Tambahkan objek produk ke dalam array products
      setForm([...form, newProduct]);

      // Reset form
      setNewForm({
        productName: '',
        productCategory: '',
        productFreshness: '',
        productPrice: '',
      });
    } else {
      alert('Silakan isi semua field');
    }
  };

    
    // useEffect(() => {
    //     window.alert("Welcome");
    //   }, []);

    return(
        <section className="content">
            <div className="d-grid gap-2 col-4 mx-auto">
            <img
                src={Logo}
                alt="Bootstrap"
                width={60}
                height={50}
                style={{ marginLeft: 200 }}
            />
            <h2 style={{ marginLeft: 130 }}>Create Product</h2>
            <p>
                Below is an example form built entirely with Bootstrap’s form controls.
                Each required form group has a validation state that can be triggered by
                attempting to submit the form without completing it.
            </p>
            <h3>Detail Product</h3>
            <form onSubmit={handleSubmit}>
            <div className="d-grid gap-2 col-4 mx-auto">
                <label  htmlFor="formGroupExampleInput" className="form-label">
                Product Name:
                </label>
                <input
                    type="text"
                    name="productName"
                    value={newform.productName}
                    required=""
                    onChange={handleInputChange}
                />
                </div>
    

        {/* <br /> */}
            <div className="d-grid gap-2 col-4 mx-auto">
                <label htmlFor="inputState" className="form-label">
                Category Product
                </label>
                <select
                name="productCategory"
                aria-label="Default select example"
                value={newform.productCategory}
                required=""
                onChange=
                    {handleInputChange}
                >
                <option selected="">Choose</option>
                <option value ="Clothes">Clothes</option>
                <option value ="Tshirt">T-Shirt</option>
                <option value ="Skirt">Skirt</option>
                </select>
            </div>
        
        {/* <br /> */}
            <div className="d-grid gap-2 col-4 mx-auto">
                <label
                htmlFor="inputState"
                className="form-label"
                id="productFreshness"
                >
                Product Freshness
                </label>
                <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked={newform === "flexRadioDefault1"}
                    required=""
                    onChange= {handleInputChange}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Brand New
                </label>
                </div>
                <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    // value={newform.productFreshness}
                    checked={newform === "flexRadioDefault2"}
                    required=""
                    onChange= {handleInputChange}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Second Hank
                </label>
                </div>
                <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    // value={newform.productFreshness}
                    checked={newform === "flexRadioDefault3"}
                    required=""
                    onChange= {handleInputChange}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                    Refurbished
                </label>
                </div>
            </div>
        <br />
            <div className="d-grid gap-2 col-4 mx-auto">
                <label htmlFor="formGroupExampleInput" className="form-label">
                Product Price
                </label>
                <input
                type="text"
                name="productPrice"
                id="formGroupExampleInput"
                value={newform.productPrice}
                placeholder="$100"
                required=""
                onChange= {handleInputChange}
                />
            </div>
        <br />
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {form.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.productFreshness}</td>
              <td>{product.productPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </section>
  );          
}

export default Form