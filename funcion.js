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
            espacio+= word.toUpperCase().charAt(i)
            espacio+="</div>"

        }
        espacio+= '</div>'
        document.getElementById('respuesta').innerHTML+= espacio + '<br>'

    }else{
        let texto= "<div class='resposta'>"
        for (let i=0;i<word.length;i++) {
            if (word.toUpperCase().charAt(i).includes(secreta.charAt(i)) == true) {
                texto += "<div class='slot yellow'>"

            }else if (word.toUpperCase().charAt(i)==secreta.charAt(i)){
                texto += "<div class='slot green'>"

            }else{
                texto += "<div class='slot'>"
            }
            texto += word.toUpperCase().charAt(i)
            texto += '</div>'
        }
        document.getElementById('respuesta').innerHTML += texto + '<br>'
    }





}
