import { data } from "./components/data.js";
import { renderEmployeeCard } from "./components/employeedata.js";

const rootDiv = document.getElementById("root");

data.then(function (employees) {
  employees.forEach(function (employee) {
    rootDiv.appendChild(renderEmployeeCard(employee));
  });
});
