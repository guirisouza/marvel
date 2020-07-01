import styled from 'styled-components'

const StyledCardMainContainer = styled.div`
    margin:35px;
    padding: 30px;
    background-color: #44158F;
    border-radius: 10px;
    -webkit-box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 22px -5px rgba(0,0,0,0.75);

    form {
        display: flex;
        flex-direction: column;
    }

    input {
        border: 0;
        border-bottom: solid 1px white;
        outline:none;
        background: transparent;
        margin-bottom: 20px;

        ::placeholder {
            font-size: 12px;
            color: white;
        }
    }

    input, select, textarea{
        color: white;
    }

    label {
        color: #1E88E5;
    }

    button {
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

export { StyledCardMainContainer }