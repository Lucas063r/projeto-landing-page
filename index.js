var setaesquerda = window.document.getElementById("setaesquerda")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setadireita = window.document.getElementById("setadireita")

function rolarParaaDireita(){
    leonardo.style = "display: none"
    bruna.style = "display: flex"
    setaesquerda.style = "display: flex; margin-top:20%"
    setadireita.style = "display: none"
    
}
function rolarParaaEsquerda(){
    leonardo.style = "display: flex"
    bruna.style = "display: none"
    setaesquerda.style = "display: none"
    setadireita.style = "display: flex; margin-top:20%"
    
}