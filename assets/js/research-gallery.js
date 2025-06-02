document.addEventListener("DOMContentLoaded", () => {
    let articles;
    fetch('./content/json/research.json')
    .then(response => response.json())
    .then(data => {
        articles = data['content'];
    })
    .then(() => {
        const cont = document.querySelector('#ResearchPage #researchContent');
        for (const key in articles) {
            const d1 = document.createElement('div');
            d1.classList.add('col');

            d1.addEventListener('click', (ev) => {
                cont.querySelectorAll('#researchTopics > div').forEach(div => {
                    div.classList.remove('current');
                });
                ev.currentTarget.classList.add('current');

                cont.querySelector("#researchArticles").innerHTML = "";

                const list = articles[key];
                for (const article in list) {
                    const title = article;
                    const img = list[article].img;
                    const link = list[article].link;
                    const abstract = list[article].abstract;
                    const contributions = list[article].contributions;

                    const articleDiv = document.createElement('div');
                    articleDiv.classList.add('col');

                    cont.querySelector("#researchArticles").appendChild(articleDiv);
                    let linkContent;
                    if 

                    const articleContent = `
                        <div class="article">
                            <h3>${title}</h3>
                            ${img ? `<img src="${img}" alt="${title}">` : ''}
                            <p>${abstract}</p>
                            <h5>${contributions.length > 0 ? 'Key Contributions:' : ''}</h5>
                            <ul>
                                ${contributions.map(contribution => `<li>${contribution}</li>`).join('')}
                            </ul>
                            ${link ? `<a href="${link}" target="_blank">Read the related article for more details.</a>` : ''}
                        </div>
                    `;
                    articleDiv.innerHTML = articleContent;
                }
                if (Object.keys(list).length == 0){
                    cont.querySelector("#researchArticles").innerHTML = "<p>Coming Soon..</p>";
                }

            });

            const h5 = document.createElement('h5');
            h5.classList.add('section-title');
            h5.textContent = key;
            d1.appendChild(h5);

            cont.querySelector("#researchTopics").appendChild(d1);

            if (key == "Neuromorphic Computing for Marine Robots") d1.click();
        }
    }
)});
