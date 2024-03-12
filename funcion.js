const secreta='PANEL'

function BotonEscribir(){
    let word= document.getElementById('escribirpalabra').value;

    if (word.length!=5){
        window.alert('Una palabra de 5 letras debe ser')
        document.getElementById('escribirpalabra').value=''

    }else if (word.toUpperCase()!=secreta){
        let espacio="<div class='resposta'>"
        for (let i=0;i<word.length;i++){
            espacio += "<div class='slot'>"
            espacio+= word.charAt(i)
            espacio+="</div>"

        }
        espacio+= '</div>'
        document.getElementById('respuesta').innerHTML= espacio + '<br>'

    }




}
