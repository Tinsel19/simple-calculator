

document.querySelectorAll("button").forEach( (item) => {
    // var key = item.textContent
    item.addEventListener("click" , function () {
        var key = item.textContent;
        buttonPress(key);
    })
    // console.log(key);

    
    }
);

function buttonPress(key) {
    var calcInput = document.querySelector("#calc-input").innerHTML;

    switch (key) {
        case "1":
            var initial = document.querySelector("#calc-input").innerHTML;
            if (initial === "0" || initial === "Math Error" ) {
                document.querySelector("#calc-input").innerHTML = "1";
            } else {
                document.querySelector("#calc-input").innerHTML = initial +"1";
            }
            
            break;
    
        case "2":
            var initial = document.querySelector("#calc-input").innerHTML;
            if (initial === "0" || initial === "Math Error" ) {
                document.querySelector("#calc-input").innerHTML = "2";
            } else {
                document.querySelector("#calc-input").innerHTML = initial +"2";
            }
            
            break;
    
        case "3":
            var initial = document.querySelector("#calc-input").innerHTML;
            if (initial === "0" || initial === "Math Error" ) {
                document.querySelector("#calc-input").innerHTML = "3";
            } else {
                document.querySelector("#calc-input").innerHTML = initial +"3";
            }
            
            break;
            
        case "4":
            var initial = document.querySelector("#calc-input").innerHTML;
            if (initial === "0" || initial === "Math Error" ) {
                document.querySelector("#calc-input").innerHTML = "4";
            } else {
                document.querySelector("#calc-input").innerHTML = initial +"4";
            }
            
            break;
        case "5":
            var initial = document.querySelector("#calc-input").innerHTML;
            if (initial === "0" || initial === "Math Error" ) {
                document.querySelector("#calc-input").innerHTML = "5";
            } else {
                document.querySelector("#calc-input").innerHTML = initial +"5";
            }
            
            break;
        case "6":
            var initial = document.querySelector("#calc-input").innerHTML;
            if (initial === "0" || initial === "Math Error" ) {
                document.querySelector("#calc-input").innerHTML = "6";
            } else {
                document.querySelector("#calc-input").innerHTML = initial +"6";
            }
            
            break;
        case "7":
            var initial = document.querySelector("#calc-input").innerHTML;
            if (initial === "0" || initial === "Math Error" ) {
                document.querySelector("#calc-input").innerHTML = "7";
            } else {
                document.querySelector("#calc-input").innerHTML = initial +"7";
            }
            
            break;
        case "8":
            var initial = document.querySelector("#calc-input").innerHTML;
            if (initial === "0" || initial === "Math Error" ) {
                document.querySelector("#calc-input").innerHTML = "8";
            } else {
                document.querySelector("#calc-input").innerHTML = initial +"8";
            }
            
            break;
        case "9":
            var initial = document.querySelector("#calc-input").innerHTML;
            if (initial === "0" || initial === "Math Error" ) {
                document.querySelector("#calc-input").innerHTML = "9";
            } else {
                document.querySelector("#calc-input").innerHTML = initial +"9";
            }
            
            break;
        case "0":
            var initial = document.querySelector("#calc-input").innerHTML;
            if (initial === "0" || initial === "Math Error" ) {
                document.querySelector("#calc-input").innerHTML = "0";
            } else {
                document.querySelector("#calc-input").innerHTML = initial +"0";
            }
            
            break;
        case ".":
            var initial = document.querySelector("#calc-input").innerHTML;
            var length = initial.length -1
            if (initial === "0" || initial === "Math Error" || initial === "." || initial[length] === ".") {
                document.querySelector("#calc-input").innerHTML = initial;
            } else {
                document.querySelector("#calc-input").innerHTML = initial +".";
            }
            break;

        case "+":
            var initial = document.querySelector("#calc-input").innerHTML;
            var length = initial.length -1
            if (initial === "0" || initial === "Math Error" || initial === "." || initial[length] === "." || initial[length] === "+" || initial[length] === "-" || initial[length] === "*" || initial[length] === "/"   ) {
                document.querySelector("#calc-input").innerHTML = initial;
            } else {
                document.querySelector("#calc-input").innerHTML = initial +"+";
            }
            
            break;
        case "-":
            var initial = document.querySelector("#calc-input").innerHTML;
            var length = initial.length -1
            if (initial === "0" || initial === "Math Error" || initial === "." || initial[length] === "." || initial[length] === "+" || initial[length] === "-" || initial[length] === "*" || initial[length] === "/"   ){
                document.querySelector("#calc-input").innerHTML = initial;
            } else {
                document.querySelector("#calc-input").innerHTML = initial +"-";
            }
            break;
        case "x":
            var initial = document.querySelector("#calc-input").innerHTML;
            var length = initial.length -1
            if (initial === "0" || initial === "Math Error" || initial === "." || initial[length] === "." || initial[length] === "+" || initial[length] === "-" || initial[length] === "*" || initial[length] === "/"   ){
                document.querySelector("#calc-input").innerHTML = initial;
            } else {
                document.querySelector("#calc-input").innerHTML = initial +"*";
            }
            break;
        case "/":
            var initial = document.querySelector("#calc-input").innerHTML;
            var length = initial.length -1
            if (initial === "0" || initial === "Math Error" || initial === "." || initial[length] === "." || initial[length] === "+" || initial[length] === "-" || initial[length] === "*" || initial[length] === "/"   ){
                document.querySelector("#calc-input").innerHTML = initial;
            } else {
                document.querySelector("#calc-input").innerHTML = initial +"/";
            }
            break;

        case "=":
            var initial = document.querySelector("#calc-input").innerHTML;
            
            document.querySelector("#calc-input").innerHTML = eval(initial);
            break;

        case "RESET":
            var initial = document.querySelector("#reset").innerHTML;
            
            document.querySelector("#calc-input").innerHTML = "0";
            break;
        case "DEL":
            var initial = document.querySelector("#calc-input").innerHTML;
            
            document.querySelector("#calc-input").innerHTML = initial.slice(0, -1);
            break;
            
    
        default:
            break;
    }
}


