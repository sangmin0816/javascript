function moveSelect(){
    var selected = document.getElementById("sel");
    if(selected.value) location.assign(selected.value);
}


var res = document.getElementById("res");
function locationprint(){
    for(var key in location){
        res.innerHTML+= key+" "+location[key]+"<br>";
    }
}

function historyprint(){
    for(var key in history){
        res.innerHTML+= key+" "+history[key]+"<br>";
    }
}

function timeoutfunc(){
    setTimeout(function(){
        location.href = "https://www.naver.com";
        alert(location.href);
    }, 1500);
}


var btn6 = document.getElementById("btn6").addEventListener("click", function(){
});