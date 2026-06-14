const API_URL =
"https://employee-management-system-gfl9.onrender.com/api/employees";

const form = document.getElementById("employeeForm");
const employeeTable = document.getElementById("employeeTable");
let editingId = null;

async function fetchEmployees(){

    const res = await fetch(API_URL);

    const employees = await res.json();

    document.getElementById("totalEmployees")
        .textContent = employees.length;

    employeeTable.innerHTML = "";

    if(employees.length === 0){

        employeeTable.innerHTML = `
            <tr>
                <td colspan="6">
                    No Employees Found
                </td>
            </tr>
        `;

        return;
    }

    employees.forEach(emp => {

        employeeTable.innerHTML += `
            <tr>
                <td>${emp.name}</td>
                <td>${emp.department}</td>
                <td>${emp.role}</td>
                <td>${emp.salary}</td>
                <td>${new Date(emp.joinDate).toLocaleDateString()}</td>
                <td>
                    <button
                        class="edit-btn"
                        onclick="editEmployee('${emp._id}')">
                        Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteEmployee('${emp._id}')">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });

}
async function editEmployee(id){

    const res = await fetch(API_URL);

    const employees = await res.json();

    const employee = employees.find(emp => emp._id === id);

    document.getElementById("name").value = employee.name;
    document.getElementById("department").value = employee.department;
    document.getElementById("role").value = employee.role;
    document.getElementById("salary").value = employee.salary;

    document.getElementById("joinDate").value =
        employee.joinDate.split("T")[0];

    editingId = id;
}

form.addEventListener("submit", async(e)=>{

    e.preventDefault();
    const name = document.getElementById("name").value.trim();
const department = document.getElementById("department").value.trim();
const role = document.getElementById("role").value.trim();
const salary = Number(document.getElementById("salary").value);
const joinDate = document.getElementById("joinDate").value;

if(!name || !department || !role || !salary || !joinDate){
    alert("All fields are required");
    return;
}

if(name.length < 2){
    alert("Name must be at least 2 characters");
    return;
}

if(!isNaN(name)){
    alert("Name cannot be only numbers");
    return;
}

if(!isNaN(department)){
    alert("Department cannot be only numbers");
    return;
}

if(!isNaN(role)){
    alert("Role cannot be only numbers");
    return;
}

if(salary <= 0){
    alert("Salary must be greater than 0");
    return;
}

    const employee = {

        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        role: document.getElementById("role").value,
        salary: document.getElementById("salary").value,
        joinDate: document.getElementById("joinDate").value
    };

    if(editingId){

        await fetch(`${API_URL}/${editingId}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(employee)
        });

        editingId = null;

    }else{

        await fetch(API_URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(employee)
        });

    }

    form.reset();

    fetchEmployees();

});

async function deleteEmployee(id){

    const confirmDelete =
        confirm("Are you sure you want to delete this employee?");

    if(!confirmDelete) return;

    await fetch(`${API_URL}/${id}`,{
        method:"DELETE"
    });

    fetchEmployees();
}

fetchEmployees();
const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", () => {

    const searchValue = searchInput.value.toLowerCase();

    const rows = document.querySelectorAll("#employeeTable tr");

    rows.forEach(row => {

        const text = row.textContent.toLowerCase();

        row.style.display =
            text.includes(searchValue) ? "" : "none";

    });

});
let sortAsc = true;

async function sortSalary(){

    const res = await fetch(API_URL);

    let employees = await res.json();

    employees.sort((a,b)=>{

        return sortAsc
            ? a.salary - b.salary
            : b.salary - a.salary;

    });

    sortAsc = !sortAsc;

    employeeTable.innerHTML = "";

    employees.forEach(emp => {

        employeeTable.innerHTML += `
        <tr>
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td>${emp.role}</td>
            <td>${emp.salary}</td>
            <td>${new Date(emp.joinDate).toLocaleDateString()}</td>
            <td>
                <button class="edit-btn"
                onclick="editEmployee('${emp._id}')">
                Edit
                </button>

                <button class="delete-btn"
                onclick="deleteEmployee('${emp._id}')">
                Delete
                </button>
            </td>
        </tr>`;
    });
}
const selectedDate = new Date(joinDate);
const today = new Date();

if(selectedDate > today){
    alert("Join date cannot be in the future");
    return;
}