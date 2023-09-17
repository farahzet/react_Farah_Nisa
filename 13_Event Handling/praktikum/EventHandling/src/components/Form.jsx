import { useState } from 'react'
import Logo from '../assets/Bootstrap_logo.png'


const Form = () => {
    const[form, setForm] = useState({
        productName:"",
        productCategoty:"",
        productIamge:"",
        productFreshness:"",
        productDescription:"",
        productPrice:""
    })

    function Validate(e){
        if(form.productName.trim()==="" || form.productName == null){
            e.preventDefault()
            e.stopPropagation()
            console.log(form.productName)
            window.alert("Please input the valid product name")
        }
    }

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
            <form id="productForm" className="needs-validation" noValidate="" onSubmit={(e)=>{
                Validate(e)
            }}>
            <div className="d-grid gap-2 col-4 mx-auto">
                <label htmlFor="formGroupExampleInput" className="form-label">
                Product Name
                </label>
                <input
                type="text"
                className="productName"
                value={form.productName}
                id="productName"
                required=""
                onChange={(e) => {
                    console.log(e.target.value)
                        setForm((old) => {
                            return{
                                ...old,
                                productName:e.target.value
                            }
                        })
                    if (e.target.value.length > 10) {
                        window.alert('Tidak boleh melebihi 10 karakter')
                      } else if (e.target.value.length > 25) {
                       window.alert('Product Name must not exceed 25 characters.')
                      } else {
                        return true;
                      }
                }}
                />
                <p id="errorMessage" style={{ color: "red" }} />
            </div>
            <div className="d-grid gap-2 col-4 mx-auto">
                <label htmlFor="inputState" className="form-label">
                Category Product
                </label>
                <select
                className="form-select"
                aria-label="Default select example"
                value={form.productCategoty}
                id="categoryProduct"
                required=""
                onChange={(e) => {
                    console.log(e.target.value)
                    setForm((old) => {
                        return{
                            ...old,
                            productPrice:e.target.value
                        }
                    })
                }}
                >
                <option selected="">Choose</option>
                <option value ="Clothes">Clothes</option>
                <option value ="Tshirt">T-Shirt</option>
                <option value ="Skirt">Skirt</option>
                </select>
                <div className="invalid-feedback">Please select the product</div>
            </div>
            <div className="d-grid gap-2 col-4 mx-auto">
                <label htmlFor="inputState" className="form-label">
                Image of Product
                </label>
                <input
                type="file"
                className="form-control"
                id="inputGroupFile02"
                value={form.productIamge}
                required=""
                onChange={(e) => {
                    console.log(e.target.value)
                    setForm((old) => {
                        return{
                            ...old,
                            productPrice:e.target.value
                        }
                    })
                }}
                />
                <div className="invalid-feedback">Upload file</div>
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
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    required=""
                    onChange={(e) => {
                        console.log(e.target.value)
                        setForm((old) => {
                            return{
                                ...old,
                                productPrice:e.target.value
                            }
                        })
                    }}
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
                    required=""
                    onChange={(e) => {
                        console.log(e.target.value)
                        setForm((old) => {
                            return{
                                ...old,
                                productPrice:e.target.value
                            }
                        })
                    }}
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
                    required=""
                    onChange={(e) => {
                        console.log(e.target.value)
                        setForm((old) => {
                            return{
                                ...old,
                                productPrice:e.target.value
                            }
                        })
                    }}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                    Refurbished
                </label>
                </div>
                <div className="invalid-feedback">Please fill the product</div>
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
                onChange={(e) => {
                    console.log(e.target.value)
                    setForm((old) => {
                        return{
                            ...old,
                            productDescription:e.target.value
                        }
                    })
                }}
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
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                value={form.productPrice}
                placeholder="$100"
                required=""
                onChange={(e) => {
                    console.log(e.target.value)
                    setForm((old) => {
                        return{
                            ...old,
                            productPrice:e.target.value
                        }
                    })
                }}
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
        </section>
    )
}

export default Form