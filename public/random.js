const cardOne = document.getElementById("card-one");
const amountInput = document.getElementById("amount");
const descriptionInput = document.getElementById("description");
const incomeCheckbox = document.getElementById("income");
const expenseCheckbox = document.getElementById("expenses");
const submitBtn = document.getElementById("submit");
const totalIncome = document.getElementById("totalincome");
const totalExpense = document.getElementById("totalexpense");
const currentbalance = document.getElementById("currentbalance");
const clearAll = document.getElementById("clearall");
const alert = document.getElementById("alert");
const cardTwo = document.getElementById("card-two");
const result = document.getElementById("result");
const searchInput = document.getElementById("search");
const notransaction = document.getElementById("no-transaction-found");
const barChartCanvas = document.getElementById('barChart').getContext('2d');
const toggleBtn = document.getElementById("toggle");
const downloadPDF = document.getElementById("downloadpdf");
const targetHR = document.getElementById("hr-id");
const style = document.createElement("style");
document.head.appendChild(style);

let storeBudget = JSON.parse(localStorage.getItem("storebudget")) || [];
let indexContainer = null;

let storeToggle = JSON.parse(localStorage.getItem("storetoggle")) || [];

let monthlyIncome = new Array(12).fill(0);
let monthlyExpense = new Array(12).fill(0);

const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
        { 
            label: 'Income', 
            data: monthlyIncome, 
            backgroundColor: 'rgba(0, 255, 255, 1)' 
        },
        { 
            label: 'Expense', 
            data: monthlyExpense, 
            backgroundColor: 'rgba(255, 0, 55, 1)' 
        }
    ]
};

const barConfig = {
    type: 'bar',
    data: barData,
    options: {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    color: 'black'
                },
                grid: {
                    color: 'rgba(0,0,0,0.1)',
                }
            }, 
            y: { 
                beginAtZero: true,
                ticks: {
                    color: 'black'
                },
                grid: {
                    color: 'rgba(0,0,0,0.1)',
                }
            } 
        }
    }
};

const barChart = new Chart(barChartCanvas, barConfig);

toggleBtn.addEventListener("click", () => {
    if (toggleBtn.textContent === "Dark Mode") {
        toggleBtn.textContent = "Light Mode";
        toggleBtn.style.border = "1px solid #464646ff";
        cardOne.style.backgroundColor = "black";
        cardOne.style.border = "2px solid #464646ff";
        amountInput.innerHTML = `#search::placeholder {
                                color: #B0B0B0;
                                opacity: 1;
                            }`;
        amountInput.style.backgroundColor = "#2A2A2A";
        amountInput.style.color = "white";
        descriptionInput.innerHTML = `#search::placeholder {
                                color: #B0B0B0;
                                opacity: 1;
                            }`;
        descriptionInput.style.backgroundColor = "#2A2A2A";
        descriptionInput.style.color = "white";
        submitBtn.style.backgroundColor = "black";
        submitBtn.style.border = "1px solid #464646ff";
        clearAll.style.border = "1px solid #464646ff";
        cardTwo.style.backgroundColor = "black";
        cardTwo.style.border = "2px solid #464646ff";
        downloadPDF.style.border = "1px solid #464646ff";
        searchInput.style.backgroundColor = "#2A2A2A";
        searchInput.style.color = "white";
        targetHR.style.backgroundColor = "#464646ff";
        barChart.options.scales.x.ticks.color = "white";
        barChart.options.scales.y.ticks.color = "white";
        barChart.options.scales.x.grid.color = "#444";
        barChart.options.scales.y.grid.color = "#444";
        barChart.options.plugins.legend.labels.color = "white";
        barChart.update();
        document.body.style.color = "white";
        document.body.style.backgroundColor = "#121212";
        let theme = {
            backgroundColor: "black",
            textColor: "white"
        }
        storeToggle = theme;
        localStorage.setItem("storetoggle", JSON.stringify(storeToggle));
    } 
    else {
        toggleBtn.textContent = "Dark Mode";
        toggleBtn.style.border = "1px solid black";
        cardOne.style.backgroundColor = "white";
        cardOne.style.border = "2px solid white";
        amountInput.style.backgroundColor = "white";
        amountInput.style.color = "black";
        descriptionInput.style.backgroundColor = "white";
        descriptionInput.style.color = "black";
        submitBtn.style.backgroundColor = "#1976d2";
        submitBtn.style.border = "1px solid #1976d2";
        submitBtn.style.transition = "background-color 0.5s ease, border 0.5s ease";
        style.innerHTML = `.submit:hover {
                                background-color: #0080ff;
                                border: 1px solid #0080ff;
                            }`;
        cardTwo.style.backgroundColor = "white";
        cardTwo.style.border = "2px solid white";
        downloadPDF.style.border = "1px solid black";
        searchInput.style.backgroundColor = "white";
        searchInput.style.color = "black";
        targetHR.style.backgroundColor = "rgba(0,0,0,0.12)";
        barChart.options.scales.x.ticks.color = "black";
        barChart.options.scales.y.ticks.color = "black";
        barChart.options.scales.x.grid.color = "rgba(0,0,0,0.1)";
        barChart.options.scales.y.grid.color = "rgba(0,0,0,0.1)";
        barChart.options.plugins.legend.labels.color = "black";
        barChart.update();
        document.body.style.color = "black";
        document.body.style.backgroundColor = "rgba(128, 128, 128, 0.186)";
        let theme = {
            backgroundColor: "white",
            textColor: "black"
        }
        storeToggle = theme;
        localStorage.setItem("storetoggle", JSON.stringify(storeToggle));
    }
});

