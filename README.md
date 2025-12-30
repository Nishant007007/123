# Date Extractor Web Application

A web-based tool for extracting dates from web pages using advanced scraping techniques.

## Current Status

This repository currently contains:
- ✅ HTML templates (index.html, results.html, bulk_results.html)
- ✅ GitHub Pages deployment workflow
- ❌ Missing: Python Flask backend
- ❌ Missing: Static assets (CSS, JavaScript)
- ❌ Missing: Date extraction logic
- ❌ Missing: Dependencies file

## Your Task: Complete the Application

### 1. Create the Flask Backend (`app.py`)

Implement a Flask application with the following features:

**Required Routes:**
- `GET /` - Serve the main index.html page
- `POST /extract_dates` - Handle date extraction from single or multiple URLs
- `GET /results` - Display extraction results
- `GET /bulk_results` - Display bulk extraction results

**Required Functionality:**
- Accept single URL or multiple URLs (bulk processing)
- Extract dates using multiple methods:
  - HTML `<time>` tags
  - Meta tags (article:published_time, datePublished, etc.)
  - Visible text patterns (regex for common date formats)
  - Raw HTML source scanning
- Handle errors gracefully (invalid URLs, network errors, parsing failures)
- Return results with:
  - Extracted dates (sorted by confidence/source)
  - Source method (where the date was found)
  - Original URL
  - Timestamp of extraction

### 2. Create Static Assets

**CSS (`static/style.css`):**
- Custom styling for the date extractor interface
- Responsive design improvements
- Loading states and animations

**JavaScript (`static/script.js`):**
- Form validation (URL format checking)
- Loading spinner during extraction
- Dynamic result display
- Tab switching for single/bulk processing

### 3. Implement Date Extraction Logic

Create a date extraction module with:
- URL fetching with proper headers and timeout handling
- BeautifulSoup HTML parsing
- Regex patterns for common date formats:
  - ISO 8601 (YYYY-MM-DD)
  - US format (MM/DD/YYYY)
  - European format (DD/MM/YYYY)
  - Long format (January 1, 2024)
  - Relative dates (e.g., "2 days ago")
- Date validation and normalization
- Confidence scoring for extracted dates

### 4. Add Dependencies

Create `requirements.txt` with necessary packages:
- Flask
- requests
- beautifulsoup4
- python-dateutil
- lxml (optional, for faster parsing)

### 5. Testing & Documentation

- Add example usage in README
- Include sample URLs for testing
- Document the date extraction patterns used
- Add error handling examples

## Getting Started (After Completion)

```bash
# Install dependencies
pip install -r requirements.txt

# Run the application
python app.py

# Visit in browser
http://localhost:5000
```

## Features to Implement

- [ ] Single URL date extraction
- [ ] Bulk URL processing (up to 20 URLs)
- [ ] Multiple extraction methods (meta tags, time tags, text patterns)
- [ ] Results display with confidence scores
- [ ] Error handling for invalid URLs
- [ ] Export results as JSON/CSV
- [ ] Rate limiting for bulk requests
- [ ] Caching for repeated URLs

## Bonus Challenges

- Add unit tests for date extraction logic
- Implement async processing for bulk URLs
- Add support for JavaScript-rendered pages (Selenium/Playwright)
- Create API documentation (OpenAPI/Swagger)
- Add Docker containerization
- Implement result export in multiple formats

## Resources

- Flask Documentation: https://flask.palletsprojects.com/
- BeautifulSoup Docs: https://www.crummy.com/software/BeautifulSoup/
- Python dateutil: https://dateutil.readthedocs.io/
- Common date formats: https://en.wikipedia.org/wiki/Date_format_by_country

---

**Start with step 1:** Create the basic Flask application structure and get the index page rendering. Then progressively add the date extraction features.

Good luck! 🚀
