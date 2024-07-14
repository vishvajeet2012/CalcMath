const display = document.getElementById("display")

function handleValue(btn){
    display.value += btn
}

function Calculator(){
    display.value = eval(display.value)
}

function handleClear(){
    display.value = ""
}

function clearvalue(){
display.value = display.value.slice(0,-1)

        
}