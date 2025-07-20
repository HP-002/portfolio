import { motion } from "motion/react"

function ListItem(props) {
    const iconIsBlack = props.name === "Pandas" || props.name === "MicroPython" || props.name === "Node.js" || props.name === "Express.js" || props.name === "scikit-learn";

    const insetColors = {
        "white": "inset-shadow-white",

        // Orange shades
        "orange-300": "inset-shadow-orange-300",
        "orange-500": "inset-shadow-orange-500",
        "orange-700": "inset-shadow-orange-700",

        // Sky/Blue shades
        "sky-600": "inset-shadow-sky-600",
        "sky-800": "inset-shadow-sky-800",
        "blue-200": "inset-shadow-blue-200",

        // Violet shades
        "violet-500" : "inset-shadow-violet-500",

        // Yellow shades
        "yellow-300": "inset-shadow-yellow-300",
        "yellow-400": "inset-shadow-yellow-400",
        "yellow-500": "inset-shadow-yellow-500",

        // Lime shades
        "lime-300": "inset-shadow-lime-300",
        "lime-500": "inset-shadow-lime-500",

        // Red shades
        "red-400": "inset-shadow-red-400",
        "red-500": "inset-shadow-red-500",
        "rose-500": "inset-shadow-rose-500",

        // Cyan
        "cyan-500": "inset-shadow-cyan-500",
    }

    const shadowColors = {
        // Neutral
        white: "shadow-white",
        "slate-500": "shadow-slate-500",

        // Blue shades
        "blue-300": "shadow-blue-300",
        "blue-400": "shadow-blue-400",
        "blue-500": "shadow-blue-500",
        "sky-600": "shadow-sky-600",

        // Yellow/Amber shades
        "amber-300": "shadow-amber-300",
        "amber-500": "shadow-amber-500",
        "yellow-300": "shadow-yellow-300",
        "yellow-500": "shadow-yellow-500",

        // Orange shades
        "orange-500": "shadow-orange-500",
        "orange-700": "shadow-orange-700",

        // Violet/Purple shades
        "violet-400": "shadow-violet-400",
        "violet-500": "shadow-violet-500",

        // Cyan
        "cyan-500": "shadow-cyan-500",

        // Lime/Green shades
        "lime-300": "shadow-lime-300",
        "lime-500": "shadow-lime-500",
        "green-500": "shadow-green-500",

        // Pink
        "pink-500": "shadow-pink-500"
    };

    console.log(motion);

    const cls = `pt-2 pb-2 pl-4 pr-4 w-[180px] flex gap-3 rounded-2xl items-center bg-white/10
                hover:inset-shadow-xs hover:shadow-xs ${insetColors[props.insetColor]} ${shadowColors[props.shadowColor]}`

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            whileTap={{ scale: 0.95 }}
            className={cls}
        >
            {/* Left */}
            <img
                src={props.icon}
                className={`h-7 ${iconIsBlack ? "bg-white rounded-md p-0.5" : ""}`}
            />

            {/* Right */}
            <div>
                {/* Top */}
                <h1
                    className="text-sm font-bold text-neutral-300"
                >
                    {props.name}
                </h1>

                {/* Bottom */}
                <p
                    className="text-[10px] font-semibold pb-0.5 text-neutral-400"
                >
                    {props.description}
                </p>
            </div>
        </motion.div>
    )
}

export default ListItem