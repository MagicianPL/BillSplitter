const inputPrice = document.querySelector("#price");
const inputPeople = document.querySelector("#people");
const inputTip = document.querySelector("#tip");

const button = document.querySelector(".count");
const error = document.querySelector(".error");
const costInfo = document.querySelector(".cost");

const countingBill = () => {
    const price = parseFloat(inputPrice.value);
    const people = parseInt(inputPeople.value);
    const tip = parseFloat(inputTip.value);
    
    const result = (price + (price * tip)) / people;
    fixedResult = result.toFixed(2);
    costInfo.textContent = fixedResult;
    document.querySelector(".cost-info").style.display = "flex";
};

const checkInputs = () => {
    if (inputPrice.value === "" || inputPeople === "" || inputTip.value == 0) {
        error.textContent = "Wypełnij wszystkie pola!";
        document.querySelector(".cost-info").style.display = "none";
    } else {
        error.textContent = "";
        //Tutaj kolejne funkcje
        countingBill();
    };
};

button.addEventListener("click", checkInputs);