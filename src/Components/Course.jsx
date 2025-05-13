
function Course(props) {

    const color =
        props.category === "cse" ?
            "bg-blue-500/60 shadow-blue-500/40 inset-shadow-blue-500/40 " :
            props.category === "mth" ?
                "bg-rose-500/80 shadow-rose-500/40 inset-shadow-rose-500/40 " :
                "bg-emerald-400/50 shadow-emerald-400/40 inset-shadow-emerald-400/40 "

    return (
        <div
            className="relative group"
        >
            <p
                className={`m-1 p-2.5 text-gray-200  rounded-lg text-sm font-semibold
             inset-shadow-xs shadow-lg ${color}`}
            >
                {props.title}
            </p>
            <p
                className="group-hover:block z-1 transition-all duration-300 translate-x-10 group-hover:translate-x-0 opacity-0 group-hover:opacity-100
                absolute left-1 top-full mt-1 w-fit p-2 bg-white/35 backdrop-blur-lg text-sm rounded-lg shadow-lg"
            >
                {props.description}
            </p>
        </div>
    )
}

export default Course