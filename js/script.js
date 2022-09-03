const loadCategoryName = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategoryName(data.data.news_category))
    // .catch(error){
    //     console.log('error');
    // }

};
const displayCategoryName = categories => {
    const categoryContainer = document.getElementById('category-container');
    for (const cat of categories) {
        console.log(cat.category_name);
        const li = document.createElement('li');
        li.classList.add('nav-item');
        li.innerHTML = `
            <a class="nav-link cat" href="#">${cat.category_name}</a>
        `;
        categoryContainer.appendChild(li);
    }
}
loadCategoryName();