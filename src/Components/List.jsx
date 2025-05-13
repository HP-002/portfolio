import ListItem from "./ListItem.jsx"

function List(props) {
    return (
        <div
            className="flex flex-wrap gap-3"
        >
            {props.list.map((item) => (
                <ListItem 
                    key={item.id}
                    name={item.name}
                    icon={item.icon}
                    description={item.description}
                    insetColor={item.insetColor}
                    shadowColor={item.shadowColor}
                />
            ))}
        </div>
    )
}

export default List