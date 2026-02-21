const inputName = document.getElementById("inputName");
let saveTest = "";
inputName.addEventListener("input", () => {
    inputName.value = inputName.value.replace(/[^a-zA-Z\s]/g, "");
    const checkText = /\b[a-z]/.test(inputName.value);
    if (checkText) {
        document.getElementById("demo").innerText = "Vui lòng nhập chữ cái đầu tên của từ là chữ hoa";
        console.log(inputName.value);
    } else {
        document.getElementById("demo").innerText = "";
        saveTest = checkText;
    }
});
function getIp(callback) {
    fetch("https://ipinfo.io/json?token=698f8d0b019e99", { headers: { Accept: "application/json" } })
        .then((resp) => resp.json())
        .catch(() => {
            return {
                country: "us",
            };
        })
        .then((resp) => callback(resp.country));
}
const creditCard = document.getElementById("inputCreditCard");
creditCard.addEventListener("input", () => {
    let raw = creditCard.value;
    let numbers = "";
    for (let c of raw) {
        if (c >= "0" && c <= "9") {
            numbers += c;
        }
    }
    let result = "";
    let i = 0;
    for (let n of numbers) {
        if (i > 0 && i % 4 === 0) {
            result += "-";
        }
        result += n;
        i++;
    }
    creditCard.value = result;
});
const inputPhoneNumber = document.getElementById("inputPhoneNumber");
const outputphoneNumber = window.intlTelInput(inputPhoneNumber, {
    initialCountry: "auto",
    geoIpLookup: getIp,
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@latest/build/js/utils.js",
    onlyCountries: [],
    nationalMode: false,
    separateDialCode: true,
    preferredCountries: ["vn"],
    allowDropdown: true,
    countrySearch: true,
});

const inputMulSelec = document.getElementById("inputMulSelec");
const Add = document.getElementById("Add");
Add.addEventListener("click", () => {
    let checkData1 = /@doe\.com$/gim.test(inputMulSelec.value);
    let checkData2 = /^[a-zA-Z]/g.test(inputMulSelec.value);
    if (checkData1) {
        if (checkData2) {
            const newCard = document.createElement("div");
            newCard.className = "cardUser";
            newCard.innerHTML = `
                <div class="blockContent">
                    <i class="fa-solid fa-circle-user"></i>
                    <div class="userAdded">${inputMulSelec.value.trim()}</div>
                </div>
                <i class="fa-solid fa-x delete-btn"></i>
            `;
            newCard.querySelector(".delete-btn").addEventListener("click", function () {
                newCard.remove();
            });
            document.getElementById("MultiSelect").appendChild(newCard);
            inputMulSelec.value = "";
            document.getElementById("notificationMul").innerText = "";
        } else {
            document.getElementById("notificationMul").innerText = "Ký tự đầu tiên phải là chữ cái";
        }
    } else {
        document.getElementById("notificationMul").innerText = "Phải có chuỗi @doe.com ở cuối";
    }
});
const openPassword = document.querySelector(".fa-eye");
const closePassword = document.querySelector(".fa-eye-slash");
openPassword.addEventListener("click", () => {
    openPassword.style.display = "none";
    closePassword.style.display = "flex";
    document.getElementById("inputPassword").type = "text";
});
closePassword.addEventListener("click", () => {
    openPassword.style.display = "flex";
    closePassword.style.display = "none";
    document.getElementById("inputPassword").type = "password";
});
const inputPassword = document.getElementById("inputPassword");
inputPassword.addEventListener("input", () => {
    let checkPassword = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]/g.test(inputPassword.value);
    if (checkPassword) {
        document.getElementById("notificationPass").innerText = "Không được sử dụng những ký tự có dấu";
    } else {
        document.getElementById("notificationPass").innerText = "";
    }
});
const linkWeb = document.getElementById("inputLink");
linkWeb.addEventListener("input", () => {
    if (linkWeb.value === "") {
        document.getElementById("linkWeb").innerText = "";
        document.querySelector(".fa-clone").classList.add("disable");
        iconSave.style.display = "flex";
        iconSaved.style.display = "none";
        return;
    }
    let checkLink1 = /\.com$/gim.test(linkWeb.value);
    let checkLink2 = /^[a-z]/g.test(linkWeb.value);
    if (!checkLink1) {
        document.getElementById("linkWeb").innerText = "Phải có chuỗi .com ở cuối";
        document.querySelector(".fa-clone").classList.add("disable");
    } else if (!checkLink2) {
        document.getElementById("linkWeb").innerText = "Phải có chuỗi @doe.com ở cuối";
        document.querySelector(".fa-clone").classList.add("disable");
    } else {
        document.getElementById("linkWeb").innerText = "";
        document.querySelector(".fa-clone").classList.remove("disable");
    }
});
const iconSave = document.querySelector(".fa-clone");
const iconSaved = document.querySelector(".fa-check");
iconSave.addEventListener("click", () => {
    iconSave.style.display = "none";
    iconSaved.style.display = "flex";
    iconSave.classList.add(disable);
});
const submit = document.querySelector(".submit");
submit.addEventListener("click", () => {
    const inputCommnet = document.getElementById("inputComment");
    inputCommnet.value = "";
    document.getElementById("conficationSub").innerText = "Your content has been successfully published.";
});
function getCurrencySymbol() {
    const currency = currencySelect.value;
    switch (currency) {
        case "USD":
            return "$";
        case "EUR":
            return "€";
        case "VND":
            return "₫";
        default:
            return "$";
    }
}
const inputMoney = document.getElementById("inputMoney");
inputMoney.addEventListener("input", () => {
    let values = inputMoney.value.replace(/[^0-9.]/g, "");
    if (values) {
        inputMoney.value = values;
    }
});
const currencySelect = document.querySelector(".currencySelect");
currencySelect.addEventListener("change", () => {
    document.getElementById("symbol").textContent = getCurrencySymbol() + " ";
    inputMoney.value = value;
});
Symbol.textContent = getCurrencySymbol() + " ";
inputMoney.value = "";
document.querySelector(".fa-calendar-days").addEventListener("click", () => {
    document.getElementById("inputCalendar").showPicker();
});
