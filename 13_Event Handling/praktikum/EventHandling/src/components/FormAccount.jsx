import data from "./Article"
import Logo from '../assets/Bootstrap_logo.png'
import Caption from "./Caption"

function FormAccount(){
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
        <Caption/>
        <h3>Detail Form</h3>
        </div>
        <form>
        <div className="d-grid gap-2 col-4 mx-auto">
            <div className="row">
            <div className="col">
                <label htmlFor="formGroupExampleInput" className="form-label">
                First Name
                </label>
                <input
                type="text"
                name="First"
                className="form-control"
                id="First"
                require=""
                />
            </div>
            <div className="col">
                <label htmlFor="formGroupExampleInput" className="form-label">
                Last Name
                </label>
                <input
                type="text"
                name="Last"
                className="form-control"
                id="Last"
                require=""
                />
            </div>
            </div>
        </div>
        <br />
        <div className="d-grid gap-2 col-4 mx-auto">
            <label htmlFor="basic-url" className="form-label">
            Username
            </label>
            <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
                @
            </span>
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="addon-wrapping "
                id="uname"
            />
            </div>
        </div>
        <br />
        <div className="d-grid gap-2 col-4 mx-auto">
            <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
            </label>
            <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            />
        </div>
        <div className="d-grid gap-2 col-4 mx-auto">
            <label
            htmlFor="inputState"
            className="form-label"
            id="productFreshness"
            >
            Gender
            </label>
            <div className="form-check">
            <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                defaultValue="Perempuan"
                id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                Perempuan
            </label>
            </div>
            <div className="form-check">
            <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                defaultValue="Laki-laki"
                id="flexRadioDefault2"
                defaultChecked=""
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
                Laki-laki
            </label>
            </div>
        </div>
        <div className="d-grid gap-2 col-4 mx-auto">
            <label htmlFor="exampleFormControlInput1" className="form-label">
            Address
            </label>
            <input type="email" className="form-control" id="address1" />
        </div>
        <div className="d-grid gap-2 col-4 mx-auto">
            <label htmlFor="exampleFormControlInput1" className="form-label">
            Address (opsional)
            </label>
            <input type="email" className="form-control" id="address2" />
        </div>
        <div className="d-grid gap-2 col-4 mx-auto">
            <label htmlFor="inputState" className="form-label">
            Nationality
            </label>
            <select
            className="form-select"
            aria-label="Default select example"
            id="Nationality"
            name="Category"
            required=""
            >
            <option selected="">Choose</option>
            <option value="Indonesian">Indonesian</option>
            <option value="Chinese">Chinese</option>
            <option value="Malay">Malay</option>
            </select>
        </div>
        <div className="d-grid gap-2 col-4 mx-auto">
            <label htmlFor="inputState" className="form-label">
            Language Spoken :
            </label>
            <div className="form-check">
            <input
                className="form-check-input"
                name="Language"
                type="checkbox"
                defaultValue="Bahasa"
                id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Bahasa
            </label>
            </div>
            <div className="form-check">
            <input
                className="form-check-input"
                name="Language"
                type="checkbox"
                defaultValue="English"
                id="flexCheckChecked"
                defaultChecked=""
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
                English
            </label>
            </div>
            <div className="form-check">
            <input
                className="form-check-input"
                name="Language"
                type="checkbox"
                defaultValue="Others"
                id="flexCheckChecked"
                defaultChecked=""
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
                Others
            </label>
            </div>
        </div>
        <div className="d-grid gap-2 col-4 mx-auto">
            <button
            type="submit"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            id="btn_submit"
            >
            {" "}
            Create{" "}
            </button>
        </div>
        </form>
    </section>
    )
}

export default FormAccount