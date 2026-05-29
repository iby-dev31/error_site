const head_elemend = document.querySelector('head');
const title_elemend = document.querySelector('title');

if (typeof page_name !== 'undefined') {
    console.log("Переменная существует и объявлена");
    head_elemend.appendChild(title_elemend).textContent = page_name + " - " + 'Сила в Любви'
} else {
    console.log("Переменная не существует");
    head_elemend.appendChild(title_elemend).textContent = 'Сила в Любви'
}