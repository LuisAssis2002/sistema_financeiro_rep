'use client'

import { useRef, useState, useEffect } from 'react';
import generatePDF from 'react-to-pdf';    
import { options } from "../../components/pdf"
import PDFTable from '../../components/pdfTable';

export default function Page() {
   const targetRef = useRef();
   const [conta, setConta] = useState([]);
   const [gastos, setGastos] = useState([]);
   const [list, setList] = useState([]);

   useEffect(() => {
      fetch('http://localhost:3030/calc')
      .then(response => response.json())
      .then((data) => {
          setGastos(data);
      })
      .catch((err) => console.log(err))
      fetch('http://localhost:3030/findAllCompra0')
      .then(response => response.json())
      .then((data) => {
          setList(data)
      })
      .catch((err) => console.log(err))
      fetch('http://localhost:3030/findConta')
      .then(response => response.json())
      .then((data) => {
          setConta(data)
      })
      .catch((err) => console.log(err))
  }, [])

   return (
      <>
         <div className='PDF' ref={targetRef}>
            <div className="PDFTable">
               <h1 className="PDFTitle">Total do Mês</h1>
               <div className='PDFLine'>
                  <div className='PDFHeaderTitle'>
                     <h1>Morador</h1>
                  </div>
                  <div className='PDFHeaderTitle'>
                     <h1>Contas</h1>
                  </div>
                  <div className='PDFHeaderTitle'>
                     <h1>Compras</h1>
                  </div>
                  <div className='PDFHeaderTitle'>
                     <h1>Aluguel</h1>
                  </div>
                  <div className='PDFHeaderTitle'>
                     <h1>Faltande</h1>
                  </div>
                  <div className='PDFHeaderTitle'>
                     <h1>Total</h1>
                  </div>
               </div>
               {gastos.map( row => {
                  return(
                     <div className='PDFLine'>
                           <div className='PDFRow'>
                              <h1>{row.nome_morador}</h1>
                           </div>
                           <div className='PDFRow'>
                              <h1>{row.c_valor.toFixed(2)}</h1>
                           </div>
                           <div className='PDFRow'>
                              <h1>{row.valor_compras_i.toFixed(2)}</h1>
                           </div>
                           <div className='PDFRow'>
                              <h1>{row.valor_aluguel_i}</h1>
                           </div>
                           <div className='PDFRow'>
                              <h1>{row.valor_faltante_i.toFixed(2)}</h1>
                           </div>
                           <div className='PDFRow'>
                              <h1>{row.valor.toFixed(2)}</h1>
                           </div>
                     </div>
                  )
               })}
            </div>
            <div className="PDFTable">
               <h1 className="PDFTitle">Compras</h1>
               <div className='PDFLine'>
                  <div className='PDFHeaderTitle'>
                     <h1>Conta Elétrica</h1>
                  </div>
                  <div className='PDFHeaderTitle'>
                     <h1>Conta d'Água</h1>
                  </div>
                  <div className='PDFHeaderTitle'>
                     <h1>Internet</h1>
                  </div>
                  <div className='PDFHeaderTitle'>
                     <h1>IPTU</h1>
                  </div>
                  <div className='PDFHeaderTitle'>
                     <h1>outros</h1>
                  </div>
               </div>
               {conta.map(row => {
                  return(
                     <div className='PDFLine'>
                        <div className='PDFRow'>
                           <h1>{row.c_eletrica}</h1>
                        </div>
                        <div className='PDFRow'>
                           <h1>{row.c_agua}</h1>
                        </div>
                        <div className='PDFRow'>
                           <h1>{row.c_internet}</h1>
                        </div>
                        <div className='PDFRow'>
                           <h1>{row.IPTU}</h1>
                        </div>
                        <div className='PDFRow'>
                           <h1>{row.outros}</h1>
                        </div>
                     </div>
                  )
               })}
            </div>
            <div className="PDFTable">
               <h1 className="PDFTitle">Compras</h1>
               <div className='PDFLine'>
                  <div className='PDFHeaderTitle'>
                     <h1>Morador</h1>
                  </div>
                  <div className='PDFHeaderTitle'>
                     <h1>Produto</h1>
                  </div>
                  <div className='PDFHeaderTitle'>
                     <h1>Valor</h1>
                  </div>
               </div>
               {list.map( row => {
                  return(
                     <div className='PDFLine'>
                           <div className='PDFRow'>
                              <h1>{row.nome_pagante}</h1>
                           </div>
                           <div className='PDFRow'>
                              <h1>{row.produto}</h1>
                           </div>
                           <div className='PDFRow'>
                              <h1>{row.valor}</h1>
                           </div>
                     </div>
                  )
               })}
            </div>
         </div>
         <div className='FooterMenu'>
            <button  className="FooterMenuButton" onClick={() => generatePDF(targetRef, options)}>Download PDF</button>
         </div>
      </>
   )
}