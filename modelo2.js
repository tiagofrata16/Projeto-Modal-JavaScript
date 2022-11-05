const abrirModal2 = document.getElementById('abrir-modal2');
const fecharModal2 = document.getElementById('fechar-modal2');
const modal2 = document.getElementById('modal2');
const fade2 = document.getElementById('fade2');

const toggleModal = () => {
    modal2.classList.toggle("hide2");
    fade2.classList.toggle("hide2");
}

[abrirModal2, fecharModal2, fade2].forEach((el2) =>{
    el2.addEventListener("click", () => toggleModal());
}
);
 