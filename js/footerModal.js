const toggleButton = document.querySelector('.bottom-side_button')
const toggleContent= document.querySelector('.made-by')
// toggleContent.classList.add('hidden')

toggleButton.addEventListener('click', ()=>{
    if (toggleContent.classList.contains('made-by_hidden')) {
        toggleContent.classList.remove('made-by_hidden')
    } else{
        toggleContent.classList.add('made-by_hidden')
    }   
})
