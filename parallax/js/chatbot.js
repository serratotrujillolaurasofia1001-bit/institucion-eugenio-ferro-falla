/* Asistente virtual - Institución Educativa Eugenio Ferro Falla
   Responde con los textos reales del sitio. Para agregar temas, edita BASE. */

const BASE = {
    saludo: {
        texto: "¡Hola! 👋 Soy el asistente virtual de la Institución Educativa Eugenio Ferro Falla. Puedo contarte sobre nuestra misión, visión, historia, servicios y contacto. ¿Qué quieres saber?",
        botones: ["mision", "vision", "valores", "historia", "servicios", "contacto"]
    },
    mision: {
        etiqueta: "Misión",
        claves: ["mision"],
        texto: "Nuestra misión: brindar una educación integral que fortalezca los conocimientos, habilidades y valores de nuestros estudiantes, promoviendo el pensamiento crítico, el liderazgo, la convivencia y el compromiso con la comunidad.",
        botones: ["vision", "valores", { t: "Ver en la página", href: "nosotros.html" }]
    },
    vision: {
        etiqueta: "Visión",
        claves: ["vision"],
        texto: "Nuestra visión: ser una institución reconocida por su formación académica, técnica, cultural y social, preparando estudiantes capaces de enfrentar los retos del futuro y contribuir positivamente al desarrollo de su región.",
        botones: ["mision", "valores", { t: "Ver en la página", href: "nosotros.html" }]
    },
    valores: {
        etiqueta: "Valores",
        claves: ["valor", "principio", "respeto", "responsabilidad", "liderazgo", "compromiso"],
        texto: "Nuestros valores son:\n• Responsabilidad: el compromiso y el cumplimiento de nuestros deberes.\n• Respeto: una convivencia basada en la valoración de los demás.\n• Liderazgo: estudiantes capaces de aportar ideas y generar cambios positivos.\n• Compromiso: trabajo con dedicación por la institución y la comunidad.",
        botones: ["mision", "vision", { t: "Ver en la página", href: "nosotros.html" }]
    },
    historia: {
        etiqueta: "Historia",
        claves: ["historia", "fundacion", "fundo", "origen", "nacio", "antiguedad", "trayectoria", "sena", "sedes"],
        texto: "El colegio nació en el siglo XX para ampliar la cobertura educativa en Campoalegre y evitar que los jóvenes tuvieran que viajar a Neiva a cursar su secundaria.\n\nCon el tiempo se consolidó como Institución Educativa, integró sedes de primaria y hoy ofrece un ciclo completo desde preescolar hasta la media, con formación técnica en convenio con el SENA.",
        botones: ["nombre", "quienes", { t: "Leer historia completa", href: "nosotros.html#historia" }]
    },
    nombre: {
        etiqueta: "¿Por qué ese nombre?",
        claves: ["nombre", "eugenio ferro", "quien fue", "porque se llama"],
        texto: "El colegio lleva el nombre de Eugenio Ferro Falla, ilustre personaje y líder político de la región huilense, recordado por sus aportes al desarrollo comunitario, cultural y educativo del Huila.",
        botones: ["historia", "lema"]
    },
    quienes: {
        etiqueta: "Quiénes somos",
        claves: ["quienes son", "quienes somos", "que es", "sobre ustedes", "acerca"],
        texto: "Somos uno de los establecimientos educativos con mayor trayectoria en Campoalegre, Huila. Brindamos formación integral a niños, niñas y jóvenes, con espacios deportivos, culturales, tecnológicos y sociales.",
        botones: ["mision", "vision", { t: "Ir a Nosotros", href: "nosotros.html" }]
    },
    lema: {
        etiqueta: "Lema",
        claves: ["lema", "eslogan", "frase"],
        texto: "Nuestro lema es «Ciencia, educación y virtud»: formar estudiantes íntegros, con conocimiento, valores y compromiso con su comunidad.",
        botones: ["mision", "servicios"]
    },
    servicios: {
        etiqueta: "Servicios",
        claves: ["servicio", "ofrecen", "ofrecen", "actividades", "academica", "ciencia", "tecnologia", "deporte", "recreacion", "arte", "cultura", "proyecto"],
        texto: "Ofrecemos:\n📚 Formación académica\n🔬 Ciencia y tecnología\n⚽ Deporte y recreación\n🎨 Arte y cultura\n🤝 Formación en valores\n💻 Proyectos institucionales",
        botones: ["contacto", { t: "Ver servicios", href: "servicios.html" }]
    },
    contacto: {
        etiqueta: "Contacto",
        claves: ["contacto", "contactar", "comunicar", "hablar", "escribir", "informacion"],
        texto: "Puedes comunicarte con nosotros:\n📞 Teléfono: 78380388\n✉️ Correo: eugenioferrofalla@gmail.com\n📍 Campoalegre, Huila, Colombia\n🕐 Atención durante la jornada escolar.",
        botones: [
            { t: "Llamar", href: "tel:78380388" },
            { t: "Enviar correo", href: "mailto:eugenioferrofalla@gmail.com" },
            { t: "Formulario de contacto", href: "contactos.html" }
        ]
    },
    ubicacion: {
        etiqueta: "Ubicación",
        claves: ["ubicacion", "donde", "direccion", "mapa", "llegar", "queda"],
        texto: "Estamos en Campoalegre, Huila, Colombia.",
        botones: [{ t: "Ver mapa", href: "contactos.html" }, "contacto"]
    },
    horario: {
        etiqueta: "Horario",
        claves: ["horario", "hora", "atienden", "abierto"],
        texto: "Atendemos durante la jornada escolar. Para confirmar horarios específicos, llámanos al 78380388.",
        botones: [{ t: "Llamar", href: "tel:78380388" }, "contacto"]
    },
    redes: {
        etiqueta: "Redes sociales",
        claves: ["red", "redes", "facebook", "instagram", "youtube"],
        texto: "Síguenos en nuestras redes sociales para conocer las noticias de la institución.",
        botones: [
            { t: "Facebook", href: "https://www.facebook.com/ieffalla/?locale=es_LA" },
            { t: "Instagram", href: "https://www.instagram.com/eugenioestereo/" },
            { t: "YouTube", href: "https://www.youtube.com/@eugenioferrofalla" }
        ]
    },
    saludoUsuario: {
        claves: ["hola", "buenas", "buenos dias", "buenas tardes", "buenas noches", "hey"],
        texto: null
    },
    gracias: {
        claves: ["gracias", "chao", "adios", "hasta luego"],
        texto: "¡Con gusto! Si necesitas algo más, aquí estaré. 😊",
        botones: ["servicios", "contacto"]
    },
    noEntendi: {
        texto: "No encontré información sobre eso, pero puedo ayudarte con estos temas. También puedes escribirnos directamente:",
        botones: ["mision", "vision", "historia", "servicios", { t: "Contáctanos", href: "contactos.html" }]
    }
};

