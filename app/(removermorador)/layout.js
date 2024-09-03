import React from "react";

const RemoverLayout = ({children}) => {
    return (
        <div className="CentralContainer">
            <div className="ContainerHeader">
                <h1 className="Title">Remoção de Morador</h1>
            </div>
            <div className="InputLabels">
                {children}
            </div>
        </div>
    );
};

export default RemoverLayout;