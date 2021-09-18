var firstchild = document.getElementById('firstChild');
var lastchild = document.getElementById('lastChild');
var childnodes = document.getElementById('childnodes');
var add = document.getElementById('add');
var removechild = document.getElementById('removechild');

console.log(firstchild);
console.log(lastchild);
console.log(removechild);

//getting list
var lst = document.getElementsByTagName('ul');
console.log(lst[0]);

//crossing and uncrossing
document.addEventListener('click', function(){
    if(event.target.className == "items") {
        event.target.className = "line items";
    }
    
    else if(event.target.className == "line items") {
        event.target.className = "items";
    }
});

firstchild.addEventListener('click', function(){
    lst[0].firstChild.innerHTML = "firstChild";
})

lastchild.addEventListener('click', function(){
    lst[0].lastChild.innerHTML   = "lastChild";
})

removechild.addEventListener('click', function(){
    lst[0].removeChild(lst[0].firstChild);
})

//printing all of the Childnodes of our to-do List
childnodes.addEventListener('click', function(){
    x = document.getElementById('list').childNodes;
    console.log(x);
    
    var txt = "";
    for(i=0; i<x.length; i++) {
        txt = txt + x[i].nodeName + "<br>";
    }
    
    document.getElementById("demo").innerHTML = txt;
})

//add item to the list
function addItem() {
    event.preventDefault();
    var val = document.getElementById('to-add');

    if(val.value != "") {
        var l = document.getElementById('list');
        ele = document.createElement("li");
        ele.innerHTML = val.value; //"<input type='button' class = 'del' value='X'>";
        ele.className = "items";
        lst[0].appendChild(ele);
        val.value = "";
    }

    else{
        alert('Empty List Item');
    }
}

add.addEventListener('click', addItem, false);