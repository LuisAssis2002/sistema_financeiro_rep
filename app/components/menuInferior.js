import Bottom from "./button";

export default function MenuInferior(){
    return(
        <div className="FooterMenu">
            <Bottom classType="FooterMenuBottom" textType="FooterMenuText" imgType="FooterMenuImg" text="Gerar PDF" imgURL="/gerar_PDF.png" path="/"/>
        </div>
    );
}