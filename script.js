var itemList;
var rawMaterialList;
var searchInput;
var recipeList;
var enterInput;
var database = [
        "Holy Rainbow Gloves",
        "Maple Lumber",
        "Maple Clogs",
        "Maple Shortbow",
        "Bone Harpoon",
        "Amateur's Grinding Wheel",
        "Maple Pattens",
        "Amateur's Spinning Wheel",
        "Square Maple Shield",
        "Bronze Spear",
        "Maple Cane",
        "Boar Leather",
        "Raptor Leather",
        "Aldgoat Leather"
            ];

$(document).ready(function() {
    itemList = document.getElementById("itemList");
    enterInput = document.getElementById("searchBar");
    database.sort();
    $("#searchBar").autocomplete({
        source: function(request, response) {
        var results = $.ui.autocomplete.filter(database, request.term);

        response(results.slice(0, 5));
        },
        autoFocus: true,
        minLength: 2,
        delay: 100,
    }); 
 
    enterInput.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            document.getElementById("searchButton").click();
  }
});

} );
$("#searchButton").click(function() {
        searchDatabase();
            });

    


function searchDatabase() {
    //check to make sure input fields are not blank and create table/append//
    if ($("#searchBar").val() !=null && $("#searchBar").val() !='' && database.includes($("#searchBar").val())) {
        addItemToTable();
        clearInput();
    }
}

function addItemToTable() {
    if ($("#itemList tbody").length == 0) {
        $("#itemList").append("<tbody></tbody>");
        document.getElementById("itemList").style.display = "table";
    }
    $("#itemList tbody").append("<tr>" +
        "<td>" + $("#searchBar").val() + "</td>" +
        "<td>" + "#" + "</td>" +
        "<td>" + "STRING" + "</td>" +
        "<td>" + "<button id='removeButton' type='button' onclick='removeRow(this);'> X </button>" +
        "</td>" +
        "</tr>");
}

function clearInput() {
    $("#searchBar").val("");
}

function removeRow(ctl) {
    $(ctl).parents("tr").remove();
}


