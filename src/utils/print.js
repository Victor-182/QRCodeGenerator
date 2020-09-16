import html2canvas from 'html2canvas'

window.html2canvas = html2canvas

export function imprimir(){
    let botoes = document.getElementById("botoes")
    botoes.style.display = "none";
    window.print();
    window.location.reload()
    return
}