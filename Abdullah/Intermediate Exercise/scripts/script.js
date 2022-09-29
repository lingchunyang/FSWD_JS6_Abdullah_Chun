let employeesList = JSON.parse(employees);
console.log(employeesList);

for (let employee of employeesList) {
  document.getElementById("demo").innerHTML += `
        
    <table>
            <tr>
                <th>Unique ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Job Title</th>
                <th>Salary</th>
            </tr>
            <tr>
                <td>${employee.Unique_ID}</td>
                <td>${employee.First_Name}</td>
                <td>${employee.Last_Name}</td>
                <td>${employee.Email_address}</td>
                <td>${employee.Job_Title}</td>
                <td>${employee.Salary}</td>
            </tr>
        </table>
    `;
}
