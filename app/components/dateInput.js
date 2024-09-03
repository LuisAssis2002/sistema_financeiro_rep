export default function DateInput(props) {
    return(
        <label className="InputName">{props.text}:
                <input 
                value={props.value} 
                onChange={props.handler} 
                className="DateInput" 
                type="date" 
                />
        </label>
    );
}