window.onload = () => {
    if (storeToggle.backgroundColor === "black" && storeToggle.textColor === "white") {
        toggleBtn.style.border = "1px solid #464646ff";
        cardOne.style.backgroundColor = "black";
        cardOne.style.border = "2px solid #464646ff";
        amountInput.innerHTML = `#search::placeholder {
                                color: #B0B0B0;
                                opacity: 1;
                            }`;
        amountInput.style.backgroundColor = "#2A2A2A";
        amountInput.style.color = "white";
        descriptionInput.innerHTML = `#search::placeholder {
                                color: #B0B0B0;
                                opacity: 1;
                            }`;
        descriptionInput.style.backgroundColor = "#2A2A2A";
        descriptionInput.style.color = "white";
        submitBtn.style.backgroundColor = "black";
        submitBtn.style.border = "1px solid #464646ff";
        clearAll.style.border = "1px solid #464646ff";
        cardTwo.style.backgroundColor = "black";
        cardTwo.style.border = "2px solid #464646ff";
        downloadPDF.style.border = "1px solid #464646ff";
        searchInput.style.backgroundColor = "#2A2A2A";
        searchInput.style.color = "white";
        targetHR.style.backgroundColor = "#464646ff";
        barChart.options.scales.x.ticks.color = "white";
        barChart.options.scales.y.ticks.color = "white";
        barChart.options.scales.x.grid.color = "#444";
        barChart.options.scales.y.grid.color = "#444";
        barChart.options.plugins.legend.labels.color = "white";
        barChart.update();
        document.body.style.color = "white";
        document.body.style.backgroundColor = "#121212";
        toggleBtn.textContent = "Light Mode";
    } 
    else {
        toggleBtn.style.border = "1px solid black";
        cardOne.style.backgroundColor = "white";
        cardOne.style.border = "2px solid white";
        amountInput.style.backgroundColor = "white";
        amountInput.style.color = "black";
        descriptionInput.style.backgroundColor = "white";
        descriptionInput.style.color = "black";
        submitBtn.style.backgroundColor = "#1976d2";
        submitBtn.style.border = "1px solid #1976d2";
        submitBtn.style.transition = "background-color 0.5s ease, border 0.5s ease";
        style.innerHTML = `.submit:hover {
                                background-color: #0080ff;
                                border: 1px solid #0080ff;
                            }`;
        cardTwo.style.backgroundColor = "white";
        cardTwo.style.border = "2px solid white";
        downloadPDF.style.border = "1px solid black";
        searchInput.style.backgroundColor = "white";
        targetHR.style.backgroundColor = "rgba(0,0,0,0.12)";
        searchInput.style.color = "white";
        barChart.options.scales.x.ticks.color = "black";
        barChart.options.scales.y.ticks.color = "black";
        barChart.options.scales.x.grid.color = "rgba(0,0,0,0.1)";
        barChart.options.scales.y.grid.color = "rgba(0,0,0,0.1)";
        barChart.options.plugins.legend.labels.color = "black";
        barChart.update();
        document.body.style.color = "black";
        document.body.style.backgroundColor = "rgba(128, 128, 128, 0.186)";
        toggleBtn.textContent = "Dark Mode";
    }
};

