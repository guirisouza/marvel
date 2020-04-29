import styled from 'styled-components'
import background from '../../images/background.svg'

const StyledMainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${background});

    .card {
        margin:35px;
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

        .edit-button {
            display: flex;
            position: absolute;
            bottom: 0;
            right: 0;
            justify-content: center;
            align-items: center;
            height: 30px;
            width: 70px;
            border-radius: 25px;
            background: #26136E;
            color: white;
        }
    }
`

export {StyledMainContainer}