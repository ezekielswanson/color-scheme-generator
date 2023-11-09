//click event on button
document.querySelector('button').addEventListener('click', function(e) {

    //var's
    const colorPicker = document.querySelector('#color').value.substring(1);
    const colorSelection = document.querySelector('#color-scheme').value;

    //scheme colors & hex values
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=${colorSelection}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        //Loop through each color
        data.colors.forEach(color => {
            color.hex.value

        })
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    }); // This line was missing the closing parenthesis


    e.preventDefault();
});
