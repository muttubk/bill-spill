const bill=document.getElementById('bill');

let tipPercent=0;
function getTipPercent(x){
    tipPercent=x;
    // console.log(x)
}

const people=document.getElementById('people');

let tipAmount=document.getElementById('tipAmount');
let total=document.getElementById('total');

function generateBill(){
    let tip= bill.value*tipPercent/people.value;
    let totalAmount = bill.value /people.value + tip;
    tipAmount.innerHTML=`$ ${tip.toFixed(2)}`;
    total.innerHTML=`$ ${totalAmount.toFixed(2)}`;
}

function reset(){
    bill.value=0;
    tipPercent=0;
    people.value=1;
    tipAmount.innerHTML=`$ 0`;
    total.innerHTML=`$ 0`;
    document.getElementById('customTip').value="";
}

