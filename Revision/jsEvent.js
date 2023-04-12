// Event Propagation 
// Q event.target vs this.target vs event.currentTarget

const div = document.querySelector("div")
const form = document.querySelector("form")
const btn = document.querySelector("button")

div.addEventListener("click", func)
btn.addEventListener("click", func)
form.addEventListener("click", func)

function func(event) {
    alert("currentTarget = " + event.currentTarget.tagName +
        " , target = " + event.target.tagName +
        ", this =" + this.tagName)
}

// Q event capturing / trickling
div.addEventListener("click",
    function () {
        alert("div")
    },
    {
        capture: true,
    }
)

// how to stop bubbling or capturing
div.addEventListener("click",
    function (e) {
        e.stopPropagation()
        alert("div")
    }
)

// Q event delegation
document.querySelector(".class").addEventListener("click", (event) => {
    console.log(event.target.closest("SPAN"))

    if (event.target.tagName === "SPAN") {
        window.location.hash = "/" + event.target.className
    }
})

//  create a modal which closes by clicking on negative space?
const container = document.querySelector(".modalcontainer")
const bttn = document.querySelector(".mdlbtn")

bttn.addEventListener("click", () => {
    toggleModal(true)
}
)

function toggleModal(toggle) {
    container.style.display = toggle ? "flex" : "none"
}

container.addEventListener("click", () => {
    if (e.target.className === "modalcontainer")
        toggleModal(false)
})