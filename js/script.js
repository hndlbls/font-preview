/*  ====== TRADUZIONI ====== */
const translations = {
  en: {
    title: "Font Preview",
    inputLabel: "Type your text below to preview available fonts:",
    inputPlaceholder: "Type your text...",
    sample: "Your text here",
    colFont: "Font Number",
    colPreview: "Text Preview",
    contactText: `<strong>Didn’t find the perfect font?</strong><br>Feel free to contact us — we’ll be happy to add it for you!`
  },
  it: {
    title: "Anteprima Font",
    inputLabel: "Scrivi qui il tuo testo per vedere l'anteprima dei font disponibili:",
    inputPlaceholder: "Inserisci la tua scritta...",
    sample: "La tua scritta qui",
    colFont: "Numero Font",
    colPreview: "Anteprima Testo",
    contactText: `<strong>Non hai trovato il font perfetto?</strong><br>Contattaci e saremo felici di aggiungerlo per te!`
  },
  de: {
    title: "Schriftarten-Vorschau",
    inputLabel: "Geben Sie Ihren Text ein, um die verfügbaren Schriftarten anzuzeigen:",
    inputPlaceholder: "Geben Sie Ihren Text ein...",
    sample: "Ihr Text hier",
    colFont: "Schriftnummer",
    colPreview: "Textvorschau",
    contactText: `<strong>Die perfekte Schriftart nicht gefunden?</strong><br>Kontaktieren Sie uns – wir fügen sie gerne hinzu!`
  },
  fr: {
    title: "Aperçu des Polices",
    inputLabel: "Tapez votre texte pour prévisualiser les polices disponibles :",
    inputPlaceholder: "Tapez votre texte...",
    sample: "Votre texte ici",
    colFont: "Numéro de Police",
    colPreview: "Aperçu du Texte",
    contactText: `<strong>Vous n'avez pas trouvé la police parfaite ?</strong><br>N'hésitez pas à nous contacter — nous serons ravis de l'ajouter !`
  },
  es: {
    title: "Vista Previa de Fuentes",
    inputLabel: "Escribe tu texto para previsualizar las fuentes disponibles:",
    inputPlaceholder: "Escribe tu texto...",
    sample: "Tu texto aquí",
    colFont: "Número de Fuente",
    colPreview: "Vista previa del texto",
    contactText: `<strong>¿No encontraste la fuente perfecta?</strong><br>Contáctanos y estaremos encantados de añadirla.`
  }
};

/* ====== RIFERIMENTI DOM ====== */
const textInput    = document.getElementById('userText');
const previewCells = document.querySelectorAll('.font-preview');
const langSelect   = document.getElementById('langSelector');

/* ====== UTIL ====== */
const defaultSamples = Object.values(translations).map(t => t.sample.trim());

let userTyped = false;

/* ====== FUNZIONI ====== */
function updatePreviews() {
  const txt = textInput.value.trim() || textInput.placeholder;
  previewCells.forEach(cell => cell.textContent = txt);
}

function updateLanguage(lang) {
  const t = translations[lang] || translations.en;

  // Testi statici
  document.getElementById('page-title').textContent = t.title;
  document.getElementById('input-label').textContent = t.inputLabel;
  document.getElementById('col-font').textContent = t.colFont;
  document.getElementById('col-preview').textContent = t.colPreview;
  document.getElementById('contact-text').innerHTML = t.contactText;

  // Placeholder
  textInput.placeholder = t.inputPlaceholder;

  // Se l'utente NON ha digitato oppure il valore è uno dei default, aggiorna anche il value
  if (!userTyped || defaultSamples.includes(textInput.value.trim())) {
    textInput.value = t.sample;
  }

  updatePreviews();
}

/* ====== EVENTI ====== */
textInput.addEventListener('input', () => {
  userTyped = textInput.value.trim().length > 0;
  updatePreviews();
});

langSelect.addEventListener('change', e => {
  const lang = e.target.value;
  localStorage.setItem('preferredLang', lang);
  updateLanguage(lang);
});

/* ====== INIT ====== */
document.addEventListener('DOMContentLoaded', () => {
  const savedLang   = localStorage.getItem('preferredLang');
  const browserLang = navigator.language.slice(0,2).toLowerCase();
  const defaultLang = savedLang || (["it","de","fr","es"].includes(browserLang) ? browserLang : "en");

  langSelect.value = defaultLang;
  userTyped = false; // inizialmente nessun input utente
  updateLanguage(defaultLang);
});
