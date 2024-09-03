export default function TextInput(props) {
    return(
        <label className="InputName">{props.text}:
                <input 
                value={props.value} 
                onChange={props.handler} 
                className="TextInput" 
                type="text" 
                placeholder="Digite aqui..."
                />
        </label>
    );
}