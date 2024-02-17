import { CardProject } from '../interfaces/card_project-interfaces';

export const dataProjects: CardProject[] = [
    {
        id: 1,
        name: "DiidxaApp",
        description: "Aplicación movil desarrollada en AndroidStudio/Java, se trata de una aplicación que facilita la traducción de las palabras de Español a Zapoteco y viceversa, dando ejemplos de uso y un audio de su respectiva pronunciación en ambas lenguas. Usando un servicio montado de una página web existente.",
        dateStart: "10-03-2021",
        dateEnd: "5-12-2021",
        image: [
            "images/projects/project01/project01-img01.jpg",
            "images/projects/project01/project01-img02.jpg",
            "images/projects/project01/project01-img03.jpg",
        ],
        technologies: [
            8, 10, 15, 20
        ],
        urlRepo: "https://github.com/franciscosantiagoc/diidxa-itistmo",
        urlPage: "",//! TODO: pendiente
        urlVideo: "" //! TODO: pendiente
    },
    {
        id: 2,
        name: "Sistema de Tutorias",
        description: "Aplicación web  para la gestión de actividades de la actividad de tutorias en el Instituto Tecnológico del Istmo para la detección de la deserción escolar.",
        dateStart: "01-01-2021",
        dateEnd: "20-08-2021",
        image: [
            "/images/projects/project02/project02-img01.jpg",
            "/images/projects/project02/project02-img02.jpg",
            "/images/projects/project02/project02-img03.jpg",
        ],
        technologies: [
            1, 2, 3, 15, 16, 19
        ],
        urlRepo: "https://github.com/franciscosantiagoc/diidxa-itistmo",
        urlPage: "",//! TODO: pendiente
        urlVideo: "" //! TODO: pendiente
    },
    {
        id: 3,
        name: "PokeAPI",
        description: "Aplicación web sigle page, que permite el registro, visualización y busqueda de Pokemones, usando la integración de la API PokeAPI. Desarrollada como proyecto Individual durante la cursada del bootcamp de Henry",
        dateStart: "19-10-2021",
        dateEnd: "25-11-2021",
        image: [
            "/images/projects/project03/project03-img01.jpg",
            "/images/projects/project03/project03-img02.jpg",
            "/images/projects/project03/project03-img03.jpg",
        ],
        technologies: [
            1, 2, 3, 4, 5, 6, 9, 20, 26, 33
        ],
        urlRepo: "https://github.com/franciscosantiagoc/PI-Pokemon",
        urlPage: "",//! TODO: pendiente
        urlVideo: "https://www.linkedin.com/feed/update/urn:li:activity:6869733959408902144/" //! TODO: pendiente
    },
    {
        id: 4,
        name: "Techcommerce",
        description: "Aplicación web sigle page, que permite el registro, visualización, busqueda de productos, entre otras características de un comercio web, usando la integración de la API de Mercado Libre para la obtención de productos, al igual que la integración de API's de pago como Stripe y Mercado Pago. Desarrollada como proyecto grupal durante la cursada del bootcamp de Henry",
        dateStart: "02-01-2022",
        dateEnd: "25-02-2022",
        image: [
            "/images/projects/project04/project04-img01.jpg",
            "/images/projects/project04/project04-img02.jpg",
            "/images/projects/project04/project04-img03.jpg",
        ],
        technologies: [
            1, 2, 3, 4, 5, 6, 9, 20, 26, 33, 45, 46, 52, 53, 54,
        ],
        urlRepo: "https://github.com/franciscosantiagoc/techcommerce_pf",
        urlPage: "https://www.techcommerce.franciscosantiagoc.com/",
        urlVideo: "https://www.linkedin.com/posts/franciscosantiagoc_que-tal-gente-les-queria-compartir-mi-proyecto-activity-6899539928766652416-HWRp"
    },

]