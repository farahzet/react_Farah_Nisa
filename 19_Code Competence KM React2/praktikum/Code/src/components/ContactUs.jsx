import { useState } from "react";
import callLogo from "../assets/callcenter.jpg"

function ContactUs(){

    const [firstname, setfirstname] = useState([]);
    const [lastname, setlastname] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();

        window.alert(`Selamat Datang ${firstname} ${lastname}`);
    }

    return(
        <section className="ContactUs">
            <div id="content_left">
                <h4>Contact Us</h4>
                <p>
                {" "}
                Need to get in touch with us? Either fill out the form with your incurity
                or find the department email you'd like to contact below
                </p>
                <img src={callLogo} className="Logoo" alt="call logo" style={{ height: 250, width: 250 }} />
            </div>
            <div id="content_right">
                <div id="liveAlertPlaceholder">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                    <label htmlFor="inputnamefirts" className="form-label">
                        Firts Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        id="firstname"
                        aria-label="First name"
                        value={firstname}
                        onChange={(e) => setfirstname(e.target.value)}
                    />
                    </div>
                    <div className="col-md-6">
                    <label htmlFor="inputnamelast" className="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        id="lastname"
                        aria-label="Last name"
                        value={lastname}
                        onChange={(e) => setlastname(e.target.value)}
                    />
                    </div>
                    <div className="col-12">
                    <label htmlFor="inputemail" className="form-label">
                        Email
                    </label>
                    <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="col-12">
                    <label htmlFor="comment">What can we help you need?</label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="comment"
                        style={{ height: 100 }}
                        defaultValue={""}
                    />
                    </div>
                    <div className="col-12">
                    <button type="submit" className="btn btn-primary" id="submit">
                        Submit
                    </button>
                    </div>
                </form>
                </div>
            </div>
            </section>
    )
}

export default ContactUs