---
---

const REPOSITORY_URL = "{{ site.baseurl }}";
const DESCRIPTION = "Diary_description.md";
const CONTENT_DIRECORY = "entries"

const dateToString = (d) => {
    return `${d.getFullYear()}-${(d.getMonth()+1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
}

const fetchDescription = async () => {
    const  converter = new showdown.Converter();
    const response = await fetch(`${REPOSITORY_URL}/${DESCRIPTION}`);
    const text = await response.text();

    // Convert markdown to HTML
    let html = converter.makeHtml(text);
    document.getElementById('description').innerHTML = html;
}

const fetchEntries = async (sd, ed) => {
    const  converter = new showdown.Converter();
    let content = document.getElementById('content');
    let entries = [];

    let startDate = sd || new Date(2023, 8, 17); // Months are zero-based
    let endDate = ed || new Date();
    
    for (var d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
        
        var filename = `${d.getFullYear()}-${(d.getMonth()+1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}.md`;

        const response = await fetch(`${REPOSITORY_URL}/${CONTENT_DIRECORY}/${filename}`);
        if (response.status === 200) {

            const text = await response.text();

            let html = converter.makeHtml(text);
            let div = document.createElement('div');
            div.innerHTML = html;
            div.id = `entry-${dateToString(d)}`;
            div.className = 'entry';
            content.appendChild(div);
            entries.push(div);
        };
    }
    return entries;
}

fetchDescription();

// Fetch diary entries from 2023-09-17 onwards
let startDate = new Date(2023, 8, 17); // Months are zero-based
let entries = fetchEntries(startDate);
