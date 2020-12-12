var itemList;
var rawMaterialList;
var recipeList;
var enterInput;
var runningTally = {
    items: [],
}

async function getJSON () {
    var data = await $.getJSON('recipe.json')
    return data;
}
$(document).ready(async function() {
    
    var database = await getJSON();
    itemList = document.getElementById("itemList");
    enterInput = document.getElementById("searchBar");
    $("#searchBar").autocomplete({
        source: function(request, response) {
        var results = $.ui.autocomplete.filter(Object.keys(database), request.term);

        response(results.slice(0, 5));
        },
        autoFocus: true,
        minLength: 2,
        delay: 50,
    }); 
 
    enterInput.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            document.getElementById("searchButton").click();
  }
});
    $("#searchButton").click(function() {
        searchDatabase(database);
            });
} );


function searchDatabase(database) {
    //check to make sure input fields are not blank and create table/append//
    if ($("#searchBar").val() !=null && $("#searchBar").val() !='' && database.hasOwnProperty($("#searchBar").val()) && !runningTally.items.includes($("#searchBar").val())) {
        addItemToTable();
        clearInput();
    }
    else {
        document.getElementById("noItem").innerHTML = "Unable to add item.";
        setTimeout(function(){
            document.getElementById("noItem").innerHTML = '';
            }, 1500);
        clearInput();
    }
}

function addItemToTable() {
    if ($("#itemList tbody").length == 0) {
        $("#itemList").append("<tbody></tbody>");
    }
    if (document.getElementById("itemList").style.display = "none") {
        document.getElementById("itemList").style.display = "table";
    }
    runningTally.items.push($("#searchBar").val());
    runningTally.items.sort();
    $("#itemList tbody").children().remove();
    for (var i=0; i < runningTally.items.length; i++) {
    $("#itemList tbody").append("<tr>" +
        "<td>" + runningTally.items[i] + "</td>" +
        "<td>" + "#" + "</td>" +
        "<td>" + "STRING" + "</td>" +
        "<td>" + "<button id='removeButton' type='button' onclick='removeRow(this);'> X </button>" +
        "</td>" +
        "</tr>");
    }
}

function clearInput() {
    $("#searchBar").val("");
}

function removeRow(rr) {
    runningTally.items.splice($(rr).parents("#itemList td:nth-child(1)").val(),1)
    $(rr).parents("tr").remove();
    if ($("#itemList tbody").children().length == 0) {
        document.getElementById("itemList").style.display = "none";
        }

}


