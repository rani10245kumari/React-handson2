import React, { useState } from "react";

function FormCompo() {
    const [formData, setFormData] = useState({
        name: "",
        Department: "",
        Rating: "",
    });

    const [StudentData, setStudentData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(value.length);
    };

    const handleSubmit = () => {
        const { name, Department, Rating } = formData;
        if (!name || !Department || !Rating) {
            window.alert("Unable to Submit the form");
            return;
        }

        const tempObj = {
            name: formData.name,
            Department: formData.Department,
            Rating: formData.Rating,
        };

        const updatedStudentData = [...StudentData, tempObj];

        setStudentData(updatedStudentData);

        setFormData({
            name: "",
            Department: "",
            Rating: "",
        });

        console.log(updatedStudentData);
    };

    return (
        <>
            <h1 id="head">EMPLOYEE FEEDBACK FORM</h1>
            <label className="name" htmlFor="name">
                Name:
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
                className="text"
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={formData.name}
            />
            <br />
            <br />
            <label className="Department" htmlFor="Department">
                Department:
            </label>
            &nbsp;&nbsp;&nbsp;
            <input
                className="text"
                type="text"
                id="Department"
                name="Department"
                onChange={handleChange}
                value={formData.Department}
            />
            <br />
            <br />
            <label className="Rating" htmlFor="Rating">
                Rating:
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
                className="text"
                type="number"
                id="Rating"
                name="Rating"
                onChange={handleChange}
                value={formData.Rating}
            />
            <br />
            <br />
            <br />
            <br />
            <button className="button" type="button" onClick={handleSubmit}>
                Submit
            </button>
            <div className="end">
                {StudentData.map((item, index) => {
                    return (
                        <div className="end2" key={index}>
                            <h3>
                                Name: {item.name}||Department: {item.Department} || Rating:{" "}
                                {item.Rating}{" "}
                            </h3>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default FormCompo;
