import EducationItem from "./EducationItem"

const data = [
    {
        year: 2023,
        title: "Studi Digital Campus Paris",
        diplome: "Bachelor développeur d'application",
        details: "Analyse des besoins   |  Conception logicielle | Programmation  |  Tests et débogage |  Déploiement et maintenance |  Documentation des techniques fondamentaux d’un logiciel |  Gestion de la documentation |  Veille technologique",
    },
    {
        year: 2021,
        title: "University of Michigan access coursera platform",
        diplome: "Data Structure Certificate",
        details: "Data structures | Databases",
    },
    {
        year: 2019,
        title: "Sup’info International IT Academy",
        diplome: "DUT informatique",
        details: "Science et  technologie | Mathématique appliquée technologie ",
    }
]

const Education = () => {
  return (
    <div id="education" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
    <h1 className="text-4xl font-bold text-center text-[#001b5e]">Education</h1>
    {data.map((item, idx) => (
        <EducationItem key={idx} year={item.year} title={item.title} diplome={item.diplome} details={item.details}/>
    ))}
    </div>
  )
}

export default Education