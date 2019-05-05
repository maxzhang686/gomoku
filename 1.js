



var html =""
for (let i = 0; i < 64; i++) {
   html+='<button class="item" id="button '+i+'">'+i+'</button>';
     
}




document.querySelector("#board").innerHTML = html