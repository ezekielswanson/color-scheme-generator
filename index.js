// Click event on button
document.querySelector('button').addEventListener('click', function(e) {

    // Variables
    const colorPicker = document.querySelector('#color').value.substring(1);
    const colorSelection = document.querySelector('#color-scheme').value;

    // Fetch scheme colors & hex values
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=${colorSelection}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        // Loop through each color and get scheme colors and hex values
        data.colors.forEach((color, index) => {

            //Variables 
            const colorBar = document.querySelector('.color-bar__' + (index + 1))
            console.log(colorBar)
            const hexValue = color.hex.value;


            //Updates 
            colorBar.style.background = hexValue;
            
     
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

    e.preventDefault();
});
