export default function InputRadio(props){
    return(
        <div>
            <input type="radio" className={`w-4 h-4 rounded accent-[#C92071]
            ${props.className}
            `}
            name={props.name}
            id={props.id}
            value={`${props.value}`}
            />
        </div>
    )
}