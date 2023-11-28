import { Component } from "react";

// import "./employees-add-form.css";
import "./employees-add-form.scss";

class EmployeesAddForm extends Component {
  state = {
    name: "",
    salary: "",
  };

  onValueChange = (e) => {
    // Inputs validation
    if (e.currentTarget.getAttribute("data-input") === "name") {
      e.target.value = e.target.value.replace(/^[\s\d]/gi, "");
      e.target.value = e.target.value.replace(/\s+/gi, " ");
      e.target.value = e.target.value.replace(/[A-Za-zА-яЁё][A-ZА-ЯЁ]/g, (x) => x.toLowerCase());
      e.target.value = e.target.value.replace(/(\s|^)[a-zа-яё]/g, (x) => x.toUpperCase());
    }

    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length < 3 || !this.state.salary) return;
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
            data-input="name"
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
            data-input="number"
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
