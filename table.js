// document.getElementById("table").addEventListener("onselect", function(event) {
//     if (event.target.tagName == "TD") {
//       selectRow(event.target.parentNode);
//     }
//   });
  
// function selectRow(rowId) {
//     // Deselect all rows
//     var rows = document.querySelectorAll("tr");
//     for (var i = 0; i < rows.length; i++) {
//       rows[i].classList.remove("selected");
//     }


    // Select the specified row
//     var row = document.getElementById(rowId).rowIndex;
//     console.log(row);
//     row.classList.add("selected");
//   }


//   function copyTableRow(table1, table2, rowIndex) {
//     // Get the row to be copied
//     const row = table1.rows[rowIndex];
  
//     // Create a new row in table2
//     const newRow = table2.insertRow();
  
//     // Copy the cells from the row to the new row
//     for (let i = 0; i < row.cells.length; i++) {
//       newRow.insertCell().innerHTML = row.cells[i].innerHTML;
//     }
//   }


function displayPopup(div) {
    console.log("data: ", div);
    const partId = div.getAttribute("data-ref");
    console.log("data-ref: ", partId);

    var selected_part = document.getElementById(partId);
    console.log("row: ", selected_part.innerHTML);

    // Create new row in popup table. Will need to just overwrite row 0
    document.getElementById("popup-table").rows[1].innerHTML = selected_part.innerHTML;
    const popup = document.getElementById("popup-wrapper");
    popup.style.display = "inline-block";
}
  
function closePopup() {
    const popup = document.getElementById("popup-wrapper");
    popup.style.display = "none";
}


