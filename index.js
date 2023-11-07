//click event on button
document.querySelector('button').addEventListener('click', function() {

    //var's
    const colorPicker = document.querySelector('#color').value.toString();
    const colorSelection = document.querySelector('#color-scheme').value;

    //scheme colors & hex values
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=${colorSelection}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    }); // This line was missing the closing parenthesis

});
