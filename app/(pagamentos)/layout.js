import React from "react";

const ContasLayout = ({children}) => {
    return (
        <div className="CentralContainer">
            <div className="ContainerHeader">
                <h1 className="Title">Cadastro de Pagamentos</h1>
            </div>
            {children}
        </div>
    );
};

export default ContasLayout;