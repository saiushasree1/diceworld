function getrandomINT() {
    return Math.floor(Math.random() * 6);
}
let a1 = 0;
let a2 = 0;
let a3 = 0;
function aler(){
    document.querySelectorAll("p")[0].innerHTML="No.of times dice rolled :"+(a1+a2+a3)+" time(s)";
    document.querySelectorAll("p")[1].innerHTML="you won : "+a2+" time(s)";
    document.querySelectorAll("p")[2].innerHTML="computer won : "+a1+" time(s)";
    document.querySelectorAll("p")[3].innerHTML="tie : "+a3+" time(s)";
}

function myfunc() {
    let a = getrandomINT();
    let c = getrandomINT();
    let b = ["dice1.jpeg", "dice2.jpeg", "dice3.jpeg", "dice4.jpeg", "dice5.jpeg", "dice6.jpeg"];
    document.querySelector(".first").setAttribute("src", `${b[c]}`);
    document.querySelector(".second").setAttribute("src", `${b[a]}`);
    if (a > c) {
        document.querySelector("h1").innerHTML = "Computer Won";
        a1++;
    }
    else if (a < c) {
        document.querySelector("h1").innerHTML = "You Won";
        a2++;
    }
    else {
        document.querySelector("h1").innerHTML = "Tie";
        a3++;
    }

    setTimeout(aler,100);
}

