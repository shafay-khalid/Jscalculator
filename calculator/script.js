document.getElementById("clear").onclick = function (){
    document.getElementById("output").value = ""
}
document.getElementById("number1").onclick =function (){
    let num1 = 1
    document.getElementById("output").value += num1

}
document.getElementById("number2").onclick =function (){
    let num2 = 2
    document.getElementById("output").value += num2
}
document.getElementById("number3").onclick =function (){
    let num3 = 3
    document.getElementById("output").value += num3
}
document.getElementById("number4").onclick =function (){
    let num4 = 4
    document.getElementById("output").value += num4
}
document.getElementById("number5").onclick =function (){
    let num5 = 5
    document.getElementById("output").value += num5
}
document.getElementById("number6").onclick =function (){
    let num6 = 6
    document.getElementById("output").value += num6
}
document.getElementById("number7").onclick =function (){
    let num7 = 7
    document.getElementById("output").value += num7
}
document.getElementById("number8").onclick =function (){
    let num8 = 8
    document.getElementById("output").value += num8
}
document.getElementById("number9").onclick =function (){
    let num9 = 9
    document.getElementById("output").value += num9
}
document.getElementById("number0").onclick =function (){
    let num0 = 0
    document.getElementById("output").value += num0
}
// document.getElementById("number00").onclick =function (){
//     let num00 = 00
//     document.getElementById("output").value += num00
// }
document.getElementById("number+").onclick =function (){
    document.getElementById("output").value += "+"
}
document.getElementById("number-").onclick =function (){
    document.getElementById("output").value += "-"
    // let value2 = document.getElementById("output").value
    // console.log("ans",value2)  
}
document.getElementById("number*").onclick =function (){
    document.getElementById("output").value += "*"
}
document.getElementById("number/").onclick =function (){
    document.getElementById("output").value += "/"
}
document.getElementById("number.").onclick =function (){
    document.getElementById("output").value += "."
}
document.getElementById("del").onclick =function (){
    let del = document.getElementById("output").value
    del = length-1
    document.getElementById("output").value += del
}

document.getElementById("ans").onclick =function (){
    let answer = document.getElementById("output").value
    console.log(answer)
    let answ = eval(answer)
    // console.log(answ,"out")
       
    document.getElementById("output").value =answ 
}
// let numbers = ['0','1','2','3','4','5','6','7','8','9']
// console.log(numbers[5],"number")
// document.getElementById("number9").onclick =function (){
//     // let num9 = 9
//     document.getElementById("output").value += numbers[9]
// }
// document.getElementById("number+").onclick =function (){
//     document.getElementById("output").value += "+"
// }
// document.getElementById("ans").onclick =function (){
//     let answer = document.getElementById("output").value
//     console.log(answer)
//     let answ = eval(answer)
//     // console.log(answ,"out")
       
//     document.getElementById("output").value =answ 
// }
// document.getElementById("del").onclick =function (){
//     // let delet = document.getElementById("output").value
//     // let newvalue = delet.slice(0,-1)
//     let copyOfnumbers = [document.getElementById("output").value]
//     console.log(copyOfnumbers)
//     number=copyOfnumbers.length-1

//     document.getElementById("output").value += number
// }