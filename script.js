---
---

const REPOSITORY_URL = "{{ site.baseurl }}";
const DESCRIPTION = "{{ site.description }}";
const CONTENT_DIRECORY = "{{ site.content_directory }}";

let START_DATE = new Date("{{ site.start_date }}") || new Date(); // Months are zero-based
let END_DATE = new Date("{{ site.end_date }}") || new Date();

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

    let startDate = sd || new Date(); // Months are zero-based
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
fetchEntries(START_DATE, END_DATE);
