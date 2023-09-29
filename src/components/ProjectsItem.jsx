/* eslint-disable react/prop-types */



const ProjectsItem = ({img, title}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
        <img src={img} alt="/" className="rounded-xl group-hover:opacity-10 h-auto w-full "/>
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-l font-bold text-white tracking-wide text-center">
                {title}
            </h3>
            <a href="https://github.com/Alioudione12?tab=repositories" className="m-8">
                <p className="text-center p-2 rounded-lg bg-[#001b5e] text-white font-semibold cursor-pointer text-sm">Project Info</p>
            </a>
        </div>
    </div>
  )
}

export default ProjectsItem