document.querySelector("#theme").addEventListener("input", function () {
    var key = document.querySelector("#theme").value; 
    themeChange(key)
})

function themeChange(key) {

    switch (key) {
        case "2":
            document.querySelector("#calc-input").style.backgroundColor = "white";
            document.querySelector("#calc-input").style.color = "black";
            document.querySelector("#title h1").style.color = "black";
            document.querySelector("#title p").style.color = "black";
            document.querySelector("#title label").style.color = "black";
            document.querySelectorAll(".calc-btn-1 button").forEach((item) => {
                item.style.color = "black";
                item.style.backgroundColor = "white";
                item.style.borderBottom = "5px solid grey";

                item.classList.add("pressed");

                setTimeout(function () {
                    activeButton.classList.remove("pressed");
                }, 100);
                
                
            })  

            document.querySelector("#reset").classList.add("pressed");
            document.querySelector("#equals").classList.add("pressed");


            

                setTimeout(function () {
                    activeButton.classList.remove("pressed");
                }, 100);
                
                


            document.querySelector("#operator").style.color = "hsl(0, 0%, 100%)";
            document.querySelector("#operator").style.backgroundColor = "hsl(185, 42%, 37%)";
            document.querySelector("#operator").style.borderBottom = "5px solid hsl(185, 58%, 25%)";

            document.querySelector("#reset").style.color = "hsl(0, 0%, 100%)";
            document.querySelector("#reset").style.backgroundColor = "hsl(185, 42%, 37%)";
            document.querySelector("#reset").style.borderBottom = "5px solid hsl(185, 58%, 25%)";

            document.querySelector("#equals").style.color = "hsl(0, 0%, 100%)";
            document.querySelector("#equals").style.backgroundColor = "hsl(25, 98%, 40%)";
            document.querySelector("#equals").style.borderBottom = "5px solid hsl(25, 99%, 27%)";


            document.querySelector("body").style.backgroundColor = "hsl(0, 0%, 93%)";
            document.querySelector("#theme").style.backgroundColor = "hsl(0, 0%, 90%)";
            document.querySelector("#calc-buttons").style.backgroundColor = "hsl(0, 0%, 90%)";
            break;
    
        case "3":
            document.querySelector("#calc-input").style.backgroundColor = "hsl(224, 36%, 15%)";
            document.querySelector("#calc-input").style.color = "white";
            document.querySelector("#title h1").style.color = "white";
            document.querySelector("#title p").style.color = "white";
            document.querySelector("#title label").style.color = "white";
            document.querySelector("#calc-input").style.color = "white";
            document.querySelector("#nav").style.color = "white";
            document.querySelector("#title").style.color = "black";
            document.querySelectorAll(".calc-btn-1 button").forEach((item) => {
                item.style.color = "black";
                item.style.backgroundColor = "white";
                item.style.borderBottom = "5px solid grey";

                item.classList.add("pressed");

                setTimeout(function () {
                    activeButton.classList.remove("pressed");
                }, 100);
                
                
            })  

            document.querySelector("#reset").classList.add("pressed");
            document.querySelector("#equals").classList.add("pressed");


            

                setTimeout(function () {
                    activeButton.classList.remove("pressed");
                }, 100);
                
                


            document.querySelector("#operator").style.color = "hsl(0, 0%, 100%)";
            document.querySelector("#operator").style.backgroundColor = "hsl(225, 21%, 49%)";
            document.querySelector("#operator").style.borderBottom = "5px solid hsl(224, 28%, 35%)";

            document.querySelector("#reset").style.color = "hsl(0, 0%, 100%)";
            document.querySelector("#reset").style.backgroundColor = "hsl(225, 21%, 49%)";
            document.querySelector("#reset").style.borderBottom = "5px solid hhsl(224, 28%, 35%)";

            document.querySelector("#equals").style.color = "hsl(0, 0%, 100%)";
            document.querySelector("#equals").style.backgroundColor = "orange";
            document.querySelector("#equals").style.borderBottom = "5px solid  rgb(210, 138, 5)";


            document.querySelector("body").style.backgroundColor = "hsl(222, 26%, 31%)";
            document.querySelector("#theme").style.backgroundColor = "hsl(223, 31%, 20%)";
            document.querySelector("#calc-buttons").style.backgroundColor = "hsl(223, 31%, 20%)";
            break;

        case "1":
            document.querySelector("#calc-input").style.backgroundColor = "hsl(268, 71%, 12%)";
            document.querySelector("#calc-input").style.color = "hsl(52, 100%, 62%)";
            document.querySelector("#title h1").style.color = "hsl(52, 100%, 62%)";
            document.querySelector("#title p").style.color = "hsl(52, 100%, 62%)";
            document.querySelector("#title label").style.color = "hsl(52, 100%, 62%)";
            document.querySelector("#calc-input").style.color = "hsl(52, 100%, 62%)";
            document.querySelector("#nav").style.color = "hsl(52, 100%, 62%)";
            // document.querySelector("#title").style.color = "black";
            document.querySelectorAll(".calc-btn-1 button").forEach((item) => {
                item.style.color = "hsl(52, 100%, 62%)";
                item.style.backgroundColor = "hsl(268, 47%, 21%)";
                item.style.borderBottom = "5px solid hsl(285, 91%, 52%)";

                item.classList.add("pressed");

                setTimeout(function () {
                    activeButton.classList.remove("pressed");
                }, 100);
                
                
            })  

            document.querySelector("#reset").classList.add("pressed");
            document.querySelector("#equals").classList.add("pressed");


            

                setTimeout(function () {
                    activeButton.classList.remove("pressed");
                }, 100);
                
                


            document.querySelector("#operator").style.color = "hsl(52, 100%, 62%)";
            document.querySelector("#operator").style.backgroundColor = "hsl(281, 89%, 26%)";
            document.querySelector("#operator").style.borderBottom = "5px solid hsl(281, 81%, 44%)";

            document.querySelector("#reset").style.color = "hsl(52, 100%, 62%)";
            document.querySelector("#reset").style.backgroundColor = "hsl(281, 89%, 26%)";
            document.querySelector("#reset").style.borderBottom = "5px solid hsl(281, 81%, 44%)";

            document.querySelector("#equals").style.color = "hsl(0, 0%, 100%)";
            document.querySelector("#equals").style.backgroundColor = "hsl(176, 100%, 44%)";
            document.querySelector("#equals").style.borderBottom = "5px solid  hsl(177, 92%, 70%)";


            document.querySelector("body").style.backgroundColor = "hsl(268, 75%, 9%)";
            document.querySelector("#theme").style.backgroundColor = "hsl(268, 71%, 12%)";
            document.querySelector("#calc-buttons").style.backgroundColor = "hsl(268, 71%, 12%)";
            break;
    
        default:
            break;
    }
}