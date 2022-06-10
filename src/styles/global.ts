import { createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');

:root{
    --bg-color: #fff;
    --secondary-bg-color: #565656;
    --text-color-primary: #E77377;
    --text-color-secondary: #363F50;
    --text-color-error: #c53030;
    --border-color: #565656;
    --border-color-white-clear: #F6D9DC;
}

*{
    margin:0;
    padding: 0;
}

body{
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 16px;
    color: var(--text-color-secondary);
}
`