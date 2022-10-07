


const range =document.querySelector('.order-range')
const rangeCurrent=document.querySelector('.range-current')
range.addEventListener('input', onChange)





function onChange(e){

rangeCurrent.textContent=e.target.value

}