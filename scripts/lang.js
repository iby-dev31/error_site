let currentLang = 'ru';

async function loadLanguage(lang) {
  try {
    const response = await fetch(`/config/lang/${lang}.json`);
    const translations = await response.json();
    
    // Обходим все ключи из JSON
    Object.keys(translations).forEach(id => {
      const element = document.getElementById(id);
      // Проверяем, существует ли элемент с таким ID
      if (element) {
        element.textContent = translations[id];
      } else {
        console.warn(`Элемент с id="${id}" не найден в HTML`);
      }
    });
    
    currentLang = lang;
    if (localStorage.getItem('cookieChoice') == "accepted") {
        localStorage.setItem('lang', lang);
    }
  } catch (error) {
    console.error('Ошибка загрузки языка:', error);
  }
}

// Переключатель языка
document.getElementById('languageSwitcher').addEventListener('change', (e) => {
  loadLanguage(e.target.value);
});

// Загружаем сохранённый язык при старте
const savedLang = localStorage.getItem('lang') || 'ru';
document.getElementById('languageSwitcher').value = savedLang;
loadLanguage(savedLang);