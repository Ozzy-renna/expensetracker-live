const balanceEl=document.getElementById("balance");
const incomeEl=document.getElementById("income");
const expenseEl=document.getElementById("expense");
const listEl=document.getElementById("list")
const form=document.getElementById("form");
const desc=document.getElementById("desc");
const amount=document.getElementById("amount");
const type=document.getElementById("type");
let transactions=JSON.parse(localStorage.getItem("transactions")) || [];
function updateUI() {
  listEl.innerHTML = "";
  let income = 0, expense = 0;

  transactions.forEach((t, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${t.desc} <span>${t.type === "income" ? "+" : "-"}₦${t.amount}</span>`;
    listEl.appendChild(li);

    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });
incomeEl.textContent=income;
expenseEl.textContent=expense;
balanceEl.textContent=income - expense;
localStorage.setItem("transactions",JSON.stringify(transactions));
}
form.addEventListener("submit",e => {
e.preventDefault();
const newTransaction={
   desc:desc.value,
   amount: +amount.value,
   type:type.value
};
transactions.push(newTransaction);
updateUI();
form.reset();
});
updateUI();