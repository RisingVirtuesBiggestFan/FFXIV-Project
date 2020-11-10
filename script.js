var itemList;
var rawMaterialList;
var searchInput;
var recipeList;

$(document).ready(function() {
    itemList = document.getElementById("itemList");
    itemList.innerHTML  = "hey";
});

    $("#searchButton").click(function() {
        searchDatabase();
    });

function searchDatabase() {
    searchInput = document.getElementById("searchBar").value;
    itemList.innerHTML = searchInput;
};