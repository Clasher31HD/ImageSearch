function setDisplayMode(mode) {
    window.location.href = `index.php?display_mode=${mode}`;
}

function openFullscreen(imageSrc) {
    var fullscreenContainer = document.getElementById('fullscreenContainer');
    var fullscreenImage = document.getElementById('fullscreenImage');

    fullscreenImage.src = imageSrc;
    fullscreenContainer.style.display = 'flex';
}

function closeFullscreen() {
    var fullscreenContainer = document.getElementById('fullscreenContainer');
    fullscreenContainer.style.display = 'none';
}

// Working
function handleFilterChange(selectedFilter) {
    var searchElement = document.getElementById('search');
    var modelElement = document.getElementsByName('model')[0];

    if (selectedFilter === 'PositivePrompt' || selectedFilter === 'NegativePrompt' || selectedFilter === 'All') {
        searchElement.classList.add("visually-hidden");
    } else {
        searchElement.classList.remove("visually-hidden");
    }

    if (selectedFilter === 'Model') {
        modelElement.classList.add("visually-hidden");
    } else {
        modelElement.classList.remove("visually-hidden");
    }
}

$("form").on("click", ".remove", function() {
    $(this).parent().remove();
});

$(".add").click(function() {
    var clonedElement = $("form > div:first-child").clone(true);
    clonedElement.append('<button type="button" class="remove btn btn-danger">Danger</button>');
    clonedElement.insertBefore("form > div:last-child");
    return false;
});
