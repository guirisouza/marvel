import styled from 'styled-components'
import background from '../../images/background.svg'


const StyledStructure = styled.div`
    display: grid;
    background-image: url(${background});
    grid-template-columns: 3fr;
    grid-template-areas:
        "header"
        "content"
        "footer"
    ;



`

export { StyledStructure }