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
        const li = document.createElement('li');
        li.classList.add('nav-item');
        li.innerHTML = `
            <a onclick="loadPosts('${cat.category_id}')" class="nav-link cat" href="#">${cat.category_name}</a>
        `;
        categoryContainer.appendChild(li);
    }
}

const loadPosts = catId => {
    const postUrl = `https://openapi.programming-hero.com/api/news/category/${catId}`;
    fetch(postUrl)
    .then(res => res.json())
    .then(data => displayPost(data.data))
    // .catch(){
    //     console.error();
    // }
}
const displayPost = categories => {
    const postsContainer = document.getElementById('news-posts');
    postsContainer.innerHTML= ``;
    for (const category of categories) {
        console.log(category);
        const createCard = document.createElement('div');
        createCard.classList.add('card');
        createCard.innerHTML = `
            <div class="row g-0">
            <div class="col-12 col-md-3 p-md-3 text-center">
            <img src="${category.thumbnail_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-12 col-md-9 d-flex flex-column pb-3">
            <div class="card-body pe-md-5">
                <h5 class="card-title">${category.title}</h5>
                <p class="card-text">${category.details.substr(0, 600)+'...'}</p>
            </div>
            <div class="cardFooter p-2 d-flex justify-content-between">
                <div class="author d-flex">
                    <img src="${category.author.img}" alt="">
                    <div class="d-flex flex-column ms-1 mb-0">
                        <small class="fw-semibold text-muted">${category.author.name}</small>
                        <small class="fw-semibold text-muted">${category.author.published_date}</small>
                    </div>
                </div>
                <div class="view">
                    <p class="fw-semibold text-muted"><i class="fa-regular fa-eye"></i><span class="ms-2">${category.total_view}</span></p>
                </div>
                <div class="ratings text-muted">
                    <i class="fa-regular fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div class="read-more-icon">
                    <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            </div>
            </div>
        `;
        postsContainer.appendChild(createCard);
    }
} 
loadCategoryName();

