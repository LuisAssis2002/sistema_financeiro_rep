'use client'

import PayingMenu from "../../components/payingMenu"
import { useState, useEffect } from "react";

export default function Page() {

    const [pagamentos, setPagamentos] = useState([]);
    const [hiddenConst, setHiddenConst] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3030/findAllPagamento')
        .then(response => response.json())
        .then((data) => {
            setPagamentos(data)
        })
        .catch((err) => console.log(err))
    }, [])

    function handleChangeCheckBox () {
        setHiddenConst(!hiddenConst);
    }

    return(
        <>
            <div className="PayingMenu">
                {pagamentos.map( e => {
                    var h = false;
                    if(e.valor != 0) {
                        h = true;
                    } else {
                        h = false;
                    };
                    return(
                        <PayingMenu
                        name={e.pagante}
                        id={e.id}
                        payed={e.valor}
                        safe={e.caixa}
                        hidden={ h }
                        oculter={hiddenConst}
                        />
                    )
                })}
            </div>
            <div className="FooterMenu">
                <div className="CheckBox">
                    <label for="oculter">Pagamentos Cadastrados</label>
                    <input key="oculter" className="Box" type="checkbox" checked={hiddenConst} onChange={handleChangeCheckBox}/>
                </div>
            </div>
        </>
    )
}
