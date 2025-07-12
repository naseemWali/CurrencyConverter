
const populate= async (value,fromcurr)=>{
    let mystr="";
const url='https://api.currencyapi.com/v3/latest?apikey=cur_live_P3IIGzKUreat2tPHm0wyc6bjLm7FNG4Y9pMUpWgH'
const response=await fetch(url);
const result= await response.json();
 console.log(result);
  
for (const element of Object.keys(result['data'])) {
//  first method but we need to apply tofixed on values to make it to two digits  so there are arrays 
// element,result['data'][element]['code'],result['data'][element]['value']


    // mystr+= `<tr>
    //     <td>${element}</td>
    //     <td>${result['data'][element]['code']}</td>
    //     <td>${result['data'][element]['value']}</td>
    //      </tr> `
    

    //  second method 
    const currencydata=result['data'][element]
    mystr+= `<tr>
    <td>${element}</td>
    <td>${currencydata.code}</td>
    <td>${Math.round(value * currencydata.value)}</td>
    </tr> `
}
const tableBody=document.querySelector('tbody');
tableBody.innerHTML=mystr;

}


const btny=document.getElementById('btny')
btny.addEventListener('click',(e)=>{
e.preventDefault();
const inputAmount= parseInt(document.querySelector("input[name='quantity']").value)
console.log(inputAmount,'input value is');

const fromcurr=document.querySelector("select[name='fromcurrency']").value
console.log(fromcurr,'first curr is');


// const tocurr=document.querySelector("input[name='tocurrency']").value
// console.log(tocurr,'second curr is');

populate(inputAmount,fromcurr)

})





