import { useState } from "react";
import ValueInput from "./valueInput";

export default function PayingMenu(props) {

    const [datas, setDatas] = useState({
        id: props.id,
        payed: props.payed,
        safe: props.safe,
        hidden: props.hidden
    });

    function handleChangePayed (e) {
        setDatas({
            ...datas,
            payed: e.target.value,
        });
    }

    function handleChangeSafe (e) {
        setDatas({
            ...datas,
            safe: e.target.value,
        });
    }

    function handleChangeRegister (e) {
        setDatas({
            ...datas,
            hidden: true,
        });
        fetch('http://localhost:3030/updatePagamento', {
            method:'PUT',
            body: JSON.stringify({
                id: datas.id, 
                valor: datas.payed, 
                caixa: datas.safe
            }),
            headers: {
                "Content-Type": "application/json",
            }
        })
    }

    return(
        <div className="PayingMenuLabel" hidden={props.oculter ? !datas.hidden : datas.hidden}>
            <h1 className="PayingText">{props.name}</h1>
            <ValueInput
            text="Valor Pago"
            value={datas.payed} 
            handler={handleChangePayed}
            />
            <ValueInput
            text="Caixa Pago"
            value={datas.safe} 
            handler={handleChangeSafe}
            />
            <button className="Done" type="button" onClick={handleChangeRegister}>Cadastrar</button>
        </div>
    );
}