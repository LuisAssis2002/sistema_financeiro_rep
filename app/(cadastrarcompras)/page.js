'use client'

import { useState, useEffect } from "react";
import ValueInput from "../components/valueInput";
import TextInput from "../components/textInput";
import SelectInput from "../components/selectInput";


export default function Page() {

    const [index, setIndex] = useState();
    const [pessoas, setPessoas] = useState([]);
    const [datas, setDatas] = useState({
        morador: "Selecione",
        productName: "",
        value: '',
    });

    useEffect(() => {
        fetch('http://localhost:3030/findAllPessoa')
        .then(response => response.json())
        .then((data) => {
            setPessoas(data)
            setDatas({
                ...datas,
                morador: data[0].nome,
            })
            console.log(data);
        })
        .catch((err) => console.log(err));
        fetch('http://localhost:3030/getIndexConta')
        .then(response => response.json())
        .then((data) => {
            setIndex(data)
        })
        .catch((err) => console.log(err))
    }, [])

    async function handleDone() {
        if(datas.productName === '') return alert("Isira um nome do produto!");
        if(datas.value === '') return alert("Isira o valor do produto!");
        fetch('http://localhost:3030/createCompra', {
            method:'POST',
            body: JSON.stringify({
                id_conta: index,
                nome_pagante: datas.morador,
                valor: datas.value,
                produto: datas.productName,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        handleCancelWrite();
        return alert("Compra cadastrada com sucesso!!");
    }
        

    function handleCancelWrite() {
        setDatas({
            ...datas,
            productName: "",
            value: '',
        });
    }

    function handleChangeResident(e) {
        setDatas({
            ...datas,
            morador: e.target.value,
        })
    }

    function handleChangeValue(e) {
        setDatas({
            ...datas,
            value: e.target.value,
        })
    }

    function handleChangeProduct(e) {
        setDatas({
            ...datas,
            productName: e.target.value,
        })
    }

    return(
        <>
            <SelectInput
            text="Nome do Morador"
            value={datas.morador}
            options={pessoas}
            handler={handleChangeResident}
            />
            <TextInput
            text="Nome do Item"
            value={datas.productName} 
            handler={handleChangeProduct} 
            />
            <ValueInput
            text="Valor"
            value={datas.value} 
            handler={handleChangeValue}
            />
            <div className="buttonsGeneral">
                <button onClick={handleCancelWrite} className="Cancel" type="button">Cancelar</button>
                <button onClick={handleDone} className="Done" type="button">Concluir</button>
            </div>
        </>
    )
}