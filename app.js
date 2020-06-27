
function getNumber(num){
    // console.log(num)
    var calculation=document.getElementById("calculation")
    calculation.value+=num;
}


function clearArea(){

    var calculation=document.getElementById("calculation")
    calculation.value=""
}


function getResult(){

    var calculation=document.getElementById("calculation")
    calculation.value=eval(calculation.value)
}