let userinput = document.querySelector("#dob");
userinput.setAttribute("max", new Date().toISOString().split("T")[0]);
let button = document.querySelector("button");
button.addEventListener("click", calculateAge);

function calculateAge() {
    let dob = new Date(userinput.value);
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    let monthDiff = today.getMonth() - dob.getMonth();
    
    if (today.getDate() < dob.getDate()) {
        monthDiff--;
    }
    if (monthDiff < 0) {
        monthDiff += 12;
        age--;
    }
    let p = document.querySelector("p");
    let resultText = `Your age is ${age} years and ${monthDiff} months.`;
    p.innerText = resultText; // Animation removed, direct assignment
}
