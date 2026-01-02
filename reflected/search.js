
function displayResults() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q');
    
    if (query) {
        // VULNERABLE: Using innerHTML with unsanitized input
        document.getElementById('results').innerHTML = `
            <div class="results">
                <p>Showing results for: <strong>${query}</strong></p>
                <p>No products found matching "${query}"</p>
            </div>
        `;
        
        // Also populate the search box
        document.getElementById('searchInput').value = query;
    }
}

function search(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value;
    window.location.href = `?q=${encodeURIComponent(query)}`;
}

displayResults();

