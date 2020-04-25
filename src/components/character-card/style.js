import styled from 'styled-components'

const StyledSectionCard = styled.section`

    height: 350px;
    width: 1000px;
    background-color: white;
    box-shadow: 0 10px 30px
    rgba(0,0,0,0.5);
    display: flex;
    margin-bottom: 30px;
    border-radius: 5px 5px 5px 5px;

    .content {
        margin-top:10px;
        width: calc(50%);
        height: 70%;
        background-color: white;
        padding: 0% 5%;
        line-height: 1.5em;
        font-size: 18px;
        text-align: justify;
    }

    .imagebox {
        width: calc(50%);
        heigth: 130%;
        background-color: #ff0;
        background: url(https://sm.ign.com/ign_pt/screenshot/default/hulk-blogroll-1555972904065_7x2k.jpg);
        background-repeat: no-repeat;
        background-size: 150%;
        background-position: -150px 0px;
    }

`

export {StyledSectionCard}