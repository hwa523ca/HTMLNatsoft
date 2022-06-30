function addOperation(){
    var firstNo = Number(document.getElementById('firstNumber').value)
    var secondNo = Number(document.getElementById('secondNumber').value)
    var result = firstNo + secondNo; 
    console.log(result)
    document.getElementById('res').value = result;
}
function subOperation(){
    var firstNo = Number(document.getElementById('firstNumber').value)
    var secondNo = Number(document.getElementById('secondNumber').value)
    var result = firstNo - secondNo;
    console.log(result)
    document.getElementById('res').value = result;
}
function mulOperation(){
    var firstNo = Number(document.getElementById('firstNumber').value)
    var secondNo = Number(document.getElementById('secondNumber').value)
    var result = firstNo * secondNo;
    console.log(result)
    document.getElementById('res').value = result;
}
function divOperation(){
    var firstNo = Number(document.getElementById('firstNumber').value)
    var secondNo = Number(document.getElementById('secondNumber').value)
    var result = firstNo / secondNo;
    console.log(result)
    document.getElementById('res').value = result;
}