function getComments() {
    return JSON.parse(localStorage.getItem('comments') || '[]');
}

// Save comments to localStorage
function saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments));
}

// VULNERABLE, Uses innerHTML without sanitization so that allows things like onerror or onload to work
function displayComments() {
    const comments = getComments();
    const container = document.getElementById('comments');
    
    container.innerHTML = comments.map(c => `
        <div class="comment-box">
            <strong>${c.name}</strong>
            <p>${c.text}</p>
        </div>
    `).join('');
}

function postComment() {
    const name = document.getElementById('name').value || 'Anonymous';
    const text = document.getElementById('comment').value;
    
    if (!text) return;
    
    const comments = getComments();
    comments.push({ name, text, date: new Date().toISOString() });
    saveComments(comments);
    
    document.getElementById('comment').value = '';
    displayComments();
}

displayComments();