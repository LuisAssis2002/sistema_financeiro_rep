export default function SelectInput(props) {
    return(
        <label className="InputName">{props.text}:
            <select value= {props.value} onChange={props.handler} className="SelectInput">
                {props.options.map(e => (
                    <option value={e.nome}>{e.nome}</option>
                ))}
            </select>
        </label>
    );
}