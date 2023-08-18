const country=document.getElementById('country');
const inputcountry=document.getElementById('select_country');

country.onchange=()=>{
    inputcountry.innerHTML=country.value +" :";
}