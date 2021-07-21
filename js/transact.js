function sendMoney() {
    const name = document.getElementById("name").value;
    const amount = parseInt(document.getElementById("amount").value);
    const sendersName = document.getElementById("sendersName").value;
    const findSenderBankAccount = sendersName + "BankBalance";
    const sendersAmount = parseInt(document.getElementById(findSenderBankAccount).innerHTML);
    if (amount > sendersAmount) {
        alert("Sorry! Insufficient Balance!")
    }
    else {
        const findUserBankAccount = name + "BankBalance";

        const finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + amount;
        const myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - amount;
        document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;
        alert("Tansaction Successful!!!!")

        const createPTag = document.createElement("li");
        const textNode = document.createTextNode(`Sent By ${sendersName.toUpperCase()} To ${name.toUpperCase()} => 
        Amount Transferred: Rs. ${amount}. `);

        createPTag.appendChild(textNode);
        document.getElementById("transaction-history-body").appendChild(createPTag);
    }
}