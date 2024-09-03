import React from "react";

const ComprasLayout = ({children}) => {
    return (
        <div className="CentralContainer">
            <div className="ContainerHeader">
                <h1 className="Title">Fechamento de Contas</h1>
            </div>
            {children}
        </div>
    );
};

export default ComprasLayout;