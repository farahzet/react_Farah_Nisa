import React, { Component, useEffect, useState } from 'react'
import Logo from '../assets/Bootstrap_logo.png'
import { Link } from 'react-router-dom'
import { addform, deleteform} from '../redux/slices/formSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { deleteForm, getForm, sendForm, updateForm } from '../api';



function Form() {
    const dispatch = useDispatch()

    //const form = useSelector(state => state.form)

    
    const [form, setForm] = useState([]);
    const [HapusData, setHapusData] = useState(null);
    const [productNameError, setProductNameError] = useState('');
    const [productPriceError, setProductPriceError] = useState('');
    const [productCategoryError, setProductCategoryError] = useState('');
    const [ProductFreshnessError, setProductFreshnessError] = useState('');
    const [productImageError, setProductImageError] = useState('');

    

    const [newform, setNewForm] = useState({
        source: {
            id: '',
            name: ''
        },
        productName : '',
        productCategory : '',
        productFreshness : '',
        productPrice: '',
        productImage : ''
    });

    useEffect(() => {
        getForm()
        .then((res) =>{
            setForm(res.data)
            console.log(res.data)
        })
        .catch((er) =>{
            console.log(er)
        })
    }, [])

    useEffect(() => {
        // Load data from Local Storage when the component mounts
        const savedFormData = JSON.parse(localStorage.getItem('formData'));
        if (savedFormData) {
            setForm(savedFormData);
            }
        }, []);
    
    useEffect(() => {
        console.log('get data from redux', form)
        localStorage.setItem('formData', JSON.stringify(form));
    }, [form]);



    const imageTypes = ['image/jpeg', 'image/png'];

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;

    if (type === 'file'){
        // const imageUrl = URL.createObjectURL(e.target.files[0]);

        const selectedFile = files[0];
        if (selectedFile && imageTypes.includes(selectedFile.type)) {
            setNewForm({
            ...newform,
            [name]: selectedFile,
            });
            setProductImageError('');
        } else {
            setProductImageError('Pilih file gambar dengan tipe JPEG atau PNG.');
        }
        } else{
            setNewForm({
                ...newform,
                [name]: value,
                });
            }
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
        dispatch(addform(newform))

        sendForm(newform)
        .then((res) =>{
            
            // setForm(res.data)
            console.log('Data berhasil tersimpan di API => ', res.data)
        })
        .catch((er) =>{
            console.log('Ada Kesalahan dalam code', er)
        })

        // const productNameRegex = /^[a-zA-Z\s]+$/; 
        // const productPriceRegex = /^\d+(\.\d{1,2})?$/; 
        


        // setProductNameError('');
        // setProductPriceError('');
        // setProductCategoryError('');
        // setProductFreshnessError('');
        // setProductImageError('');

        // if (!newform.productName || !productNameRegex.test(newform.productName)) {
        //     setProductNameError('Nama produk hanya boleh diisi dengan huruf dan spasi');
        // }

        // if (!newform.productPrice || !productPriceRegex.test(newform.productPrice)) {
        //     setProductPriceError('Harga produk harus angka desimal (maksimal 2 desimal)');
        // }

        // if (!newform.productCategory) {
        //     setProductCategoryError('Pilih Produk');
        // }
        
        // if (!newform.productFreshness) {
        //     setProductFreshnessError('Pilih Jenis Produk ');
        // }
        


        // if (
        // newform.productName &&
        // newform.productCategory &&
        // newform.productImage &&
        // newform.productFreshness &&
        // newform.productPrice &&
        // productNameRegex.test(newform.productName) &&
        // productPriceRegex.test(newform.productPrice)
        // ) {
        // // Buat objek baru untuk data produk
        // //   const newProduct = {
        // //     productName: newform.productName,
        // //     productCategory: newform.productCategory,
        // //     productFreshness: newform.productFreshness,
        // //     productPrice: newform.productPrice,
        // //   };
        
        
        
        setForm([...form, newform]);

        setNewForm({
            productName: '',
            productCategory: '',
            productFreshness: '',
            productPrice: '',
            productImage: null,
        });
        //} 
    };

    const handleDelete = (index) => {

        const idForm = form[index].id;

        deleteForm(idForm)
        .then((res) =>{
            console.log('Data berhasil terhapus di API => ', res.data)
            const updatedform = [...form];
            updatedform.splice(HapusData, 1);
            setForm(updatedform);
            setHapusData(index);
            
        })
        .catch((er) =>{
            console.log('Ada Kesalahan dalam code', er)
        })


        

        // dispatch(deleteform(index));
        // console.log("masukoy");
    };

    const [editForm, setEditForm] = useState(null); 
    const [editMode, setEditMode] = useState(false);

    const handleEdit = (index) => {
        // dispatch(editform(newform))
        
        setEditForm(index);
        setEditMode(true);
        setNewForm(form[index]); 
    };

    const handleSave = () => {

        updateForm(form[editForm])
        .then((res) =>{
            console.log('Data berhasil di update => ', res.data)

            const updatedForm = [...form];
            updatedForm[editForm] = newform;
            setForm(updatedForm);

            setEditForm(null);
            setEditMode(false);
            setNewForm({
            ProductName: '',
            CategoryProduct: '',
            ProductFreshness: '',
            ProductPrice: '',
            ProductImage: null,
            });
        })
        .catch((er) =>{
            console.log('Ada Kesalahan dalam code', er)
        })

        
    };


    


    return(
        <section className="contentForm">
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
                <p id="productNameError" style={{ color: "red" }}>{productNameError}</p>
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
                <p id="productCategoryError" style={{ color: "red" }}>{productCategoryError}</p>
            </div>

            <div className="d-grid gap-2 col-4 mx-auto">
                <label htmlFor="inputState" className="form-label">
                Image of Product
                </label>
                <input
                type="file"
                className="form-control"
                id="productImage"
                accept=".jpg, .jpeg, .png"
                value={form.productImage}
                required=""
                onChange={handleInputChange}/>
                <p id="productImageError" style={{ color: "red" }}>{productImageError}</p>
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
                <label className="form-check-label" htmlFor="BrandNew">
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
                <label className="form-check-label" htmlFor="SecondHand">
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
                <label className="form-check-label" htmlFor="Refurbished">
                    Refurbished
                </label>
                </div>
                <p id="productFreshnessError" style={{ color: "red" }}>{ProductFreshnessError}</p>
            </div>

            <div className="d-grid gap-2 col-4 mx-auto">
                <label htmlFor="inputState" className="form-label">
                Additional Description
                </label>
                <textarea
                className="form-control"
                aria-label="With textarea"
                id="decs"
                required=""
                value={form.productDescription}
                defaultValue={""}
                onChange={handleInputChange}
                />
                <div className="invalid-feedback">
                Please enter a message in the textarea
                </div>
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
                <p id="productPriceError" style={{ color: "red" }}>{productPriceError}</p>
            </div>
            <div className="invalid-feedback">Please fill the product</div>
            <br />
            <div className="d-grid gap-2 col-4 mx-auto">
                <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => handleSubmit(e)}
                >
                Submit
                </button>
                </div>
                
            </form><br></br>
            <h2>List Product</h2>
            <div className="ListTable">
                <table
                className="table table-bordered table-striped table-hover"
                >
                <thead>
                    <tr style={{ textAlign: "center" }}>
                    <th scope="col">No</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Category Product</th>
                    <th scope="col">Product Image</th>
                    <th scope="col">Product Freshness</th>
                    <th scope="col">Product Price</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {form.map((product, index)=>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.ProductName}</td>
                            <td>{product.CategoryProduct}</td>
                            <td>
                                <img src={product.ProductImage} alt={`Product ${index + 1}`}  width="500"  height="500"/>
                            </td>
                            <td>{product.ProductFreshness}</td>
                            <td>{product.ProductPrice}</td>
                            <td>
                            {editMode && editForm === index ? (
                            <button className="btn btn-success" onClick={handleSave}>
                            Save
                            </button>
                            ) : (
                                <>
                                <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                                <button className="btn btn-outline-primary" onClick={() => handleEdit(index)}>Edit</button>
                                {/* <button className="btn btn-info" onClick={() => handleClick(product.id)}>Detail</button> */}
                                <Link to={`/detail/${index}`} className="btn btn-info"> Detail</Link>
                                </>
                            )}
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
                    {/* {HapusData!== null && (
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
                                onClick={setHapusData(null)}
                            ></button>
                            </div>
                            <div className="modal-body">Hapus Data ?</div>
                            <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={setHapusData(null)}
                            >
                                Batal
                            </button>
                            <button type="button" className="btn btn-danger" onClick={PesanHapus}>
                                Hapus
                            </button>
                            </div>
                        </div>
                        </div>
                    </div> */}
                    )
                </div>
            </section>
    )
}

export default Form