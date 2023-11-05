// GET ELEMENT BY ID
const $ = (id) => document.getElementById(id)

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = $('addForm')
let selectedtable = $('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = $('empCount')
count.innerHTML = 0;



// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let employeeID = $('id').value
    let fullName = $('name').value
    let ext = $('extension').value
    let email = $('email').value
    let dept = $('department').value


    console.log(employeeID)
    console.log(fullName)
    console.log(ext)
    console.log(email)
    console.log(dept)


    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE let row = selectedtable.insertRow()
    let row = selectedtable.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW let cellID = row.insertCell()
    //let numFields = form.getElementsByTagName('label').length
    
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS 
    // . This can be down using the .createTextNode() method and passing it in to the .appendChild() method for each cell in the row.

    let cellID = row.insertCell()
    let idVal = document.createTextNode(employeeID)
    cellID.appendChild(idVal)

    let cellFullName = row.insertCell()
    let nameVal = document.createTextNode(fullName)
    cellFullName.appendChild(nameVal)

    let cellExt = row.insertCell()
    let extVal = document.createTextNode(ext)
    cellExt.appendChild(extVal)

    let cellEmail = row.insertCell()
    let emailVal = document.createTextNode(email)
    cellEmail.appendChild(emailVal)

    let cellDept = row.insertCell()
    let deptVal = document.createTextNode(dept)
    cellDept.appendChild(deptVal)


    // CREATE THE DELETE BUTTON
    let delBtn = document.createElement("button")
    delBtn.setAttribute('id', 'delete-btn')
    delBtn.setAttribute('class', 'btn btn-dark')
    delBtn.innerText = "X"

    let cellDel = row.insertCell()
    cellDel.appendChild(delBtn)



    // RESET THE FORM Upon submission, the form should completely clear itself of the entered values.
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX Upon submission, the user’s cursor should immediately return to the Employee ID field.
    $('id').focus()

    // INCREMEENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count.innerHTML = parseInt(count.innerHTML) + 1;


})


// DELETE EMPLOYEE // deleteRow(e.target.path-to-tr-tag.rowIndex)
selectedtable.addEventListener('click', (e) => {
    //console.log(e.target) see the current element you're clicking on

    // //the parent of e.target (the button) is <td> (the cell), and the parent of the cell is <tr> the row
    if (e.target.id == 'delete-btn') {
        if (confirm("Do you really want to remove the employee?") == true) {
            let rowToRemove = e.target.parentNode.parentNode.rowIndex 
            selectedtable.deleteRow(rowToRemove)
            
            //DECREMENT EMPLOYEE COUNT
            count.innerHTML = parseInt(count.innerHTML) - 1;

        }

    }

})