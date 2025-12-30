// Main script for Date Extractor

document.addEventListener('DOMContentLoaded', function() {
    const extractForm = document.getElementById('extractForm');
    const extractBtn = document.getElementById('extractBtn');

    if (extractForm) {
        extractForm.addEventListener('submit', function(e) {
            // Show loading state
            const spinner = extractBtn.querySelector('.spinner-border');
            const btnText = extractBtn.querySelector('.btn-text');

            if (spinner && btnText) {
                spinner.classList.remove('d-none');
                btnText.textContent = 'Extracting...';
                extractBtn.disabled = true;
            }
        });
    }
});

// Copy results to clipboard
function copyToClipboard() {
    const datesData = document.getElementById('dates-data');
    if (datesData) {
        const data = JSON.parse(datesData.textContent);
        const text = data.all_dates.join('\n');
        navigator.clipboard.writeText(text).then(() => {
            alert('Dates copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    }
}

// Download results as text
function downloadAsText() {
    const datesData = document.getElementById('dates-data');
    if (datesData) {
        const data = JSON.parse(datesData.textContent);
        const text = `Dates extracted from: ${data.url}\n\n` +
                     `Visible Dates:\n${data.visible_dates.join('\n')}\n\n` +
                     `Source Dates:\n${data.source_dates.join('\n')}`;

        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'extracted-dates.txt';
        a.click();
        URL.revokeObjectURL(url);
    }
}
