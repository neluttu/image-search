document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.querySelector('#searchButton');
    var keywordsInput = document.querySelector('#inputKeywords');

    searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        search();
    });

    keywordsInput.addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            search();
        }
    });

    function search() {
        var keywords = document.querySelector('#inputKeywords').value;
        var collectionId = document.querySelector('#categorySelect').value;
        var apiUrl = 'https://api.unsplash.com/search/photos/?query=' + encodeURIComponent(keywords) + '&collections=' + collectionId + '&client_id=Wr6jyMeZ94Mh7RVBA0od40j0UTXdJlZ_QiAInEfh5-w';
        var xhr = new XMLHttpRequest();
        xhr.open('GET', apiUrl);
        xhr.onload = function() {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                var results = document.querySelector('#gallery');
                results.innerHTML = '';
                data.results.forEach(function(photo) {
                    results.innerHTML += `<div><a href="${photo.urls.regular}" target="_blank"><img src="${photo.urls.regular}" loading="lazy" alt=""></a></div>`;
                });
            }
        };
        xhr.send();
    }
});
