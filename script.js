const images = [
    {url: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80', category: 'nature', keywords: ['forest', 'trees', 'nature']},
    {url: 'https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvcmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', category: 'nature', keywords: ['forest', 'sunlight', 'trees', 'nature']},
    {url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80', category: 'nature', keywords: ['beach', 'ocean', 'nature']},

    {url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', category: 'animals', keywords: ['dog', 'puppy', 'animals']},
    {url: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8a2l0dGVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', category: 'animals', keywords: ['cat', 'kitten', 'animals']},

    {url: 'https://images.unsplash.com/photo-1520525003249-2b9cdda513bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', category: 'cities', keywords: ['washington', 'city']},
    {url: 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', category: 'cities', keywords: ['paris', 'city']},
    {url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80', category: 'cities', keywords: ['paris', 'eiffel tower', 'city']},

    {url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80', category: 'space', keywords: ['earth', 'planet', 'ocean', 'space']},
    {url: 'https://images.unsplash.com/photo-1499578124509-1611b77778c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80', category: 'space', keywords: ['full moon', 'clouds', 'moon', 'space']},
    ];
const categorySelect = document.querySelector('#categorySelect');
const searchInput = document.querySelector('#inputKeywords');
const searchButton = document.querySelector('#searchButton');
const imageList = document.querySelector('#gallery');

function filterImages() {
    const selectedCategory = categorySelect.value;
    const searchTerm = searchInput.value.toLowerCase();
    const filteredImages = images.filter(function(image) {
        if (selectedCategory === 'all') {
        return image.keywords.some(function(keyword) {
            return keyword.toLowerCase().includes(searchTerm);
        });
        } else {
            return image.category.toLowerCase() === selectedCategory && image.keywords.some(function(keyword) {
                return keyword.toLowerCase().includes(searchTerm);
            });
        }
    });
    displayImages(filteredImages);
}

searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') filterImages();
});

searchButton.addEventListener('click', filterImages);

function displayImages(images) {
    let html = '';
    let imageID = 1;

    images.forEach(function(image) {
        html += `<div>
                    <img src="${image.url}" loading="lazy" alt="${image.category}">
                </div>
                <div class="lightbox" id="img${imageID}">
                    <a href="#" class="close">&times;</a>
                    <div>
                        <a href="#"><img src="${image.url}" loading="lazy" alt="${image.category}"></a>
                        <p>${image.category}</p>
                    </div>
                </div>`;
    imageID++;
    });

imageList.innerHTML = html;
}