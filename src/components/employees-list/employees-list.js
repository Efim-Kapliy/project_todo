import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleProp, onItemSalary }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;

    const itemReplaceAttribute = (e) => {
      e.currentTarget.getAttribute("data-replace");
    };

    const itemReplaceValue = (e) => {
      if (e.currentTarget.getAttribute("data-replace") === "salary") {
        let position = e.target.selectionStart;

        e.target.value = e.target.value.replace(/\D/g, "");
        e.target.value = e.target.value.replace(/$/g, "$");
        if (e.target.value.length <= 1) e.target.value = e.target.value.replace(/^/g, "0");

        e.target.selectionEnd = position;
        return e.target.value;
      }
      return e.target.value;
    };

    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))}
        onItemSalary={(e) => onItemSalary(id, itemReplaceAttribute(e), itemReplaceValue(e))}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
