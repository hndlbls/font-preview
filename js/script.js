
const textInput = document.getElementById('userText');
const previewCells = document.querySelectorAll('.font-preview');
const radioButtons = document.querySelectorAll('input[name="fontChoice"]');
const finalPreview = document.getElementById('finalPreview');

function updatePreviews() {
    const text = textInput.value || "La tua scritta qui";
    previewCells.forEach(cell => {
        cell.textContent = text;
    });
    updateFinalPreview();
}

function updateFinalPreview() {
    const selected = document.querySelector('input[name="fontChoice"]:checked');
    const text = textInput.value || "La tua scritta qui";
    finalPreview.textContent = text;
    if (selected) {
        finalPreview.style.fontFamily = selected.value;
    }
}

textInput.addEventListener('input', updatePreviews);
radioButtons.forEach(btn => btn.addEventListener('change', updateFinalPreview));

window.onload = () => {
    updatePreviews();
    updateFinalPreview();
};
