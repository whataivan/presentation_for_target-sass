const toggleButton = document.querySelector('.bottom-side_button')
const toggleContent = document.querySelector('.made-by')
const closeBtn = document.querySelector('.made-by_close_btn')



toggleButton.addEventListener('click', () => {
    if (toggleContent.classList.contains('made-by_hidden')) {
        toggleContent.classList.remove('made-by_hidden')
        toggleButton.classList.add("bottom-side_button--open")

    } else {

        toggleContent.classList.add('made-by_hidden')
        toggleButton.classList.remove("bottom-side_button--open")

    }
})
closeBtn.addEventListener('click', () => {
    toggleContent.classList.add('made-by_hidden')
    toggleButton.classList.remove("bottom-side_button--open")
})

// window.addEventListener("click", () => {
//     toggleContent.classList.add('made-by_hidden')

// })