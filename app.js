alert ("Saludos marinero, gracias por tu visita, argh!!")

//var app = "Trivia" (ejemplo de variable)

var userName = prompt ("Queremos saber de ti ¿Cómo te llamas?")
console.log(userName) //muestra el username

if (confirm("Argh!! Bienvenido a la tripulación " + userName + " ¿Eres tan rudo como para jugar nuestra trivia?") !== true){
    alert ("Será en otro momento grumete. Argh!!");
} else {
// pregunta1
    alert ("¡No esperaba menos de ti, vamos a comenzar! \n¡Demuestra cuánto sabes sobre Bob Esponja en las siguientes 10 preguntas!\n" );
    var question1 = prompt("Selecciona el inciso correcto: \n1.- ¿Cómo se llamó en México el primer capitulo de la serie?\n\na) Estoy listo! \nb) Se solicita cocinero \nc) Se busca ayuda \nd) ¿Has visto este caracol?")
    console.log(question1)
    document.getElementById("recivedAnswer1").innerHTML = ("Tu respuesta: " + question1)

    var  correctAnswer1 = "c";
//Alert
        if (question1 == correctAnswer1){
            alert("Correcto!!");
        } else {
            alert("Incorrecto (u.u) ");
        } 
//Escribir en HTML
        if (question1 == correctAnswer1){
            cuestionOne = ("<b>Correcto</b>")
        }   else {
            cuestionOne = ("Incorrecto, la respuesta correcta es:\n <b>c) Se busca ayuda (Help Wanted)</b>")
        }
        document.getElementById("evaluation1").innerHTML = cuestionOne;

//pregunta 2
    var question2 = prompt("Selecciona el inciso correcto: \n2.- ¿Cómo se llama el creador de Bob Esponja? \n\na) Dan Schneider  \nb) Stephen McDannell Hillenburg \nc) Joanne Rowling \nd) Matt Groening")
    console.log(question2)
    document.getElementById("recivedAnswer2").innerHTML = ("Tu respuesta: " + question2)
    
    var  correctAnswer2 = "b";
        
        if (question2 == correctAnswer2){
            alert("Correcto!!\nTenemos un buen tripulante.");
        } else {
            alert("Casi, pero no :c");
        }

        if (question2 == correctAnswer2){
            cuestionTwo = ("<b>Correcto</b>")
        }   else {
            cuestionTwo = ("Incorrecto, la respuesta correcta es:\n <b>b) Stephen McDannell Hillenburg</b>")
        }
        document.getElementById("evaluation2").innerHTML = cuestionTwo;

//pregunta 3
    var question3 = prompt ("Selecciona el inciso correcto: \n3.- ¿Cómo se llama la esposa de Sheldon J. Plankton? \n\na) Perlita \nb) Arenita \nc) Karen \nd) Karina")
    console.log(question3)
    document.getElementById("recivedAnswer3").innerHTML = ("Tu respuesta: " + question3)

    var  correctAnswer3 = "c";

        if (question3 == correctAnswer3){
            alert("La esposa computadora!!")
        } else {
            alert("No en esta vida, viejo u.u")
        }   

        if (question3 == correctAnswer3){
            cuestionThree = ("<b>Correcto</b>")
        }   else {
            cuestionThree = ("Incorrecto, la respuesta correcta es:\n <b>c) Karen</b>")
        }
        document.getElementById("evaluation3").innerHTML = cuestionThree;

//pregunta4
    var question4 = prompt ("Selecciona el inciso correcto: \n4.- ¿Cuál es la dirección de Bob Esponja en Fondo de Bikini?\n\na) #125 Sirenhead Street \nb) #666 Hell Street \nc) En una piña debajo del mar \nd) #124 Conch Street")
    console.log(question4)
    document.getElementById("recivedAnswer4").innerHTML = ("Tu respuesta: " + question4)

    var  correctAnswer4 = "d";

    if (question4 == correctAnswer4){
        alert("Wow! Estás atento a los detalles :D")
    } else {
        alert("No bro :C")
    }

    if (question4 == correctAnswer4){
        cuestionFour = ("<b>Correcto</b>")
    }   else {
        cuestionFour = ("Incorrecto, la respuesta correcta es:\n <b>d) #124 Conch Street</b>")
    }
    document.getElementById("evaluation4").innerHTML = cuestionFour;

//pregunta5
    var question5 = prompt ("Selecciona el inciso correcto: \n5.- ¿Cuándo es la fecha de nacimiento de Bob Esponja?\n\na) 14 de julio de 1986 \nb) 25 de diciembre de 1986 \nc) 14 de febrero de 2021 \nd) 16 de septiembre de 1910")
    console.log(question5)
    document.getElementById("recivedAnswer5").innerHTML = ("Tu respuesta: " + question5)

    var  correctAnswer5 = "a";

    if (question5 == correctAnswer5){
        alert("Correcto! Eres bueno para recordar cumpleaños :D")
    } else {
        alert("Nope! :(")
    }

    if (question5 == correctAnswer5){
        cuestionFive = ("<b>Correcto</b>")
    }   else {
        cuestionFive = ("Incorrecto, la respuesta correcta es:\n <b>a) 14 de julio de 1986 </b>")
    }
    document.getElementById("evaluation5").innerHTML = cuestionFive;

//pregunta6
    var question6 = prompt ("Selecciona el inciso correcto: \n6.- ¿Qué tipo de artefacto terrestre es usado como establecimiento para el Crustaceo Cascarudo?\n\na) Una piña debajo del mar \nb) Una caja de arena \nc) Una trampa para cazar langostas/cangrejos \nd) Una lonchera")
    console.log(question6)
    document.getElementById("recivedAnswer6").innerHTML = ("Tu respuesta: " + question6)

    var  correctAnswer6 = "c";

    if (question6 == correctAnswer6){
        alert("De eso sí sabes!")
    } else {
        alert("Se parece, pero no")
    }

    if (question6 == correctAnswer6){
        cuestionSix = ("<b>Correcto</b>")
    }   else {
        cuestionSix = ("Incorrecto, la respuesta correcta es:\n <b>c) Una trampa para cazar langostas/cangrejos</b>")
    }
    document.getElementById("evaluation6").innerHTML = cuestionSix;

//pregunta7
    var question7 = prompt ("Selecciona el inciso correcto: \n7.- ¿De quién se enamora Don Cangrejo además del dinero?\n\na) Arenita \nb) Sra. Puff \nc) Karen \nd) Perlita")
    console.log(question7)
    document.getElementById("recivedAnswer7").innerHTML = ("Tu respuesta: " + question7)

    var  correctAnswer7 = "b";

    if (question7 == correctAnswer7){
        alert("Ese cangrejo es un pillo!")
    } else {
        alert("Casi le atinas")
    }

    if (question7 == correctAnswer7){
        cuestionSeven = ("<b>Correcto</b>")
    }   else {
        cuestionSeven = ("Incorrecto, la respuesta correcta es:\n <b>b) Sra. Puff<b>")
    }
    document.getElementById("evaluation7").innerHTML = cuestionSeven;

//pregunta8
    var question8 = prompt ("Selecciona el inciso correcto: \n8.- En el capítulo 'Semana pre-hibernación' (2001) ¿qué banda prestó una versión instrumental para armonizar el episodio?\n\na) J.Balvin \nb) Megadeth \nc) PinkFloyd \nd) Pantera")
    console.log(question8)
    document.getElementById("recivedAnswer8").innerHTML = ("Tu respuesta: " + question8)

    var  correctAnswer8 = "d";

    if (question8 == correctAnswer8){
        alert("Se rifaron con la versión!!")
    } else {
        alert(":C No amigo")
    }

    if (question8 == correctAnswer8){
        cuestionEight = ("<b>Correcto</b>")
    }   else {
        cuestionEight = ("Incorrecto, la respuesta correcta es:\n <b>d) Pantera</b>")
    }
    document.getElementById("evaluation8").innerHTML = cuestionSeven;

//pregunta9
    var question9 = prompt ("Selecciona el inciso correcto: \n9.- ¿Qué personaje es reconocido por expresar '¡Mi pierna!'?\n\na) Larry \nb) Patricio \nc) Fred \nd) Calamardo")
    console.log(question9)
    document.getElementById("recivedAnswer9").innerHTML = ("Tu respuesta: " + question9)

    var  correctAnswer9 = "c";

    if (question9 == correctAnswer9){
        alert("Se nota que conoces a muchos personajes!!")
    } else {
        alert("Oh no, esto lastimó más la pierna de Fred")
    }

    if (question9 == correctAnswer9){
        cuestionNine = ("<b>Correcto</b>")
    }   else {
        cuestionNine = ("Incorrecto, la respuesta correcta es:\n <b>c)Fred</b>")
    }
    document.getElementById("evaluation9").innerHTML = cuestionNine;

//pregunta10
    var question10 = prompt ("Selecciona el inciso correcto: \n10.- ¿Qué especie marina es Calamardo?\n\na) Pulpo \nb) Calamar \nc) Ballena \nd) Medusa")
    console.log(question10)
    document.getElementById("recivedAnswer10").innerHTML = ("Tu respuesta: " + question10)

    var  correctAnswer10 = "a";

    if (question10 == correctAnswer10){
        alert("Wow, gran observación!!")
    } else {
        alert("Lo llegué a pensar también pero no es :C")
    }

    if (question10 == correctAnswer10){
        cuestionTen = ("<b>Correcto</b>")
    }   else {
        cuestionTen = ("Incorrecto, la respuesta correcta es:\n <b>a) Pulpo</b>")
    }
    document.getElementById("evaluation10").innerHTML = cuestionTen;
    alert("Gracias por participar, veamos los resultados en pantalla.")   
}


// pintar el document en el h2 el nombre ingresado del usuario
//document.body.style.background = "Assets/Fondo cielo.jp";

//acceder a html desde javascript document
document.getElementById('title').innerHTML = ("Bienvenido " + userName);