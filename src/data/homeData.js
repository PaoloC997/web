const introText = [
    {
        id: 1,
        text: {
            en: "SOUND IS OUR TOOL TO REIMAGINE MEMORY",
            es: "EL SONIDO ES NUESTRA HERRAMIENTA PARA REDEFINIR LA MEMORIA",
            cat: "EL SO ÉS LA NOSTRA EINA PER REIMAGINAR LA MEMÒRIA",
            ger: "KLANG IST UNSER WERKZEUG, UM ERINNERUNG NEU ZU GESTALTEN"
        }    
    },

    {
        id: 2,
        text: {
            en: "We're a collective of art, culture and tech experts dedicated to safeguarding and exploring innovative expressions of acoustic heritage.",
            es: "Somos un colectivo de profesionales del arte, la tecnología y la cultura comprometidos con la salvaguarda de patrimonio acústico y la búsqueda de nuevas maneras de representarlo.",
            cat: "Som un col·lectiu d'experts en art, cultura i tecnologia dedicats a la salvaguarda i exploració d'expressions innovadores del patrimoni acústic.",
            ger: "Wir sind ein Kollektiv von Kunst-, Kultur- und Technologieexperten, das sich der Bewahrung und Erforschung innovativer Ausdrucksformen des akustischen Erbes verschrieben hat."
        }
    },

    {
        id: 3,
        text: {
            en: "Want more insight? Here’s an inside look into how we work with acoustic heritage",
            es: "¿Quieres saber más? Conoce cómo abordamos el patrimonio acústico.",
            cat: "Vols més informació? Aquí tens una visió interna de com treballem amb el patrimoni acústic.",
            ger: "Mehr Einblicke gefällig? Hier ein Blick darauf, wie wir mit dem akustischen Erbe arbeiten."
        },
    },
        {
            id: 4,
            text: {
                en: "Our services.\nWe deliver top-notch results with dedication and skill.",
                es: "Nuestros servicios. \nEntregamos resultados de primera con dedicación y habilidad.",
                cat: "Els nostres serveis. \nOferim resultats d'alta qualitat amb dedicació i habilitat.",
                ger: "Unsere Dienstleistungen. \nWir liefern erstklassige Ergebnisse mit Hingabe und Geschick."
            }
        }
];

const headings = [
    {
        id: 1,
        text: {
            en: "FUSING SPACE AND SOUND PERCEPTION TO CRAFT IMMERSIVE NARRATIVES",
            es: "ENTRELAZAMOS ESPACIO Y PERCEPCIÓN SONORA PARA CREAR NARRATIVAS INMERSIVAS",
            cat: "ENTRELLAÇANT ESPAI I PERCEPCIÓ SONORA PER CREAR NARRACIONS IMMERSIVES",
            ger: "VERBINDUNG VON RAUM UND KLANGWAHRNEHMUNG ZUR GESTALTUNG IMMERSIVER ERZÄHLUNGEN"
        }
    },

    {
        id: 2,
        text: {
            en: "TAILORED ACOUSTIC SOLUTIONS FOR MUSEUMS, ARTISTRY AND EDUCATION",
            es: "SOLUCIONES PARA PROYECTOS DE SONIDO EN MUSEOS, ARTE Y EDUCACIÓN",
            cat: "SOLUCIONS ACÚSTIQUES ADAPTDES PER A MUSEUS, ART I EDUCACIÓ",
            ger: "MAßGESCHNEIDERTE AKUSTISCHE LÖSUNGEN FÜR MUSEEN, KUNST UND BILDUNG"
        }
    },
    {
        id: 3,
        text: {
            en: "SOME OF OUR TOP \nCOLLABORATIONS",
            es: "ALGUNAS DE NUESTRAS \nCOLABORACIONES",
            cat: "ALGUNES DE LES NOSTRES \nCOL·LABORACIONS",
            ger: "EINIGE UNSERER \nTOP-KOLLABORATIONEN"
        }
    },

    {
        id: 4,
        text: {
            en: "GOT AN IDEA? \nWE’D LOVE TO HEAR IT",
            es: "¿TIENES ALGUNA IDEA? \nQUEREMOS ESCUCHARLA",
            cat: "TENS UNA IDEA?\nENS ENCANTARIA ESCOLTAR-LA",
            ger: "HAST DU EINE IDEE? \nWIR WÜRDEN SIE GERNE HÖREN"
        }
    },
];


