//La palabra secreta
const secreta='PANEL'

function BotonEscribir(){
    let word= document.getElementById('escribirpalabra').value;

    //controla si alguna palabra supera el limite de 5 letras
    if (word.length!=5){
        window.alert('Una palabra de 5 letras debe ser')
        document.getElementById('escribirpalabra').value=''

    }else if (word.toUpperCase()==secreta){
        let espacio="<div class='resposta'>"
        for (let i=0;i<secreta.length;i++){
            espacio += "<div class='slot green'>"
            espacio+= secreta.toUpperCase().charAt(i)
            espacio+="</div>"

        }
        espacio+= '</div>'
        document.getElementById('respuesta').innerHTML+= espacio + '<br>'

    }else{
        let texto= "<div class='resposta'>"
        for (let i=0;i<word.length;i++) {
            //detecta si alguna letra es la misma y que esta en la posicion adequada de la palabra secreta
            if (word.toUpperCase().charAt(i)==secreta.charAt(i)){
                texto += "<div class='slot green'>"

            }else if (word.toUpperCase().charAt(i).includes(secreta.charAt(i)) == true) {
                texto += "<div class='slot yellow'>"

            }else{
                texto += "<div class='slot'>"
            }
            texto += word.toUpperCase().charAt(i)
            texto += '</div>'
        }
        document.getElementById('respuesta').innerHTML += texto + '<br>'
    }





}
