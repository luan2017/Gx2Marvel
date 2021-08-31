import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;800&display=swap');
@import url('http://weloveiconfonts.com/api/?family=entypo');

/* Variables */
:root{
    --primary: #ff3859;
    --secondary: #831225;
}

/* General styles */
body{
    background-color: black;
    padding: 2vh 5vw;
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
    font-size: 1.8vh;
}

h1, h2, h3, b, strong{
    font-weight: 800;
}
`