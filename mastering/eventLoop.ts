let balance = 1000;

const debit = (amount:number) => setTimeout(() => {
    console.log(`Starting balance before debit ${balance}`);
    balance = balance - amount;
    console.log(`Ending balance after debit: ${balance}`)
}, 1000)

const credit = (amount:number) => setTimeout(() => {
    console.log(`Starting balance before credit ${balance}`);
    balance = balance + amount;
    console.log(`Ending balance after credit: ${balance}`)
}, 1000)

console.log(balance);

debit(500);
credit(600)