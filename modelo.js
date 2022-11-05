const abrirModal = document.getElementById('abrir-modal');
const fecharModal = document.getElementById('fechar-modal');
const modal = document.getElementById('modal');
const fade = document.getElementById('fade');

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

[abrirModal, fecharModal, fade].forEach((el) =>{
    el.addEventListener("click", () => toggleModal());
}
);
 