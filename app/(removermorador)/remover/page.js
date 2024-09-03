'use client'

import { useState, useEffect } from "react";
import SelectInput from "../../components/selectInput";

export default function Page() {

    const [morador, setMorador] = useState([]);
    const [datas, setDatas] = useState({
        morador: "Selecione",
        reason: "Formado",
        details: '',
        hidden: true,
    });

    const reasons = [{nome: "Formado"}, {nome: "Expulso"},{nome: "Outro"}];

    useEffect(() => {
        fetch('http://localhost:3030/findAllPessoa')
        .then(response => response.json())
        .then((data) => {
            setMorador(data)
            setDatas({
                ...datas,
                morador: data[0].nome,
            })
        })
    }, []);
        

    function handleCancelWrite() {
        setDatas({
            ...datas,
            reason: "Formado",
            details: '',
            hidden: true,
        });
    }

    function handleChangeResident(e) {
        setDatas({
            ...datas,
            morador: e.target.value,
        })
    }

    function handleChangeReason(e) {
        if(e.target.value == "Formado") {
            setDatas({
                ...datas,
                reason: e.target.value,
                hidden: true,
            })
        } else {
            setDatas({
                ...datas,
                reason: e.target.value,
                hidden: false,
            })
        }
    }

    function handleChangeDetails(e) {
        if((datas.reason == "Expulso") || (datas.reason == "Outro")){
            setDatas({
                ...datas,
                details: e.target.value,
            })
        }
    }

    function handleDone() {
        fetch('http://localhost:3030/updatePessoa', {
            method:'PUT',
            body: JSON.stringify({
                nome: datas.morador,
                morador: false,
                saida: datas.details,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        handleCancelWrite();
        return alert("Morador removido!");
    }

    return(
        <>
            <SelectInput
            text="Nome do Morador"
            value={datas.morador}
            options={morador}
            handler={handleChangeResident}
            />
            <SelectInput
            text="Motivo da Remoção"
            value={datas.reason}
            options={reasons}
            handler={handleChangeReason}
            />
            <textarea 
            className="TextArea"
            name="text" 
            rows="5" 
            value={datas.details}
            onChange={handleChangeDetails} 
            placeholder="Digite os detalhes aqui.."
            hidden={datas.hidden}
            />
            <div>
                <button onClick={handleCancelWrite} className="Cancel" type="button">Cancelar</button>
                <button onClick={handleDone} className="Done" type="button">Concluir</button>
            </div>
        </>
    )
}