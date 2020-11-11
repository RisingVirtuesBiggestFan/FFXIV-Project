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
    itemList.innerHTML = database;//putting table using objects here//

} );
$("#searchButton").click(function() {
        searchDatabase();
            });


function searchDatabase() {
    searchInput = document.getElementById("searchBar").value;
    itemList.innerHTML = searchInput;
}