function showBudget(list = storeBudget) {
    result.textContent = "";

    let income = 0;
    let expense = 0;
    let balance = 0;

    monthlyIncome = new Array(12).fill(0);
    monthlyExpense = new Array(12).fill(0);

    list.forEach((budget, index) => {
        const wholeDiv = document.createElement("div");
        wholeDiv.style.borderRadius = "10px";
        wholeDiv.style.border = "1px solid #464646ff";
        wholeDiv.style.paddingLeft = "2rem";
        wholeDiv.style.paddingBottom = "1.3rem";
        wholeDiv.style.marginTop = "1rem";
        result.appendChild(wholeDiv);

        const amountContainer = document.createElement("p");
        amountContainer.textContent = `Amount: ₹${budget.amount}`;
        amountContainer.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        amountContainer.style.fontWeight = "600";
        wholeDiv.appendChild(amountContainer);

        const descriptionContainer = document.createElement("p");
        descriptionContainer.textContent = `Description: ${budget.description}`;
        descriptionContainer.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        descriptionContainer.style.fontWeight = "600";
        wholeDiv.appendChild(descriptionContainer);

        const dateTime = document.createElement("p");
        dateTime.textContent = `On ${budget.date} at ${budget.time}`;
        dateTime.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        dateTime.style.fontWeight = "600";
        wholeDiv.appendChild(dateTime);

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.style.paddingTop = "0.3rem";
        editBtn.style.paddingBottom = "0.3rem";
        editBtn.style.paddingLeft = "2rem";
        editBtn.style.paddingRight = "2rem";
        editBtn.style.backgroundColor = "white";
        editBtn.style.border = "1px solid black";
        editBtn.style.borderRadius = "5px";
        editBtn.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        editBtn.style.fontWeight = "600";
        editBtn.style.fontSize = "15px";
        editBtn.addEventListener("click", () => {
            amountInput.value = budget.amount;
            descriptionInput.value = budget.description;
            incomeCheckbox.checked = budget.type === "income";
            expenseCheckbox.checked = budget.type === "expense";
            indexContainer = index;
        });
        wholeDiv.appendChild(editBtn);

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.style.marginLeft = "1rem";
        delBtn.style.paddingTop = "0.3rem";
        delBtn.style.paddingBottom = "0.3rem";
        delBtn.style.paddingLeft = "2rem";
        delBtn.style.paddingRight = "2rem";
        delBtn.style.backgroundColor = "white";
        delBtn.style.border = "1px solid black";
        delBtn.style.borderRadius = "5px";
        delBtn.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        delBtn.style.fontWeight = "600";
        delBtn.style.fontSize = "15px";
        delBtn.addEventListener("click", () => {
            storeBudget.splice(index, 1);
            localStorage.setItem("storebudget", JSON.stringify(storeBudget));
            showBudget();
        });
        wholeDiv.appendChild(delBtn);

        const amountNum = Number(budget.amount);
        const monthIndex = new Date(budget.isoDate).getMonth();

        if (budget.type === "income") {
            income += amountNum;
            monthlyIncome[monthIndex] += amountNum;
        } 
        else {
            expense += amountNum;
            monthlyExpense[monthIndex] += amountNum;
        }

        balance = income - expense;
    });

    let now = new Date();
    let currentMonth = now.getMonth();
    let currentIncome = 0;
    let currentExpense = 0;

    storeBudget.forEach(item => {
        const itemMonth = new Date(item.isoDate).getMonth();
        if (itemMonth === currentMonth) {
        if (item.type === "income") {
            currentIncome += Number(item.amount);
        } 
        else {
            currentExpense += Number(item.amount);
        }
    }
    });

    if (balance < 0) {
        balance = 0;
    }

    totalIncome.innerHTML = `Total Income:&nbsp;&nbsp;&nbsp; ₹${currentIncome}`;

    totalExpense.innerHTML = `Total Expenses:&nbsp;&nbsp;&nbsp; ₹${currentExpense}`;

    currentbalance.innerHTML = `Balance:&nbsp;&nbsp;&nbsp; ₹${balance}`;

    clearAll.addEventListener("click", () => {
        storeBudget = [];
        localStorage.removeItem("storebudget");
        showBudget();
    });

    barData.datasets[0].data = monthlyIncome;
    barData.datasets[1].data = monthlyExpense;
    barChart.update();

    if (Number(balance) < 500) {
        alert.textContent = "Your balance is less then ₹500!";
    }

    let ongoingMonth = now.toLocaleDateString("en-GB", { day: "2-digit", month: "short"});

    if (ongoingMonth === "31 Dec") {
        storeBudget = [];
        localStorage.removeItem("storebudget");
        showBudget();
    }

    if(storeBudget.length === 0){
        let yetnotransaction = document.createElement("p");
        result.appendChild(yetnotransaction);
        yetnotransaction.textContent = "No transactions is added yet!";
        yetnotransaction.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        yetnotransaction.style.fontSize = "18px";
        yetnotransaction.style.fontWeight = "600";
        yetnotransaction.style.color = "red";
    }
    else{
        showBudget();
    }
}

