const textInput = document.getElementById('userText');
const fontSelector = document.getElementById('fontSelector');
const preview = document.getElementById('previewText');

function updatePreview() {
    const text = textInput.value || "La tua scritta apparirà qui";
    const font = fontSelector.value;
    preview.textContent = text;
    preview.style.fontFamily = font;
}

textInput.addEventListener('input', updatePreview);
fontSelector.addEventListener('change', updatePreview);

window.onload = updatePreview;
