const abrirModal1 = document.getElementById('abrir-modal1');
const fecharModal1 = document.getElementById('fechar-modal1');
const modal1 = document.getElementById('modal1');
const fade1 = document.getElementById('fade1');

const toggleModal1 = () => {
    modal1.classList.toggle("hide1");
    fade1.classList.toggle("hide1");
}

[abrirModal1, fecharModal1, fade1].forEach((el1) =>{
    el1.addEventListener("click", () => toggleModal1());
}
);