    
    
var d1 = document.querySelector(".d1");
var d2 = document.querySelector(".d2");
var d3 = document.querySelector(".d3");
var d4 = document.querySelector(".d4");
var d5 = document.querySelector(".d5");

var id = "546c25a59c58ad7"

var resp = fetch(`https://api.imgur.com/post/v1/posts?client_id=${id}&filter%5Bsection%5D=eq%3Ahot&include=adtiles%2Cadconfig%2Ccover%2Cviral&location=desktophome&page=1&sort=-time`)
  .then(response => response.json())
  .then(data =>{

    var filterArr = []
    for(x of data)
    {
        if(x.cover.type == "image")
            filterArr.push(x);
    }

for(var i=0; i<filterArr.length; ) {
   
        d1.innerHTML += `<div class="card"><img src=${filterArr[i++].cover.url} /></div>`
        d2.innerHTML += `<div class="card"><img src=${filterArr[i++].cover.url} /></div>`
        d3.innerHTML += `<div class="card"><img src=${filterArr[i++].cover.url} /></div>`
        d4.innerHTML += `<div class="card"><img src=${filterArr[i++].cover.url} /></div>`
        d5.innerHTML += `<div class="card"><img src=${filterArr[i++].cover.url} /></div>`
        // cont.innerHTML += `<div class="card"><img src=${data[i].cover.url} /></div>`
    
    
  }
  });