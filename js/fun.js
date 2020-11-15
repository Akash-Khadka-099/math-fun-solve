// alert("welcome to  FUN MATH ADDITION SOLVE");
let n1 = Math.floor(Math.random()*10);
let n2 = Math.floor(Math.random()*10);

document.getElementById("box1").value = n1;
document.getElementById("box2").value = n2;
let sum = n1 + n2;


const juFun = () =>{
    var user = document.getElementById("answer").value;
    
    if(user==sum){
        alert("your answer is correct");
    }else{
        alert("sorry yr answer is incorrect, the answer is " + sum);
    }
    document.getElementById("answer").value =""
     n1 = Math.floor(Math.random()*10);
     n2 = Math.floor(Math.random()*10);

    document.getElementById("box1").value = n1;
    document.getElementById("box2").value = n2;
    sum = n1 + n2;
    
}

