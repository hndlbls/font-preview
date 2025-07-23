const translations = {
  en: {
    title: "Font Preview",
    inputLabel: "Type your text below to preview available fonts:",
    inputPlaceholder: "Type your text...",
    colFont: "Font Number",
    colPreview: "Text Preview",
    contactText: `<strong>Didn’t find the perfect font?</strong><br>Feel free to contact us — we’ll be happy to add it for you!`
  },
  it: {
    title: "Anteprima Font",
    inputLabel: "Scrivi qui il tuo testo per vedere l'anteprima dei font disponibili:",
    inputPlaceholder: "Inserisci la tua scritta...",
    colFont: "Numero Font",
    colPreview: "Anteprima Testo",
    contactText: `<strong>Non hai trovato il font perfetto?</strong><br>Contattaci e saremo felici di aggiungerlo per te!`
  },
  de: {
    title: "Schriftarten-Vorschau",
    inputLabel: "Geben Sie Ihren Text ein, um die verfügbaren Schriftarten anzuzeigen:",
    inputPlaceholder: "Geben Sie Ihren Text ein...",
    colFont: "Schriftnummer",
    colPreview: "Textvorschau",
    contactText: `<strong>Die perfekte Schriftart nicht gefunden?</strong><br>Kontaktieren Sie uns – wir fügen sie gerne hinzu!`
  },
  fr: {
    title: "Aperçu des Polices",
    inputLabel: "Tapez votre texte pour prévisualiser les polices disponibles :",
    inputPlaceholder: "Tapez votre texte...",
    colFont: "Numéro de Police",
    colPreview: "Aperçu du Texte",
    contactText: `<strong>Vous n'avez pas trouvé la police parfaite ?</strong><br>N'hésitez pas à nous contacter — nous serons ravis de l'ajouter !`
  },
  es: {
    title: "Vista Previa de Fuentes",
    inputLabel: "Escribe tu texto para previsualizar las fuentes disponibles:",
    inputPlaceholder: "Escribe tu texto...",
    colFont: "Número de Fuente",
    colPreview: "Vista previa del texto",
    contactText: `<strong>¿No encontraste la fuente perfecta?</strong><br>Contáctanos y estaremos encantados de añadirla.`
  }
};

function updateLanguage(lang) {
  const t = translations[lang] || translations["en"];
  document.getElementById("page-title").textContent = t.title;
  document.getElementById("input-label").textContent = t.inputLabel;
  document.getElementById("userText").placeholder = t.inputPlaceholder;
  document.getElementById("col-font").textContent = t.colFont;
  document.getElementById("col-preview").textContent = t.colPreview;
  document.getElementById("contact-text").innerHTML = t.contactText;
}

document.getElementById("langSelector").addEventListener("change", (e) => {
  updateLanguage(e.target.value);
  localStorage.setItem("preferredLang", e.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLang");
  const browserLang = navigator.language.slice(0, 2).toLowerCase();
  const defaultLang = savedLang || (["it", "de", "fr", "es"].includes(browserLang) ? browserLang : "en");
  document.getElementById("langSelector").value = defaultLang;
  updateLanguage(defaultLang);
});
