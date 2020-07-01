import styled from 'styled-components'
import background from '../../images/background.svg'

const StyledMainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${background});
    min-height: 73.8vh;


    .card {
        margin: 12.7vh;
        padding: 30px;
        border-radius: 10px;
        -webkit-box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.75);
        background: white;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        grid-template-areas:
            "identifier appearance"
            "image-char powerstats"
        ;

        img {
            border-radius:5px;
        }

        .identifier {
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Bangers', cursive;
            font-size: 1.4em;
            color: #26136E;
        }

        .appearance {
            li {
                background: #f77f00;
                margin-bottom: 4px;
                border-radius: 10px;
                padding-left: 10px;
                color: white;
                -webkit-box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.75);
                box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.75);
            }
        }

        .powerstats {
            position: relative;
            li {
                background: #669999;
                margin-bottom: 4px;
                border-radius: 10px;
                padding-left: 10px;
                color: white;
                -webkit-box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.75);
                box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.75);
                margin-bottom: 10px;
            }
        }

    button {
        display: flex;
        position: absolute;
        bottom: 0;
        right: 0;
        justify-content: center;
        align-items: center;
        border: 0;
        border-radius: 0.25rem;
        background: #1E88E5;
        color: white;
        font-family: system-ui, sans-serif;
        font-size: 1rem;
        line-height: 1.2;
        white-space: nowrap;
        text-decoration: none;
        padding: 0.25rem 0.5rem;
        margin: 0.25rem;
        cursor: pointer;


    }
`

export {StyledMainContainer}