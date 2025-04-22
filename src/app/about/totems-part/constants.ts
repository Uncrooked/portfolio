import { Vector3 } from "three";

export const softSkills = [
    {
        title:"Logique",
        desc:"J’aime comprendre le fonctionnement des choses et résoudre des problèmes de manière structurée. Que ce soit en développement web ou dans d’autres domaines, j’aborde chaque défi avec une méthode claire, en analysant chaque étape pour trouver la solution la plus efficace. Cette capacité me permet de coder proprement, d’éviter les erreurs et de construire des projets solides. Je privilégie toujours une réflexion en amont pour gagner du temps à long terme."
    },
    {
        title:"Esprit d’équipe",
        desc:"Travailler avec les autres me motive et me pousse à donner le meilleur de moi-même. J’apprécie échanger des idées, écouter les autres points de vue, et construire des projets en commun, en valorisant la force du collectif. Pour moi, une bonne ambiance et une communication fluide sont essentielles à la réussite d’un projet. Je n’hésite pas à aider ou à demander de l’aide pour faire avancer l’équipe dans la même direction."
    },
    {
        title:"Organisé",
        desc:"J’accorde une grande importance à la planification. J’aime structurer mes projets, créer des to-do lists, utiliser des outils de gestion, et respecter les deadlines. Cela me permet d’avancer sereinement et efficacement, même dans les périodes chargées. Mon organisation me permet de jongler entre plusieurs projets sans me perdre. C’est un vrai moteur pour rester concentré et productif, même dans les imprévus."
    }
]

export const models = [
    {
        scale: new Vector3(2, 2, 2),
        position: new Vector3(-10, 0, 0),
    },
    {
        scale: new Vector3(2, 2, 2),
        position: new Vector3(0, 0, 0),
    },
    {
        scale: new Vector3(2, 2, 2),
        position: new Vector3(10, 0, 0),
    }
];

export const classNames = [
    "first",
    "second",
    "third"
];

export const statesArray = [
    {
        hover:false,
        click:false
    },
    {
        hover:false,
        click:false
    },
    {
        hover:false,
        click:false
    }
];