function clearData() {
    document.getElementById("result").value = "";
}
 
function displayData(value) {
    document.getElementById("result").value += value;
}
 
function resultData() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}