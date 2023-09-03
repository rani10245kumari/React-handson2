import { Component } from "react";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            Department: "",
            Rating: "",
            StudentData: [],
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value.length);
    };

    handleSubmit = () => {
        const { name, Department, Rating } = this.state;
        if (!name || !Department || !Rating) {
            window.alert("Unable to Submit the form");
            return;
        }

        const tempObj = {
            name: this.state.name,
            Department: this.state.Department,
            Rating: this.state.Rating,
        };

        const updatedStudentData = [...this.state.StudentData, tempObj];

        this.setState({
            StudentData: updatedStudentData,
            name: "",
            Department: "",
            Rating: "",
        });

        console.log(updatedStudentData);
    };

    render() {
        return (
            <>
                <h1 id="heading">EMPLOYEE FEEDBACK FORM</h1>
                <label className="name" htmlFor="name">
                    Name:
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                    className="text"
                    type="text"
                    id="name"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
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
                    onChange={this.handleChange}
                    value={this.state.Department}
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
                    onChange={this.handleChange}
                    value={this.state.Rating}
                />
                <br />
                <br />
                <br />
                <br />
                <button className="btn" type="button" onClick={this.handleSubmit}>
                    Submit
                </button>
                <div className="last">
                    {this.state.StudentData.map((item, index) => {
                        return (
                            <div className="last1" key={index}>
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
}

export default Form;