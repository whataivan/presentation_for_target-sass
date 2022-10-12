


const range =document.querySelector('.order-range')
const rangeOutput=document.querySelector('.range-current')

range.addEventListener('input', onChange)






function onChange(e){

rangeOutput.textContent=e.target.value

}