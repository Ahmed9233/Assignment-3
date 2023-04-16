(async function () {
    var respone = await fetch('./data.json');
    var movies = await respone.json();

    var moviename = document.querySelector('#movieName');
    var rating = document.getElementById('rate');

    var btn = document.getElementById("btn1");
    var btn1 = document.getElementById("btn2");


    function searchMovieByTitle() {
        var mov1 = moviename.value.toLowerCase();
        var mov = movies.filter(function (saeed) {
            return (saeed.title.toLowerCase().includes(mov1))
        });

        const a = document.getElementById('disAll').innerText = mov
    }

    function searchMovieByRating() {
        var rate2 = parseFloat(rating.value);
        var rateResults = movies.filter(function (saeed) {
            return (saeed.vote_average.includes(rate2))
        });

        console.log(mov);
    }


    btn.addEventListener("click", searchMovieByTitle)


})();

