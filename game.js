var a = document.getElementById("start");

let h1= document.getElementById("h")
var m=prompt("enter name")
h1.textContent=m

// 
let h2= document.getElementById("l")
var y=prompt("enter name")
h2.textContent=y




a.addEventListener("click", () => {




    var randomnumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomnumber);
    var randomimage = "./dice" + randomnumber + ".png";
    var dice1 = document.querySelectorAll("img")[0]
    dice1.setAttribute("src", randomimage)


    // 

    var randomnumber2 = Math.floor(Math.random() * 6) + 1;
    console.log(randomnumber2);
    var randomimage2 = "./dice" + randomnumber2 + ".png";
    var dice1 = document.querySelectorAll("img")[1]
    dice1.setAttribute("src", randomimage2)

    // 


    if (randomnumber > randomnumber2) {
        document.querySelector("h1").textContent = y+" wins"
        let counter = 1;
while (counter <= 5) {
  console.log(counter);
  counter++;
}


    } else if (randomnumber2 > randomnumber) {
        document.querySelector("h1").textContent = m+" wins"
    }
    else {
        document.querySelector("h1").textContent = "draw"
        
    }
})
// var r= Math.round(Math.random() * 6) +1;
// console.log(r*r);