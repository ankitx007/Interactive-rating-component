const rating = document.querySelector(".rating");
const thankyou = document.querySelector(".thank-you")

const submit = document.getElementById("submit")
const goback = document.getElementById('goback')

const ratings = document.querySelectorAll(".btn")
const span = document.getElementById("span")

submit.addEventListener('click', () =>{
    thankyou.classList.remove("hidden")
    rating.style.display = "none"

    ratings.forEach((rating) => {
        rating.addEventListener("click", () =>{
            span.innerHTML = rating.innerHTML
        })
    })
})

goback.addEventListener('click', () =>{
    thankyou.classList.add("hidden")
    rating.style.display = "block"
})

