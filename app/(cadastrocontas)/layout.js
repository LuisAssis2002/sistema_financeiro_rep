import React from "react";

const ContasLayout = ({children}) => {
    return (
        <div className="CentralContainer">
            <div className="ContainerHeader">
                <h1 className="Title">Cadastro de Contas</h1>
            </div>
            <div className="InputLabels">
                {children}
            </div>        
        </div>
    );
};

export default ContasLayout;