submitBtn.addEventListener("click", () => {
    const amount = amountInput.value.trim();
    const description = descriptionInput.value.trim();

    if (!amount || Number(amount) <= 0) {
        alert("Enter a valid positive amount!");
        return;
    }

    if (!incomeCheckbox.checked && !expenseCheckbox.checked) {
        alert("Please select income or expense!");
        return;
    }

    let now = new Date();
    const formattedDate = now.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    const formattedTime = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    const type = incomeCheckbox.checked ? "income" : "expense";

    const details = {
        amount,
        description,
        type,
        date: formattedDate,
        time: formattedTime,
        isoDate: now.toISOString() 
    }

    if (indexContainer !== null) {
        storeBudget[indexContainer] = details;
        indexContainer = null;
    } 
    else {
        storeBudget.push(details);
    }

    localStorage.setItem("storebudget", JSON.stringify(storeBudget));
    showBudget();

    amountInput.value = "";
    descriptionInput.value = "";
    incomeCheckbox.checked = false;
    expenseCheckbox.checked = false;
});

let lastChecked = null;
document.querySelectorAll("input[type='radio'][name='type']").forEach(radio => {
    radio.addEventListener("click", function() {
        if (lastChecked === this) {
            this.checked = false;
            lastChecked = null;
        } 
        else {
            lastChecked = this;
        }
    });
});

searchInput.addEventListener("input", () => {
    const search = searchInput.value.trim().toLowerCase();
    const filtered = storeBudget.filter(item => item.description.toLowerCase().includes(search));
    if (filtered.length === 0) {
        notransaction.textContent = "No transaction found!";
        notransaction.style.display = "block";
        result.style.display = "none";
    }
    else if(filtered){
        notransaction.style.display = "none";
        result.style.display = "block";
        showBudget(filtered);
    }
    else if(search === ""){
        notransaction.style.display = "none";
        result.style.display = "block";
        showBudget();
    }
    else{}
});

downloadPDF.addEventListener("click", () => {
    const { jsPDF } = window.jspdf;  
    const doc = new jsPDF();

    const selectElement = document.getElementById("selectmonth");
    const monthIndex = Number(selectElement.value);
    const monthName = selectElement.options[selectElement.selectedIndex].text;

    let monthIncome = 0;
    let monthExpense = 0;

    // Filter items of selected month
    const monthData = storeBudget.filter(item => {
        return new Date(item.isoDate).getMonth() === monthIndex;
    });

    // Calculate totals
    monthData.forEach(item => {
        if (item.type === "income") {
            monthIncome += Number(item.amount);
        } else {
            monthExpense += Number(item.amount);
        }
    });

    // PDF Title
    doc.setFontSize(16);
    doc.text(`Monthly Report - ${monthName}`, 20, 20);

    // Add transactions
    let y = 40;
    doc.setFontSize(12);
    monthData.forEach(item => {
        const type = item.type === "income" ? "+" : "-";
        doc.text(`${item.date} | ${item.description} | ${type}${item.amount}`, 20, y);
        y += 10;

        if (y > 270) {  
            doc.addPage();
            y = 20;
        }
    });

    // Totals
    const balance = monthIncome - monthExpense;
    y += 10;
    doc.setFontSize(14);
    doc.text(`Total Income: ${monthIncome}`, 20, y); y += 10;
    doc.text(`Total Expenses: ${monthExpense}`, 20, y); y += 10;
    doc.text(`Balance: ${balance}`, 20, y);

    // Add chart image
    y += 20;
    const chartImg = barChart.canvas.toDataURL("image/png");  
    doc.addImage(chartImg, "PNG", 20, y, 160, 80);

    doc.save(`Report_${monthName}.pdf`);
});

showBudget();