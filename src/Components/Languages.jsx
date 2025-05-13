import Language from "./Language.jsx"
import languages from "../data/languages.js"

function Languages() {
    return (
        <div
            className="flex flex-wrap gap-3"
        >
            {languages.map((lang) => (
                <Language 
                    key={lang.id}
                    name={lang.name}
                    icon={lang.icon}
                    description={lang.description}
                    insetColor={lang.insetColor}
                    shadowColor={lang.shadowColor}
                />
            ))}
        </div>
    )
}

export default Languages