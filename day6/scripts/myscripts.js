function display()
{
    alert('Welcome to Java Script')
}

const buttonElement3=document.querySelector("#one")
buttonElement3.addEventListener('click',replaceText)

function replaceText()
{
    buttonElement3.innerHTML='Apple'
   
    //buttonElement3.style.setProperty('background-color','red')
    //buttonElement3.style.backgroundColor="yellow"
    buttonElement3.classList.add('blue')
}