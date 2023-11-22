import "./app-info.css";

const AppInfo = ({ employees, increased }) => {
  return (
    <div className="app-info">
      <h1>Учёт сотрудников в компании Thermwood</h1>
      <h2>Общее число сотрудников: {employees}</h2>
      <h2>Премию получат: {increased}</h2>
    </div>
  );
};

export default AppInfo;
