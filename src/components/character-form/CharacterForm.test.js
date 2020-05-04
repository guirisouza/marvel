import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, cleanup, waitForElement, within, getByTestId } from '@testing-library/react'
import CharacterForm from '../character-form/CharacterForm'
import store from '../../store/index'
import characterMocked from '../../utils/mock'

const char = characterMocked
const renderComponent = () => 
    render(
        <Provider store={store}>
            <Router>
                <CharacterForm props={char}/>
            </Router>
        </Provider>
    )

describe('CharacterForm test',() => {
    it('Should render component', () => {
        const { getByTestId, getByText, queryByText } = renderComponent()
    })
})