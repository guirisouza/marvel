import styled from 'styled-components'

const StyledHeaderLogo = styled.div`
display: flex;
position: fixed;
margin: 30px 0 0 30px;
font-family: 'Comic Neue', cursive;
color: white;

p {
    padding: 30px;
}

img {
    height: 60px;
}
`

const SyledFullContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #000000;
    background-image: linear-gradient(209deg, #000000 0%, #808080 100%);
`

const StyledInputSearch = styled.input`
    border: 0;
    outline:none;
    background: transparent;
    font-family: 'Quicksand', sans-serif;
    color: #ed1d24;
    ::placeholder {
        color:#ed1d24
    }
`

const StyledContainerSearchBox = styled.div`
    display: flex;
    margin-top: 60px;
    margin-right: -800px;
    justify-content: center;
    width: 200px;
    height: 30px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 3px 30px
    rgba(237,29,36,0.5);
    span {
        margin-top: 1%;
        color: #ed1d24;
    }
`



const StyledScrollerContainer = styled.div`
    flex-direction: column;
    margin-top: 30px;
    overflow-y:scroll; 
    overflow-x:hidden;
    min-height: 500px; 
    max-height: 400px;
    min-width: 160px;
    max-width: 1300px;
    background-color: transparent;


    border-radius: 4px;

    /* width */
    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #ed1d24; 
    border-radius: 10px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background:  #ed1d24; 
    }   
`

export { SyledFullContainer, StyledHeaderLogo, StyledScrollerContainer, StyledInputSearch, StyledContainerSearchBox }