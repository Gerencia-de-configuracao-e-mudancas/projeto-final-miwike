if(localStorage.getItem("modo_dislexico") === null){
    localStorage.setItem("modo_dislexico", "off")
}
let dislexico_toggle = document.getElementById("modo_dislexico_toggle")
let on_or_ff = document.getElementById("on_or_off")

function mudar_fonte(){
    if(localStorage.getItem("modo_dislexico") == "off") {
        on_or_ff.textContent = "Desligado"
        document.documentElement.style.setProperty(
            "--fonte",
            "Ultrakill"
        )
    }
    else if(localStorage.getItem("modo_dislexico") == "on") {
        on_or_ff.textContent = "Ligado"
        document.documentElement.style.setProperty(
            "--fonte",
            "OpenDyslexic_Regular"
        )
    }
}
mudar_fonte()

function onoff_dyslexic() {
    if(localStorage.getItem("modo_dislexico") == "off") {
        localStorage.setItem("modo_dislexico", "on")
    }
    else if(localStorage.getItem("modo_dislexico") == "on") {
        localStorage.setItem("modo_dislexico", "off")
    }
    mudar_fonte()
}

dislexico_toggle.addEventListener('click', onoff_dyslexic)