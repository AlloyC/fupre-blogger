// Mock data for articles (You can replace this with data fetched from a server)
const articles = [
    { title: "Understanding JavaScript Closures", link: "article1.html" },
    { title: "CSS Grid vs Flexbox", link: "article2.html" },
    { title: "A Guide to HTML5 Semantic Elements", link: "article3.html" },
    { title: "Best Practices for Responsive Design", link: "article4.html" },
    { title: "Getting Started with Python", link: "article5.html" },
    { title: "Why Learn Data Structures?", link: "article6.html" },
    { title: "Introduction to Machine Learning", link: "article7.html" },
    { title: "Basics of Web Accessibility", link: "article8.html" },
    { title: "How to Optimize Your Website", link: "article9.html" },
    { title: "Understanding REST APIs", link: "article10.html" },
];

let currentArticleIndex = 0;
const articlesPerPage = 3; // Number of articles to display at a time

function loadArticles() {
    const articleList = document.getElementById("article-list");
    for (let i = 0; i < articlesPerPage && currentArticleIndex < articles.length; i++) {
        const article = articles[currentArticleIndex];
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = article.link;
        link.textContent = article.title;
        listItem.appendChild(link);
        articleList.appendChild(listItem);
        currentArticleIndex++;
    }

    if (currentArticleIndex >= articles.length) {
        document.getElementById("load-more").style.display = "none";
    }
}

document.getElementById("load-more").addEventListener("click", loadArticles);

// Load initial articles when the page loads
loadArticles();