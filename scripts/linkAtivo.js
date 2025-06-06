//pega o elemento de cabeçalho do menu
const links = document.querySelectorAll('.cabecalho__menu__link');
// Obtém o caminho atual da URL
const currentPage = location.pathname.split("/").pop();

// Verifica cada link e adiciona a classe "ativo" se o href corresponder à página atual
links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("ativo");
    }
});
