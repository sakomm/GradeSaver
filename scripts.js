function find_Replace() {
    var findVal = document.getElementById("find");
    var replaceVal = document.getElementById("replace");

    var result = findVal + " ==> " + replaceVal + "\n";

    document.getElementById("spanResult").textContent = document.getElementById("spanResult").textContent + result;
}