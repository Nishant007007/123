// Bulk processing scripts

function copyAllToClipboard() {
    const bulkData = document.getElementById('bulk-results-data');
    if (bulkData) {
        const results = JSON.parse(bulkData.textContent);
        let text = 'Bulk Date Extraction Results\n\n';

        results.forEach(result => {
            text += `URL: ${result.url}\n`;
            if (result.error) {
                text += `Error: ${result.error}\n`;
            } else {
                text += `Dates: ${[...result.visible_dates, ...result.source_dates].join(', ')}\n`;
            }
            text += '\n';
        });

        navigator.clipboard.writeText(text).then(() => {
            alert('All results copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    }
}

function downloadAllAsText() {
    const bulkData = document.getElementById('bulk-results-data');
    if (bulkData) {
        const results = JSON.parse(bulkData.textContent);
        let text = 'Bulk Date Extraction Results\n\n';

        results.forEach(result => {
            text += `URL: ${result.url}\n`;
            if (result.error) {
                text += `Error: ${result.error}\n`;
            } else {
                text += `Visible Dates: ${result.visible_dates.join(', ')}\n`;
                text += `Source Dates: ${result.source_dates.join(', ')}\n`;
            }
            text += '\n' + '='.repeat(80) + '\n\n';
        });

        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'bulk-extracted-dates.txt';
        a.click();
        URL.revokeObjectURL(url);
    }
}

function downloadAsCSV() {
    const bulkData = document.getElementById('bulk-results-data');
    if (bulkData) {
        const results = JSON.parse(bulkData.textContent);
        let csv = 'URL,Status,Visible Dates,Source Dates,Total Dates\n';

        results.forEach(result => {
            const url = result.url.replace(/"/g, '""');
            const status = result.error ? 'Error' : 'Success';
            const visibleDates = result.visible_dates ? result.visible_dates.join('; ') : '';
            const sourceDates = result.source_dates ? result.source_dates.join('; ') : '';
            const totalDates = result.total_dates || 0;

            csv += `"${url}","${status}","${visibleDates}","${sourceDates}",${totalDates}\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'bulk-extracted-dates.csv';
        a.click();
        URL.revokeObjectURL(url);
    }
}
