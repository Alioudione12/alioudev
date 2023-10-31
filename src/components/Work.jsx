import WorkItem from "./WorkItem"

const data = [
        {
        year: 2023,
        company: "PIXACARE",
        title: "CDD Développeur Cross platform",
        duration: "6 mois",
        details: "Développement des algorithmes d’intelligence artificielle qui mesurent et analysent les plaies avec la caméra du smartphone | Participer à l’analyse des données explorés | Participer au développement des  interfaces avec tailwind CSS.",
        
    },
    {
        year: 2023,
        company: "SNCF Connect",
        title: "Alternance Développeur full stack",
        duration: "1 an",
        details: "Développement des algorithmes qui permettent aux utilisateurs de trouver une destination, un trajet ou numéro de train  et déterminer un tarif | Rédaction des fonctionnalités et techniques | Intervention sur la page de souscription des utilisateurs | processus de développement Agile/Scrum .",
        
    },
    {
        year: 2022,
        company: "Picard",
        title: "Stage Développeur front-end",
        duration: "3 mois",
        details: " Conception d’ interface  e-commerce | Data collection,  intégration et fusionner l'écosystème par REST API | expériences de méthodologies de développement Agile, Scrum.",
    },
    {
        year: 2021,
        company: "Western Union",
        title: "Gestionnaire de transactions applicatives",
        duration: "1 année et 6 mois",
        details: "Création de comptes clients | Effectuez des transferts via l'application | Résolvez les problèmes techniques des clients avec l'application | Validation des codes promotionnels",
    }
]

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
    <h1 className="text-2xl font-bold text-center text-[#485460]">Expériences professionnelle</h1>
    {data.map((item, idx) => (
        <WorkItem key={idx} year={item.year} title={item.title} company={item.company} duration={item.duration} details={item.details}/>
    ))}
    </div>
  )
}

export default Work
