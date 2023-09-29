import WorkItem from "./WorkItem"

const data = [
    {
        year: 2023,
        company: "Picard",
        title: "Frontend Developpeur",
        duration: "6 mois",
        details: "Intervention sur l’ inscription des utilisateurs | Conception d’ interface  e-commerce | Data collection et intégration et fusionner l'écosystème par des API | Participation à l’écosystème React/Python | Expériences des méthodologies de développement Agile, Scrum.",
        
    },
    {
        year: 2022,
        company: "Air Senegal",
        title: "Full stack Developpeur",
        duration: "1 année",
        details: "Participer à l’analyse des données et à la rédaction des spécifications fonctionnelles et techniques. | Concevoir, développer de nouveaux produits | Intervenir dans le projet méthodologie Agile,Scrum | Participer au développement des applications (back et front) et aux tests | Intervention sur l’ inscription des utilisateurs | développer un algorithme de géolocalisation pour déterminer des tarifs ",
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
    <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
    {data.map((item, idx) => (
        <WorkItem key={idx} year={item.year} title={item.title} company={item.company} duration={item.duration} details={item.details}/>
    ))}
    </div>
  )
}

export default Work
