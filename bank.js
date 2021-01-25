// login button event handler
const loginBtn = document.getElementById("login").addEventListener("click",function(){
    const loginArea = document.getElementById("login-area").style.display = "none";
    const transactionArea = document.getElementById("transaction-area").style.display = "block";
})
// deposite button event handler
const depositBtn = document.getElementById("addDeposit").addEventListener("click", function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);
    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const total = depositNumber + currentDepositNumber;


    document.getElementById("currentDeposit").innerText = total;


    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById("currentBalance").innerText = totalBalance;
    document.getElementById("depositAmount").value = "";
})