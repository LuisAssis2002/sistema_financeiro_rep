'use client'

import DateInput from "../../components/dateInput";
import TextInput from "../../components/textInput";
import SelectInput from "../../components/selectInput";
import { useState, useEffect } from "react";

export default function Page() {

    const [room, setRoom] = useState([]);
    const [datas, setDatas] = useState({
        name: '',
        room: 'Selecione',
        date_of_birth: '',
        city: '',
        estate: '',
        date_of_join: '',
    });

    function handleCancelWrite() {
        setDatas({
            ...datas,
            name: '',
            date_of_birth: '',
            city_es: '',
            date_of_join: '',
        });
    }

    function handleChangeName(e) {
        setDatas({
            ...datas,
            name: e.target.value,
        })
    }

    function handleChangeRoom(e) {
        setDatas({
            ...datas,
            room: e.target.value,
        })
    }

    function handleChangeBirth(e) {
        setDatas({
            ...datas,
            date_of_birth: e.target.value,
        })
    }

    function handleChangeCity(e) {
        setDatas({
            ...datas,
            city_es: e.target.value,
        })
    }

    function handleChangeJoin(e) {
        setDatas({
            ...datas,
            date_of_join: e.target.value,
        })
    }

    useEffect(() => {
        fetch('http://localhost:3030/findAllQuarto')
        .then(response => response.json())
        .then((data) => {
            setRoom(data)
            setDatas({
                ...datas,
                room: data[0].nome,
            })
        })
        .catch((err) => console.log(err))
    }, [])

    async function handleDone() {
        if(datas.name === '') return alert("Isira um nome de morador!");
        fetch('http://localhost:3030/createPessoa', {
            method:'POST',
            body: JSON.stringify({
                nome: datas.name,
                cidade: datas.city_es,
                data_matricula: datas.date_of_join,
                data_nascimento: datas.date_of_birth,
                n_quarto: datas.room}),
            headers: {
                "Content-Type": "application/json",
            }
        });
        handleCancelWrite();
        return alert("Cadastro bem sucedido!");
    }

    return(
        <>
            <TextInput
            text="Nome"
            handler={handleChangeName}
            value={datas.name}
            />
            <SelectInput
            text="Nome do Quarto"
            value={datas.room}
            options={room}
            handler={handleChangeRoom}
            />
            <TextInput
            text="Cidade - Estado de Origem"
            handler={handleChangeCity}
            value={datas.city_es}
            />
            <DateInput
            text="Data de Nascimento"
            handler={handleChangeBirth}
            value={datas.date_of_birth}
            />
            <DateInput
            text="Data de Entrada"
            handler={handleChangeJoin}
            value={datas.date_of_join}
            />
            <div className="buttonsRegister">
                <button onClick={handleCancelWrite} className="Cancel" type="button">Cancelar</button>
                <button onClick={handleDone} className="Done" type="button">Concluir</button>
            </div>
        </>
    )
}