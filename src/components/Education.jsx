import EducationItem from "./EducationItem"

const data = [
    {
        year: 2023,
        title: "Studi Digital Campus Paris",
        diplome: "Mastère Informatique & Transformation Digitale",
        details: "Elaborer une stratégie de développement de modèle économique pérenne de l’innovation | Piloter une démarche d’innovation digitale centrée sur l’utilisateur | Piloter itérativement le cycle de vie d’une solution digitale |  Mobiliser des outils et méthodologies techniques au service des décisions stratégiques d’une organisation",
    },
    {
        year: 2021,
        title: "Studi Digital Campus Paris",
        diplome: "Bachelor spécialisé en Business Développement",
        details: "Analyse des besoins   |  Conception logicielle | programmation de solutions numériques | Tests et débogage |  Déploiement et maintenance |  Documentation des techniques fondamentaux d’un logiciel |  Gestion de la documentation |  Veille technologique",
    },
    {
        year: 2021,
        title: "University of Michigan access coursera platform aux etats unis",
        diplome: "Data Structure Certificate",
        details: "Data structures | Databases",
    },
    {
        year: 2019,
        title: "Sup’info International IT Academy au senegal",
        diplome: "DUT informatique",
        details: "Science et  technologie | Mathématique appliquée technologie ",
    }
]

const Education = () => {
  return (
    <div id="education" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
    <h1 className="text-2xl font-bold text-center text-[#485460]">Diplômes & Formations</h1>
    {data.map((item, idx) => (
        <EducationItem key={idx} year={item.year} title={item.title} diplome={item.diplome} details={item.details}/>
    ))}
    </div>
  )
}

export default Education