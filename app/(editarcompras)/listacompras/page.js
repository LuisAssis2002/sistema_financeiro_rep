'use client'

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Page() {
    const [index, setIndex] = useState();
    const [list, setList] = useState([]);

    var selector = 0;
    const router = useRouter();

    useEffect(() => {
        fetch('http://localhost:3030/getIndexConta')
        .then(response => response.json())
        .then((data) => {
            setIndex(data);
        })
        .catch((err) => console.log(err));
        fetch('http://localhost:3030/findAllCompra')
        .then(response => response.json())
        .then((data) => {
            setList(data)
        })
        .catch((err) => console.log(err))
    }, [])

    function handleClick(e) {
        const string = '/listacompras/' + e.id + '_' + e.produto + '_' + e.valor + '_' + e.id_conta
        router.push(string);
    }

    function selectorLightDark() {
        if(selector) {
            selector = 0
        } else {
            selector = 1;
        }
        return selector;
    }

    return(
        <div className="ScrollerContainer">
            <table className="ShoppingListTable" border={5}>
                <thead className="ShoppingListHeader">
                    <tr>
                        <td>Data</td>
                        <td>Morador</td>
                        <td>Produto</td>
                        <td>Valor</td>
                    </tr>
                </thead>
                <tbody>
                    {list.map( e => {
                        if(selectorLightDark) {
                            return(
                                <tr className="ShoppingListLineLight" onClick={() => handleClick(e)} id={e.key}>
                                    <td>{e.data.split("T")[0]}</td>
                                    <td>{e.nome_pagante}</td>
                                    <td>{e.produto}</td>
                                    <td>{e.valor}</td>
                                </tr>
                            );
                        } else {
                            return(
                                <tr className="ShoppingListLineDark"  onClick={() => handleClick(e.product)} id={e.key}>
                                    <td>{e.data}</td>
                                    <td>{e.nome_pagante}</td>
                                    <td>{e.produto}</td>
                                    <td>{e.valor}</td>
                                </tr>
                            );
                        };
                    })}
                </tbody>
            </table>
        </div>
    )

}