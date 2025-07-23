
const textInput = document.getElementById('userText');
const previewCells = document.querySelectorAll('.font-preview');

function updatePreviews() {
    const text = textInput.value || "La tua scritta qui";
    previewCells.forEach(cell => {
        cell.textContent = text;
    });
}

textInput.addEventListener('input', updatePreviews);

window.onload = () => {
    updatePreviews();
};
