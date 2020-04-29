import styled from 'styled-components'

const StyledContainerCard = styled.div`
    position: relative;
    height: 280px;
    width: 210px;
    margin: 10px;
    background: white;
    border-radius: 5px;
    box-shadow: 5px 5px 15px 0px rgba(44,44,44,0.15);
    background-image: url(${props => props.props});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    transition: 0.3s;

    div {
        color: white;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0;
        height: 20%;
        width: 100%;
        background: rgba(0,0,0,0.8);
        border-radius: 0 0 5px 5px;
        font-family: 'Bangers', cursive;
        font-size: 1.5em;
    }

    :hover {
        border: 2px solid white;
        cursor: pointer;
        -webkit-box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.75);
    }
`

export {StyledContainerCard}