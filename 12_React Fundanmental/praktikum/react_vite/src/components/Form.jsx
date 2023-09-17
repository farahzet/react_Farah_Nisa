import Logo from '../assets/Bootstrap_logo.png'

function Form(){
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
            <form id="productForm" className="needs-validation" noValidate="">
            <div className="d-grid gap-2 col-4 mx-auto">
                <label htmlFor="formGroupExampleInput" className="form-label">
                Product Name
                </label>
                <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                required=""
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
                id="categoryProduct"
                required=""
                >
                <option selected="">Choose</option>
                <option value={1}>Clothes</option>
                <option value={2}>T-Shirt</option>
                <option value={3}>Skirt</option>
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
                required=""
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
                defaultValue={""}
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
                placeholder="$100"
                required=""
                />
                <div className="invalid-feedback">Product price cannot be empty</div>
            </div>
            <div className="invalid-feedback">Please fill the product</div>
            <br />
            <div className="d-grid gap-2 col-4 mx-auto">
                <button
                type="submit"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                >
                Submit
                </button>
                {/* Modal */}
                <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                >
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Alert
                        </h1>
                        <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        />
                    </div>
                    <div className="modal-body" id="alertMessage">
                        Field cannot be empty
                    </div>
                    <div className="modal-footer">
                        <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        >
                        Close
                        </button>
                        <button type="button" className="btn btn-primary">
                        Save changes
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </form>
        </section>
    )
}

export default Form