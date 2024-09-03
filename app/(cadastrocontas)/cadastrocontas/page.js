'use client'

import ValueInput from "../../components/valueInput";
import { useState, useEffect } from "react";

export default function Page() {
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState();
    const [datas, setDatas] = useState({
        eletricBill: '',
        waterBill: '',
        internetBill: '',
        iptuValue: '',
        others: '',
    });

    useEffect(() => {
        fetch('http://localhost:3030/getIndexConta')
        .then(response => response.json())
        .then((data) => {
            setIndex(data)
        })
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        if(count == 1){
            handleDone();
        }
    }, [count]);

    function handleCancelWrite() {
        setDatas({
            eletricBill: '',
            waterBill: '',
            internetBill: '',
            iptuValue: '',
            others: '',
        });
    }

    function handleChangeEletricBill(e) {
        setDatas({
            ...datas,
            eletricBill: e.target.value,
        })
    }

    function handleChangeWaterBill(e) {
        setDatas({
            ...datas,
            waterBill: e.target.value,
        })
    }

    function handleChangeInternetBill(e) {
        setDatas({
            ...datas,
            internetBill: e.target.value,
        })
    }

    function handleChangeIptuValue(e) {
        setDatas({
            ...datas,
            iptuValue: e.target.value,
        })
    }

    function handleChangeOthers(e) {
        setDatas({
            ...datas,
            others: e.target.value,
        })
    }

    function handleDone(e) {
        if(datas.eletricBill === '') return alert("Isira a conta eletrica!");
        if(datas.internetBill === '') return alert("Isira a conta de internet, 0 caso nao tenha!");
        if(datas.iptuValue === '') return alert("Isira o IPTU, coloque 0 caso nao tenha!");
        if(datas.others === '') return alert("Isira o valor dos outros e 0 caso nao tenha!");
        if(datas.waterBill === '') return alert("Isira a conta d'agua, 0 caso nao tenha!");
        fetch('http://localhost:3030/updateConta', {
            method:'PUT',
            body: JSON.stringify({
                id: index,
                c_agua: datas.waterBill,
                c_eletrica: datas.eletricBill,
                c_internet: datas.internetBill,
                IPTU: datas.iptuValue,
                outros: datas.others,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        fetch('http://localhost:3030/calc')
        .then(response => response.json())
        .then((data) => {
            for(var i = 0; i < data.length; i++) {
                console.log(data.length);
                
                fetch('http://localhost:3030/createPagamento', {
                    method:'POST',
                    body: JSON.stringify({
                        id_conta: index,
                        pagante: data[i].nome_morador, 
                        valor: 0, 
                        caixa: 0
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                fetch('http://localhost:3030/createMensalidade', {
                    method:'POST',
                    body: JSON.stringify({
                        nome_morador: data[i].nome_morador, 
                        id_conta: index, 
                        valor: data[i].valor, 
                        caixa: data[i].caixa
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
            }
        })
        .catch((err) => console.log(err))
        fetch('http://localhost:3030/createConta', {
            method:'POST',
            body: JSON.stringify({
                c_agua: 0,
                c_eletrica: 0,
                c_internet: 0,
                IPTU: 0,
                outros: 0,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        

        handleCancelWrite();
        return alert("CONTAS FECHADAS!!");
    }

    return(
        <>
            <ValueInput
            text="Conta Elétrica"
            value={datas.eletricBill} 
            handler={handleChangeEletricBill} 
            />
            <ValueInput
            text="Conta d'Água"
            value={datas.waterBill} 
            handler={handleChangeWaterBill} 
            />
            <ValueInput
            text="Conta d'Internet"
            value={datas.internetBill} 
            handler={handleChangeInternetBill} 
            />
            <ValueInput
            text="Valor do IPTU"
            value={datas.iptuValue} 
            handler={handleChangeIptuValue} 
            />
            <ValueInput
            text="Outros"
            value={datas.others} 
            handler={handleChangeOthers} 
            />
            <div className="buttonsGeneral">
                <button onClick={handleCancelWrite} className="Cancel" type="button">Cancelar</button>
                <button onClick={() => {setCount(1)}} className="Done" type="button">Concluir</button>
            </div>
        </>
    )
}