


const populate= async (value,fromcurr)=>{
const url='https://api.currencyapi.com/v3/latest?api=cur_live_P3IIGzKUreat2tPHm0wyc6bjLm7FNG4Y9pMUpWgH'
const response=await fetch(url);
const result= await response.json();
 console.log(result);
  
for (const element of Object.keys(result['data'])) {
    console.log(element);
    
    element,result['data'][code]
}

}


const btny=document.getElementById('btny')
btny.addEventListener('click',(e)=>{
e.preventDefault();
const inputAmount=document.querySelector("input[name='quantity']").value
console.log(inputAmount,'input value is');

const fromcurr=document.querySelector("input[name='fromcurrency']").value
console.log(fromcurr,'first curr is');


// const tocurr=document.querySelector("input[name='tocurrency']").value
// console.log(tocurr,'second curr is');

populate(inputAmount,fromcurr)

})



const tableBody=document.querySelector('tbody');
tableBody.innerHTML=mystr;

