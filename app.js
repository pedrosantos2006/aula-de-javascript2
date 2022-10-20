function ConverterDeDolarParaReal(){
    let valorEmDolar = document.getElementById("valor").valorEmDolar
    let valorConvertido = valorEmDolar * 5.3
    document.getElementById("valorConvertido").innerText = valorConvertido.toFixed(2)
}