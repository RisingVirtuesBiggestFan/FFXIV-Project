var itemList;
var rawMaterialList;
var searchInput;
var recipeList;


$(document).ready(function() {
    itemList = document.getElementById("itemList");
    var database = [
        "Holy Rainbow Gloves",
        "Holy Rainbow",
        "Holy Rainbow",
        "Holy Rainbow",
        "Holy Rainbow",
        "Holy Rainbow",
        "Holy Rainbow",
        "Holy Rainbow",
        "Holy Rainbow",
        "Holy Rainbow",
        "Holy Rainbow",
        "Holy Rainbow",
        "Holy Rainbow",
        "Aldgoat Leather"
            ];
    $("#searchBar").autocomplete({
        source: function(request, response) {
        var results = $.ui.autocomplete.filter(database, request.term);

        response(results.slice(0, 5));
        },
        autoFocus: true,
        minLength: 3
    }); 

} );
$("#searchButton").click(function() {
        searchDatabase();
            });


function searchDatabase() {
    //future add check to see if input matches database//
    //check to make sure input fields are not blank and create table/append//
    if ($("#searchBar").val() !=null && $("#searchBar").val() !='') {
        addItemToTable();
        clearInput();
    }
}

function addItemToTable() {
    if ($("#itemList tbody").length == 0) {
        $("#itemList").append("<tbody></tbody>");
    }
    $("#itemList tbody").append("<tr>" +
        "<td>" + $("#searchBar").val() + "</td>" +
        "<td>" + "#" + "</td>" +
        "<td>" + "STRING" + "</td>" +
        "<td>" + "<button type='button' onclick='removeRow(this);'> X </button>" +
        "</td>" +
        "</tr>");
}

function clearInput() {
    $("#searchBar").val("");
}

function removeRow(ctl) {
    $(ctl).parents("tr").remove();
}