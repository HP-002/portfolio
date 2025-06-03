
function Course(props) {

    const hoverColor =
        props.category === "cse" ?
            "group-hover:bg-blue-500/60 group-hover:shadow-blue-500/40 group-hover:inset-shadow-blue-500/40 " :
            props.category === "mth" ?
                "group-hover:bg-rose-500/80 group-hover:shadow-rose-500/40 group-hover:inset-shadow-rose-500/40 " :
                "group-hover:bg-emerald-400/50 group-hover:shadow-emerald-400/40 group-hover:inset-shadow-emerald-400/40 "

    return (
        <div
            className="relative group w-[225px]"
        >
            <p
                className={`m-1 p-2.5 text-neutral-300 group-hover:text-neutral-200 rounded-lg text-sm font-semibold
             inset-shadow-xs shadow-lg bg-white/10 ${hoverColor} group-hover:scale-105 duration-300`}
            >
                {props.title}
            </p>
            {/* <p
                className="group-hover:block z-1 transition-all duration-300 translate-x-10 group-hover:translate-x-0 opacity-0 group-hover:opacity-100
                absolute left-0 top-full mt-1 w-fit p-2 bg-white/35 backdrop-blur-lg text-sm rounded-lg shadow-lg"
            >
                {props.description}
            </p> */}
        </div>
    )
}

export default Course