export default function ValueInput(props) {
    return(
        <label className="InputName">{props.text}:
                <input 
                value={props.value} 
                onChange={props.handler} 
                className="ValueInput" 
                type="number" 
                placeholder="0,00"
                />
        </label>
    );
}