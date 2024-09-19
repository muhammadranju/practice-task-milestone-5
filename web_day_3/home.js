let availableBalance = parseFloat(
  document.getElementById("available-balance").innerText
);
const config = {
  phoneNumber: "01326153447",
  pinNumber: 1234,
};

// add money
function addMoney() {
  document.getElementById("add-money").addEventListener("click", (e) => {
    e.preventDefault();

    const addAmount = document.getElementById("add-amount").value;
    const addMoneyPin = document.getElementById("add-money-pin").value;

    // Clear any previous error messages
    document.getElementById("invalid-add-amount").innerText = "";
    document.getElementById("invalid-money-pin").innerText = "";

    if (!addAmount) {
      document.getElementById("invalid-add-amount").innerText =
        "Amount is required!";
      return;
    }

    if (!addMoneyPin) {
      document.getElementById("invalid-money-pin").innerText =
        "Pin Number is required!";
      return;
    }

    if (parseFloat(addMoneyPin) !== config.pinNumber) {
      return errorMsg.showModal();
    }

    if (isNaN(addAmount) || parseFloat(addAmount) <= 0) {
      document.getElementById("invalid-add-amount").innerText =
        "Please enter a valid amount!";
      return;
    }

    availableBalance += parseFloat(addAmount);
    document.getElementById("available-balance").innerText =
      availableBalance.toFixed(2);

    document.getElementById("add-amount").value = "";
    document.getElementById("add-money-pin").value = "";
    document.getElementById("my_modal_5").close();
  });
}

// cash out
function cashOut() {
  document.getElementById("cash-out").addEventListener("click", (e) => {
    e.preventDefault();
    const cashOutAmount = document.getElementById("cash-out-money").value;
    const cashOutPin = document.getElementById("cash-out-pin").value;

    document.getElementById("invalid-out-amount").innerText = "";
    document.getElementById("invalid-out-pin").innerText = "";

    if (!cashOutAmount) {
      document.getElementById("invalid-out-amount").innerText =
        "Amount is required!";
      return;
    }
    if (isNaN(cashOutAmount) || cashOutAmount <= 0) {
      document.getElementById("invalid-out-amount").innerText =
        "Please enter a valid positive amount!";
      return;
    }

    if (!cashOutPin) {
      document.getElementById("invalid-out-pin").innerText =
        "Pin Number is required!";
      return;
    }
    if (parseFloat(cashOutPin) !== config.pinNumber) {
      return errorMsg.showModal();
    }

    if (availableBalance < cashOutAmount) {
      document.getElementById("invalid-out-amount").innerText =
        "Insufficient balance!";
      return;
    }
    availableBalance -= parseFloat(cashOutAmount);
    document.getElementById("available-balance").innerText =
      availableBalance.toFixed(2);

    document.getElementById("cash-out-money").value = "";
    document.getElementById("cash-out-pin").value = "";

    document.getElementById("my_modal").close();
  });
}