const services = [
    {
        id: 0,
        name: {
            en: "SONICARCHIVE: 3D PRESERVATION OF ACOUSTIC AND SOUND HERITAGE",
            es: "SONICARCHIVE: PRESERVACIÓN 3D DEL PATRIMONIO ACÚSTICO Y SONORO",
            cat: "SONICARCHIVE: PRESERVACIÓ 3D DEL PATRIMONI ACÚSTIC I SONOR",
            ger: "SONICARCHIVE: 3D-ERHALTUNG DES AKUSTISCHEN UND KLANGLICHEN ERBES"
        },
        image: "img/portada.jpg",
        video: "img/layer.mp4",
    },
    {
        id: 1,
        name: {
            en: "IMMERSIVE EXPERIENCES. VR/XR/360 PRODUCTION DESIGN & CONSULTANCY",
            es: "EXPERIENCIAS INMERSIVAS. DISEÑO Y CONSULTORÍA DE PRODUCCIÓN VR/XR/360",
            cat: "EXPERIÈNCIES IMMERSIVES. DISSENY I CONSULTORIA DE PRODUCCIÓ VR/XR/360",
            ger: "IMMERSIVE ERLEBNISSE. VR/XR/360 PRODUKTIONSDESIGN & BERATUNG"
        },
        image: "img/portada.jpg",
        video: "img/layer.mp4",
    },
    {
        id: 2,
        name: {
            en: "SOUND DESIGN FOR DIGITAL APPLICATIONS",
            es: "DISEÑO DE SONIDO PARA APLICACIONES DIGITALES",
            cat: "DISSENY DE SO PER A APLICACIONS DIGITALS",
            ger: "KLANGDESIGN FÜR DIGITALE ANWENDUNGEN"
        },
        image: "img/portada.jpg",
        video: "img/layer.mp4",
    },
    {
        id: 3,
        name: {
            en: "RESEARCH AND DISSEMINATION HUB",
            es: "CENTRO DE INVESTIGACIÓN Y DIFUSIÓN",
            cat: "CENTRE DE RECERCA I DIFUSIÓ",
            ger: "FORSCHUNGS- UND VERBREITUNGSHUB"
        },
        image: "img/portada.jpg",
        video: "img/layer.mp4",
    },
       
    {
        id: 4,
        name: {
            en: "EDUCATIONAL WORKSHOPS AND LECTURES",
            es: "WORKSHOPS EDUCATIVOS Y CONFERENCIAS",
            cat: "TALLERS EDUCATIUS I CONFERÈNCIES",
            ger: "BILDUNGSWORKSHOPS UND VORLESUNGEN"
        },
        image: "img/portada.jpg",
        video: "img/layer.mp4",
    },
  
    {
        id: 5,
        name: {
            en: "RENT WITH US: PROFESSIONAL EQUIPMENT AND PERSONALIZED SUPPORT.",
            es: "ALQUILA CON NOSOTROS: EQUIPO PROFESIONAL Y SOPORTE PERSONALIZADO",
            cat: "LLOGA AMB NOSALTRES: EQUIP PROFESSIONAL I SUPORT PERSONALITZAT",
            ger: "MIETEN SIE BEI UNS: PROFESSIONELLE AUSRÜSTUNG UND PERSÖNLICHE UNTERSTÜTZUNG"
        },
        image: "img/portada.jpg",
        video: "img/layer.mp4",
    },
];

const contactText = [
    {
        id: 1,
        name: {
            en: "NAME",
            es: "NOMBRE",
            cat: "NOM",
            ger: "NAME"
        },
        email: {
            en: "EMAIL",
            es: "CORREO",
            cat: "CORREU",
            ger: "E-MAIL"
        },
        subject: {
            en: "SUBJECT",
            es: "ASUNTO",
            cat: "ASSUMPTES",
            ger: "BETREFF"
        },
        message: {
            en: "MESSAGE",
            es: "MENSAJE",
            cat: "MISSATGE",
            ger: "NACHRICHT"
        },
        send: {
            en: "SEND",
            es: "ENVIAR",
            cat: "ENVIAR",
            ger: "SENDEN"
        }
    },
   
];




const buttonTexts = [
    {
        id: 1,
        text: {
            en: "GET TO KNOW US +",
            es: "CONÓCENOS +",
            cat: "CONEIX-NOS +",
            ger: "LERNE UNS KENNEN +"
        }
    },

    {
        id: 2,
        text: {
            en: "SEE ALL PROJECTS +",
            es: "VER PROYECTOS +",
            cat: "VEURE TOTS ELS PROJECTES +",
            ger: "ALLE PROJEKTE ANSEHEN +"
        }
    },

    {
        id: 3,
        text: {
            en: "LEARN MORE +",
            es: "DESCUBRE MÁS +",
            cat: "APREN MÉS +",
            ger: "ERFAHRE MEHR +"
        }
    }
];


export { services, headings, introText, buttonTexts, contactText }