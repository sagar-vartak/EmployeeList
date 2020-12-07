const printName = function (name) {
  console.log("this is the name", name);
};
let root = document.getElementById("root");
let x = 0;
export const renderEmployeeCard = (employee) => {
  let employeeCard = document.createElement("div");
  employeeCard.innerHTML = `
     <div class="employee-image">
     <img src="${employee.imageUrl}" alt="" />
     </div>
     <p id="emp${employee.id}">${employee.firstName} ${employee.lastName}</p>
     <p>${employee.company}</p> `;
  employeeCard.className = "employee-card";
  employeeCard
    .querySelector(`#emp${employee.id}`)
    .addEventListener("click", () => {
      printName(employee.firstName);
    });
  let details = document.createElement("div");
  let hobbies = document.createElement("div");

  employeeCard.addEventListener(
    "mouseenter",
    () => {
      /* let details = document.createElement("div"); */
      details.innerHTML = `
     <p id="emp${details.id}">Position: ${employee.position}</p>
     <p> Skills: ${employee.skills}</p> `;
      details.className = "employee-details";
      employeeCard.appendChild(details);
      employeeCard.style.height = "300px";
      console.log("else");
    } /* ,
    { once: true } */
  );

  employeeCard.addEventListener(
    "mouseleave",
    () => {
      details.innerHTML = "";
      employeeCard.style.height = "250px";
      employeeCard.style.width = "250px";
      console.log("else");
      hobbies.innerHTML = "";
      /* employeeCard.classList = "employee-card"; */
      /*       setTimeout(function () {
        employeeCard.classList = "employee-card";
      }, 5000); */
    } /* ,
    { once: true } */
  );
  employeeCard.addEventListener(
    "click",
    () => {
      /*       details.innerHTML = "";
      employeeCard.style.height = "200px";
      console.log("else"); */
    } /* ,
    { once: true } */
  );
  /*  employeeCard.addEventListener("mouseleave", () => {
    details.innerHTML = "";
  }); */
  return employeeCard;
  x = 0;
};
