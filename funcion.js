const secreta='Panel'

function BotonEscribir(){
    let word= document.getElementById('escribirpalabra').value;

    if (word.length!=5){
        window.alert('Una palabra de 5 letras debe ser')
        document.getElementById('escribirpalabra').value=''

    }else{
        // NuevaEntrada='<div>' + value + '</div>'
        for (let i=0;i<5;i++){

            if (word.charAt(i)){
                document.getElementById('letra0').innerText=word.charAt(i-4)
                document.getElementById('letra1').innerText=word.charAt(i-3)
                document.getElementById('letra2').innerText=word.charAt(i-2)
                document.getElementById('letra3').innerText=word.charAt(i-1)
                document.getElementById('letra4').innerText=word.charAt(i)



            }

        }

    }
//el For sirve para añadir los slots



}
//TODO primero buscar que me pinte la palabra que escribo

NuevaEntrada=''
// function EscribirSlots(){
//     NuevaEntrada= <div className="resposta">
//         <div className="slot"></div>
//         <div className="slot"></div>
//         <div className="slot"></div>
//         <div className="slot"></div>
//         <div className="slot"></div>
//     </div>
//
//
// }

//TODO DESPUES, hacer que pinte el cuadrado para añadir una palabra