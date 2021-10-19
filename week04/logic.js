var move = document.getElementById('move');
move.addEventListener('click', function(e) {
    var objs = document.querySelectorAll('div');

    objs.forEach((o) => {
        o.classList.toggle('moved');
    });
});