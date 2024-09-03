export default function PDFTable(props) {
    return(
        <div className="PDFTable">
            <h1 className="PDFTitle">"Total do Mês"</h1>
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
                    <h1>Total</h1>
                </div>
            </div>
            {props.map( row => {
                return(
                    <div className='PDFLine'>
                        <div className='PDFRow'>
                            <h1>{row.nome_morador}</h1>
                        </div>
                        <div className='PDFRow'>
                            <h1>{row.c_valor}</h1>
                        </div>
                        <div className='PDFRow'>
                            <h1>{row.total_compras_i}</h1>
                        </div>
                        <div className='PDFRow'>
                            <h1>{row.valor_aluguel_i}</h1>
                        </div>
                        <div className='PDFRow'>
                            <h1>{row.valor}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}