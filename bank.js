// login button event handler
const loginBtn = document.getElementById("login").addEventListener("click",function(){
    const loginArea = document.getElementById("login-area").style.display = "none";
    const transactionArea = document.getElementById("transaction-area").style.display = "block";
})
// deposite button event handler
    const depositBtn = document.getElementById("addDeposit").addEventListener("click", function(){
        const depositNumber = getInputnumber("depositAmount");

    updateSpanText("currentBalance", depositNumber);
    updateSpanText("currentDeposit", depositNumber);

    
})
    function updateSpanText (id, depositNumber){
        const currentBalance = document.getElementById(id).innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        const totalBalance = depositNumber + currentBalanceNumber;
        document.getElementById(id).innerText = totalBalance;
        
    }
//  withdraw btn event handler
    const withdrawBtn = document.getElementById("addWithdraw").addEventListener("click", function() {
        const withdrawValue = getInputnumber("withdrawAmount");

// display part
        const currentWithdraw = document.getElementById("currentWithdraw").innerText;
        const currentWithdrawNumber = parseFloat(currentWithdraw);
        const totalWithdraw = withdrawValue + currentWithdrawNumber;
        document.getElementById('currentWithdraw').innerText = totalWithdraw;

       const currentBalance = document.getElementById("currentBalance").innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        const totalSavings = currentBalance - withdrawValue;
        document.getElementById("currentBalance").innerText = totalSavings; 

        
    })

    function getInputnumber(id) {
        const withdrawAmount = document.getElementById(id).value;
        const withdrawValue = parseFloat(withdrawAmount);
        document.getElementById(id).value = "";
        return withdrawValue;
    }
    