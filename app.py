from flask import Flask, render_template, request, redirect, url_for, flash
import re
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'your-secret-key-here-change-in-production'

@app.route('/')
def index():
    """Main page with URL input form"""
    return render_template('index.html')

@app.route('/extract', methods=['POST'])
def extract_dates():
    """Extract dates from the provided URL(s)"""
    # Single URL processing
    single_url = request.form.get('url', '').strip()

    # Bulk URLs processing
    bulk_urls = request.form.get('urls_bulk', '').strip()

    if bulk_urls:
        # Process multiple URLs
        urls = [url.strip() for url in bulk_urls.split('\n') if url.strip()]
        return process_bulk_urls(urls)
    elif single_url:
        # Process single URL
        return process_single_url(single_url)
    else:
        flash('Please enter at least one URL', 'error')
        return redirect(url_for('index'))

def process_single_url(url):
    """Process a single URL and return results"""
    try:
        # For demo purposes, we'll return sample dates
        # In a real app, you would scrape the URL here
        visible_dates = [
            '2025-12-30',
            'December 30, 2025',
            '12/30/2025'
        ]
        source_dates = [
            '2025-12-29',
            'Dec 29, 2025'
        ]
        all_dates = visible_dates + source_dates

        return render_template('results.html',
                             url=url,
                             dates=all_dates,
                             visible_dates=visible_dates,
                             source_dates=source_dates)
    except Exception as e:
        flash(f'Error processing URL: {str(e)}', 'error')
        return redirect(url_for('index'))

def process_bulk_urls(urls):
    """Process multiple URLs and return results"""
    results = []
    total_dates = 0

    for url in urls[:20]:  # Limit to 20 URLs
        try:
            # For demo purposes, we'll return sample dates
            visible_dates = [f'2025-12-{30-len(results)}', 'Dec 30, 2025']
            source_dates = [f'12/{30-len(results)}/2025']
            all_dates = visible_dates + source_dates

            results.append({
                'url': url,
                'visible_dates': visible_dates,
                'source_dates': source_dates,
                'total_dates': len(all_dates),
                'error': None
            })
            total_dates += len(all_dates)
        except Exception as e:
            results.append({
                'url': url,
                'error': str(e),
                'visible_dates': [],
                'source_dates': [],
                'total_dates': 0
            })

    return render_template('bulk_results.html',
                         results=results,
                         total_urls=len(urls),
                         total_dates=total_dates)

if __name__ == '__main__':
    print("=" * 60)
    print("🚀 Date Extractor App Starting!")
    print("=" * 60)
    print("📦 Updated Dependencies:")
    print("   ✅ Font Awesome: 7.1.0 (latest)")
    print("   ✅ Bootstrap: 5.3.8 (latest)")
    print("=" * 60)
    print("🌐 Open your browser and go to:")
    print("   http://127.0.0.1:5000")
    print("=" * 60)
    print("Press CTRL+C to stop the server")
    print("=" * 60)

    app.run(debug=True, host='0.0.0.0', port=5000)
