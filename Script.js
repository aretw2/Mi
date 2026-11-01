function escribirTexto(id, texto, velocidad = 50){

    const elemento = document.getElementById(id);

    if(!elemento) return;

    elemento.innerHTML = "";

    let i = 0;

    let intervalo = setInterval(() => {

        elemento.innerHTML += texto.charAt(i);

        i++;

        if(i >= texto.length){
            clearInterval(intervalo);
        }

    }, velocidad);
}

function siguientePantalla(id){

    document
    .querySelectorAll(".pantalla")
    .forEach(p =>
        p.classList.remove("activa")
    );

    document
    .getElementById(id)
    .classList.add("activa");

    switch(id){

        case "foto1":

        escribirTexto(
        "texto1",
        "📍 Nos conocimos. Todo empezó aquí y sin saberlo comenzaba algo muy especial ❤️",
        50
        );

        break;

        case "foto2":

        escribirTexto(
        "texto2",
        "💬 Empezamos a hablar. Poco a poco quería conocerte más y más ✨",
        50
        );

        break;

        case "foto3":

        escribirTexto(
        "texto3",
        "😂 Llegaron las primeras risas. Descubrí que podías alegrar cualquier día ❤️",
        50
        );

        break;

        case "foto4":

        escribirTexto(
        "texto4",
        "🌙 Conversaciones largas que parecían durar minutos aunque pasaran horas 💕",
        50
        );

        break;

        case "foto5":

        escribirTexto(
        "texto5",
        "❤️ Empecé a sentir algo más. Te convertiste en alguien muy importante para mí 🌹",
        50
        );

        break;

        case "foto6":

        escribirTexto(
        "texto6",
        "✨ Hoy. Por eso estás viendo esta página, porque quería hacer algo especial para ti ❤️",
        50
        );

        break;

        case "stats":

        escribirTexto(

        "estadisticasTexto",

`Analizando información...

██████████ 100%

Mensajes enviados: Muchísimos 📱

Sonrisas provocadas: +9999 😄

Veces que pensé en ti hoy: Demasiadas ❤️

Probabilidad de que me gustes:
100% 💕

Estado actual:
Completamente enamorada 🥰`,

        40

        );

        break;

        case "carta":

        escribirTexto(

        "textoCarta",

`Hay personas que llegan a nuestra vida y dejan recuerdos.

Y hay personas que consiguen convertir los días normales en algo especial.

Tú eres una de esas personas.

Me encanta hablar contigo.

Me encanta conocerte mejor cada día.

Me encanta la forma en que consigues hacerme sonreír.

Y aunque podría intentar explicarlo de muchas maneras distintas...

La verdad es bastante simple:

❤️ Me gustas muchísimo ❤️`,

        50

        );

        break;
    }
}

function iniciarCuenta(){

    let tiempo = 10;

    let intervalo = setInterval(() => {

        document.getElementById(
        "contador"
        ).innerText = tiempo;

        tiempo--;

        if(tiempo < 0){

            clearInterval(intervalo);

            siguientePantalla("pregunta");
        }

    },1000);
}

let escala = 1;

let preguntas = [

"¿Estás completamente segura? 🥺",

"¿Y si lo piensas una vez más? ❤️",

"Creo que elegiste el botón equivocado 😂",

"Mira que hice todo esto pensando en ti 🥹",

"Mi código detectó una posible equivocación 👀",

"Revisando sentimientos nuevamente... ❤️",

"Entonces... ¿Puedo ser tu novia? 💖"

];

let indice = 0;

function rechazar(){

    document.getElementById(
    "textoPregunta"
    ).innerText =
    preguntas[
    Math.min(
    indice,
    preguntas.length - 1
    )
    ];

    indice++;

    escala += 0.15;

    document.getElementById(
    "btnSi"
    ).style.transform =
    `scale(${escala})`;

    let botonNo =
    document.getElementById(
    "btnNo"
    );

    let ancho =
    window.innerWidth - 200;

    let alto =
    window.innerHeight - 150;

    botonNo.style.position =
    "fixed";

    botonNo.style.left =
    Math.random() * ancho + "px";

    botonNo.style.top =
    Math.random() * alto + "px";
}

function aceptar(){

document.body.innerHTML = `

<div style="
height:100vh;
background:#111;
color:#00ff99;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
font-family:monospace;
padding:30px;
text-align:left;
">

<pre id="resultado"></pre>

</div>

`;

let texto =

`Procesando respuesta...

██████████ 100%

Analizando respuesta...

Respuesta recibida: SÍ ✅

Solicitud:
¿Puedo ser tu novia? ❤️

Estado:
ACEPTADA ✅

Nivel de felicidad:
∞`;

let i = 0;

let destino =
document.getElementById(
"resultado"
);

let intervalo =
setInterval(()=>{

destino.textContent +=
texto.charAt(i);

i++;

if(i >= texto.length){

clearInterval(intervalo);

setTimeout(()=>{

mostrarPantallaFinal();

},2000);

}

},35);

}

function mostrarPantallaFinal(){

document.body.innerHTML = `

<div style="
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
padding:30px;

background:linear-gradient(
135deg,
#ffd1dc,
#ffe4ec,
#fff0f5
);
">

<h1>
❤️ ¡SÍ! ❤️
</h1>

<p>
No sabes lo feliz que me acabas de hacer.
</p>

<p>
Gracias por darme la oportunidad de compartir esta aventura contigo.
</p>

<h2>
❤️ 11 de Noviembre ❤️
</h2>

<p>
El día en que comenzó oficialmente nuestra historia.
</p>

<h2>
✨ Y espero que sea solo el primero de muchos recuerdos juntas ✨
</h2>

<p>
Gracias por decir que sí.
Prometo cuidar cada momento que compartamos y seguir creando recuerdos hermosos contigo ❤️
</p>

</div>

`;

crearCorazones();

}

function crearCorazones(){

setInterval(()=>{

let corazon =
document.createElement("div");

corazon.className =
"corazon";

corazon.innerHTML =
"❤️";

corazon.style.left =
Math.random()*100+"vw";

corazon.style.fontSize =
(Math.random()*20+20)+"px";

document.body.appendChild(
corazon
);

setTimeout(()=>{

corazon.remove();

},5000);

},250);

}
