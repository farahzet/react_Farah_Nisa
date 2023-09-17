import React, { useState } from 'react'
import Logo from '../assets/Bootstrap_logo.png'


function Form() {

    
    const [form, setForm] = useState([]);
    const [HapusData, setHapusData] = useState(null);

    

    const [newform, setNewForm] = useState({
        productName: '',
        productCategory: '',
        productFreshness: '',
        productPrice: '',
    });



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewForm({
        ...newform,
        [name]: value,
        });
    };

//   const handleCheckbox = (e) => {
//     const { name, checked } = e.target;
//     setNewForm({
//       ...newform,
//       [name]: checked,
//     });
//   };

  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
        newform.productName &&
        newform.productCategory &&
        newform.productFreshness &&
        newform.productPrice
        ) {
        // Buat objek baru untuk data produk
        //   const newProduct = {
        //     productName: newform.productName,
        //     productCategory: newform.productCategory,
        //     productFreshness: newform.productFreshness,
        //     productPrice: newform.productPrice,
        //   };
        
        
        
        setForm([...form, newform]);

        setNewForm({
            productName: '',
            productCategory: '',
            productFreshness: '',
            productPrice: '',
        });
        } 
    };

    const handleDelete = (index) => {
        // console.log("masukoy");
        setHapusData(index);
    }

    const PesanHapus = () => {
        if (HapusData !== null){
        const updatedform = [...form];
        updatedform.splice(HapusData, 1);
        setForm(updatedform);
        setHapusData(null);
        }
    };

    const cancel = () =>{
        setHapusData(null);
    };


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
            </div>
            <form onSubmit={handleSubmit}>
            <div className="d-grid gap-2 col-4 mx-auto">
                <label htmlFor="formGroupExampleInput" className="form-label">
                Product Name
                </label>
                <input
                type="text"
                className="productName"
                name="productName"
                value={newform.productName}
                id="productName"
                required=""
                onChange={handleInputChange}
                />
                <p id="errorMessage" style={{ color: "red" }} />
            </div>
            <div className="d-grid gap-2 col-4 mx-auto">
                <label htmlFor="productCategory" className="form-label">
                Category Product
                </label>
                <select
                className="form-select"
                aria-label="Default select example"
                name="productCategory"
                value={newform.productCategory}
                id="productCategory"
                required=""
                onChange={handleInputChange}
                >
                <option value="">Choose</option>
                <option value ="Clothes">Clothes</option>
                <option value ="Tshirt">T-Shirt</option>
                <option value ="Skirt">Skirt</option>
                </select>
                <div className="invalid-feedback">Please select the product</div>
            </div>
            
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
                    id="BrandNew"
                    name="productFreshness"
                    value="BrandNew"
                    checked={newform.productFreshness === "BrandNew"}
                    required=""
                    onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Brand New
                </label>
                </div>

                <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    id="SecondHand"
                    name="productFreshness"
                    value="SecondHand"
                    checked={newform.productFreshness === "SecondHand"}
                    required=""
                    onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Second Hank
                </label>
                </div>

                <div className="form-check">
                <input
                     className="form-check-input"
                    type="radio"
                    id="Refurbished"
                    name="productFreshness"
                    value="Refurbished"
                    checked={newform.productFreshness === "Refurbished"}
                    required=""
                    onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                    Refurbished
                </label>
                </div>
                <div className="invalid-feedback">Please fill the product</div>
            </div>
            
            <div className="d-grid gap-2 col-4 mx-auto">
                <label htmlFor="formGroupExampleInput" className="form-label">
                Product Price
                </label>
                <input
                type="number"
                className="form-control"
                id="productPrice"
                name="productPrice"
                value={newform.productPrice}
                placeholder="$100"
                required=""
                onChange={handleInputChange}
                />
                <div className="invalid-feedback">Product price cannot be empty</div>
            </div>
            <div className="invalid-feedback">Please fill the product</div>
            <br />
            <div className="d-grid gap-2 col-4 mx-auto">
                <button
                type="submit"
                className="btn btn-primary"
                >
                Submit
                </button>
                </div>
                
            </form>
            <div className="ListTable">
                <table
                className="table table-bordered table-striped table-hover"
                id="CreateProduct"
                >
                <thead>
                    <tr style={{ textAlign: "center" }}>
                    <th scope="col">No</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Category Product</th>
                    <th scope="col">Product Freshness</th>
                    <th scope="col">Product Price</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {form.map((product, index)=>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.productName}</td>
                            <td>{product.productCategoty}</td>
                            <td>{product.productFreshness}</td>
                            <td>{product.productPrice}</td>
                            <td>
                                <button className="btn btn-danger" onClick={()=> handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
                    {HapusData !== null && (
                        <div
                        className="modal fade">
                        <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h1 className="modal-title fs-5" >
                                HapusData
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={cancel}
                            ></button>
                            </div>
                            <div className="modal-body">Hapus Data ?</div>
                            <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={cancel}
                            >
                                Batal
                            </button>
                            <button type="button" className="btn btn-danger" onClick={PesanHapus}>
                                Hapus
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    )}
                </div>
            </section>
    )
}

export default Form