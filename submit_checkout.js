const scriptURL = "https://script.google.com/macros/s/AKfycbxGsddFdKinuamZaw57vu4eo7B1GpQN7WjADifUinBpmCHmRn9KRjafp5WesZHPDhqi/exec"

let form = document.getElementById("form_contact");


form.addEventListener("submit" , (e) => {
    e.preventDefault()

    fetch(scriptURL , {
        method: "POST",
        body: new FormData(form),
    })
    .then((response) => {
        setTimeout(() => {
            localStorage.removeItem("cart")
            window.location.reload()
        },3000)
    })
    .catch((error) => console.error("eroor!" , error.message))
})