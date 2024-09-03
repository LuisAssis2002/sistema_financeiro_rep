import React from "react";

const CadastroLayout = ({children}) => {
    return (
        <div className="CentralContainer">
            <div className="ContainerHeader">
                <h1 className="Title">Cadastro de Morador</h1>
            </div>
            <div className="InputLabels">
                {children}
            </div>
        </div>
    );
};

export default CadastroLayout;