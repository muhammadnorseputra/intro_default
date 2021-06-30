$(window).on('load', function() {
    let domain = 'https://newsapi.org/v2/top-headlines';
    let key = 'f6eb574228534232b71febf5ccdb441b';
    let id = 'id';
    let pageSize = '3';
    let url = `https://newsapi.org/v2/top-headlines?country=id&pageSize=3&apiKey=f6eb574228534232b71febf5ccdb441b`;
    fetch(`${url}`)
        .then(response => response.json())
        .then(data => console.log(data));
});