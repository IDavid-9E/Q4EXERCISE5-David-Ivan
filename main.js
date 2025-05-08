function displayProductCategory() {
    var prodCategory = document.getElementById('categoryEntry').value; // Get the value as a string
    
    switch (prodCategory) {
        case "C":
            document.getElementById("displayCategory").innerHTML = "Category: Clothing";
            break;
        case "E":      
            document.getElementById("displayCategory").innerHTML = "Category: Electronics";
            break;
        case "B":
            document.getElementById("displayCategory").innerHTML = "Category: Books";
            break;
        default:
            document.getElementById("displayCategory").innerHTML = "Invalid Category"; // Set an error message
    }
}

function refreshPage() {
    window.location.reload();
}