// Utilidades
const normalizar = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9ñ\s]/g, " ");

function buscarRespuesta(pregunta) {
    const q = " " + normalizar(pregunta) + " ";
    let mejor = null, puntaje = 0;
    for (const [id, tema] of Object.entries(BASE)) {
        if (!tema.claves) continue;
        let p = 0;
        for (const c of tema.claves) if (q.includes(c)) p += c.length;
        if (p > puntaje) { puntaje = p; mejor = id; }
    }
    return mejor;
}

// Interfaz
function crearAsistente() {
    const html = `
    <button id="bot-abrir" aria-label="Abrir asistente virtual">💬</button>
    <div id="bot-ventana" role="dialog" aria-label="Asistente virtual">
        <div id="bot-cabecera">
            <img src="./img/escudo2.gif" alt="">
            <div><strong>Asistente Eugenio Ferro Falla</strong><small>Ciencia, educación y virtud</small></div>
            <button id="bot-cerrar" aria-label="Cerrar">✕</button>
        </div>
        <div id="bot-mensajes" aria-live="polite"></div>
        <form id="bot-form">
            <input id="bot-texto" type="text" placeholder="Escribe tu pregunta..." autocomplete="off" aria-label="Tu pregunta">
            <button id="bot-enviar" type="submit">Enviar</button>
        </form>
    </div>`;
    document.body.insertAdjacentHTML("beforeend", html);

    const ventana = document.getElementById("bot-ventana");
    const mensajes = document.getElementById("bot-mensajes");
    const input = document.getElementById("bot-texto");
    let saludado = false;

    function agregar(texto, quien) {
        const d = document.createElement("div");
        d.className = "bot-msg " + quien;
        d.textContent = texto;
        mensajes.appendChild(d);
        mensajes.scrollTop = mensajes.scrollHeight;
    }

    function agregarBotones(lista) {
        if (!lista || !lista.length) return;
        const cont = document.createElement("div");
        cont.className = "bot-botones";
        lista.forEach(b => {
            if (typeof b === "string") {
                const btn = document.createElement("button");
                btn.className = "bot-btn"; btn.type = "button";
                btn.textContent = BASE[b].etiqueta;
                btn.onclick = () => { agregar(BASE[b].etiqueta, "user"); responder(b); };
                cont.appendChild(btn);
            } else {
                const a = document.createElement("a");
                a.className = "bot-btn enlace"; a.href = b.href; a.textContent = b.t;
                if (b.href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
                cont.appendChild(a);
            }
        });
        mensajes.appendChild(cont);
        mensajes.scrollTop = mensajes.scrollHeight;
    }

    function responder(id) {
        const tema = BASE[id];
        agregar(tema.texto, "bot");
        agregarBotones(tema.botones);
    }

    function saludar() {
        if (saludado) return;
        saludado = true;
        responder("saludo");
    }

    document.getElementById("bot-abrir").onclick = () => {
        ventana.classList.toggle("abierto");
        if (ventana.classList.contains("abierto")) { saludar(); input.focus(); }
    };
    document.getElementById("bot-cerrar").onclick = () => ventana.classList.remove("abierto");

    document.getElementById("bot-form").addEventListener("submit", e => {
        e.preventDefault();
        const pregunta = input.value.trim();
        if (!pregunta) return;
        agregar(pregunta, "user");
        input.value = "";
        const id = buscarRespuesta(pregunta);
        setTimeout(() => {
            if (id) responder(id);
            else if (BASE.saludoUsuario.claves.some(c => normalizar(pregunta).includes(c))) responder("saludo");
            else responder("noEntendi");
        }, 350);
    });
}

document.addEventListener("DOMContentLoaded", crearAsistente);