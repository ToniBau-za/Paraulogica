//La palabra secreta
let listasecreta=['PANEL','CLAVO','CHILE','GAFAS','HIELO','JAPON','MENOS','OBRAS','PELEA','QUEMA','RELOJ','LUNAR','SOLAR','SAPOS']
let secreta=(listasecreta[Math.trunc(Math.random()*listasecreta.length)])

function BotonEscribir(){
    let word= document.getElementById('escribirpalabra').value;

    //controla si alguna palabra supera el limite de 5 letras
    if (word.length!=5){
        window.alert('Una palabra de 5 letras debe ser')
        document.getElementById('escribirpalabra').value=''

        //si la palabra es igual a la secreta
    }else if (word.toUpperCase()==secreta){
        let espacio="<div class='resposta'>"
        for (let i=0;i<secreta.length;i++){
            espacio += "<div class='slot green'>"
            espacio+= secreta.toUpperCase().charAt(i)
            espacio+="</div>"

        }
        espacio+= '</div>'

        document.getElementById('respuesta').innerHTML+= espacio + '<br>'
        window.alert('Felicidades, has adivinado la palabra!')
        document.getElementById('Reiniciar').hidden=false

    }else{
        let espaciocomprobador= "<div class='resposta'>"
        for (let i=0;i<word.length;i++) {
            //detecta si alguna letra es la misma y que esta en la posicion adequada de la palabra secreta
            if (word.toUpperCase().charAt(i)==secreta.charAt(i)){
                espaciocomprobador += "<div class='slot green'>"

                //detecta si alguna letra pertenece a la secreta
            }else if (secreta.includes(word.toUpperCase().charAt(i)) == true) {
                espaciocomprobador += "<div class='slot yellow'>"

                //si la letra no aparece en la palabra secreta
            }else{
                espaciocomprobador += "<div class='slot'>"
            }
            espaciocomprobador += word.toUpperCase().charAt(i)
            espaciocomprobador += '</div>'
        }
        document.getElementById('respuesta').innerHTML += espaciocomprobador + '<br>'

    }
}

function Reinicio(){
    document.getElementById('Reiniciar').hidden=true
    document.getElementById('respuesta').innerHTML=''
    document.getElementById('escribirpalabra').innerText=''
}