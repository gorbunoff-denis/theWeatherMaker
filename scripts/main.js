let headerSearchInput = document.getElementById('search-input');

headerSearchInput.addEventListener('input', function (evt) {
    //prevent the normal submission of the form
    evt.preventDefault();
    console.log(this.value);
});
