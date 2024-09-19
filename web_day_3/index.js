const config = {
  phoneNumber: "01326153447",
  pinNumber: 1234,
};
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    if (!phoneNumber || !pinNumber) {
      document.getElementById("invalid-phone").innerText =
        "Phone Number is required!";
      document.getElementById("invalid-pin").innerText =
        "Pin Number is required!";
      return;
    }

    if (
      phoneNumber !== config.phoneNumber ||
      parseFloat(pinNumber) !== config.pinNumber
    ) {
      return my_modal_5.showModal();
      //   return alert("Invalid Credential Phone number or Pin number");
    }
    window.location.href = "./home.html";
  });
