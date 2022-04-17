function calcula(tipo,valor){
    var expressao;
    if(tipo === 'acao'){
        if(valor === "C"){
            document.getElementById("visor").value = "";
        }
        if(valor === "+" || valor === "-" || valor === "/" || valor === "*" || valor === "." || valor === "(" || valor === ")"){
            document.getElementById("visor").value +=valor;
        }
        if(valor === "="){
            let valorVisor = eval(document.getElementById("visor").value);
            document.getElementById("visor").value = valorVisor;
        }
    }else if(tipo === 'valor'){
        document.getElementById("visor").value += valor;
    }
}