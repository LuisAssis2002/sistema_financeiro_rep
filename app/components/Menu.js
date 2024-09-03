import Button from "./button.js"

export default function Menu() {
    return(
        <div className="Menu">
            <h1 className="MenuTitle">Menu</h1>
            <Button classType="MenuButton" textType="MenuText" imgType="MenuImg" text="Cadastrar Compra" imgURL="/cadastrar_compras_preto.png" path="/"/>
            <Button classType="MenuButton" textType="MenuText" imgType="MenuImg" text="Editar Compra" imgURL="/editar_compras.png" path="/listacompras"/>
            <Button classType="MenuButton" textType="MenuText" imgType="MenuImg" text="Cadastrar Contas" imgURL="/cadastrar_contas_preto.png" path="/cadastrocontas"/>
            <Button classType="MenuButton" textType="MenuText" imgType="MenuImg" text="Pagamentos" imgURL="/pagamento_preto.png" path="/pagamentos"/>
            <Button classType="MenuButton" textType="MenuText" imgType="MenuImg" text="Adicionar Morador" imgURL="/adicionar_morador_preto.png" path="/cadastro"/>
            <Button classType="MenuButton" textType="MenuText" imgType="MenuImg" text="Remover Morador" imgURL="/remover_morador_preto.png" path="/remover"/>
            <Button classType="MenuButton" textType="MenuText" imgType="MenuImg" text="Gerar PDF" imgURL="/gerar_PDF.png" path="/fecharcontas"/>
        </div>
    );
}