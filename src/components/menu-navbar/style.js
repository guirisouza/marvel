import styled from 'styled-components'

const StyledHeader = styled.header`
    grid-area: header;
    background: #22262A;
    padding: 25px;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;

    .logo {
        max-width: 172px;
    }

    img {
        max-height: 70px;
    }

    nav ul {
        display: flex;
        flex-wrap: wrap;
    }

    nav a {
        display: block;
        padding: 10px;
        color: white;
        font-size: 1.125em;
        background: rgba(0,0,0,.1);
        border-radius: 5px;
        transition: .1s;
    }

    nav a:hover {
        background: rgba(0,0,0,.5);
    }

    li + li {
        margin-left: 30px;
    }
`

export {StyledHeader}