import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, cleanup, waitForElement, within, getByTestId } from '@testing-library/react'
import CharacterDetail from '../character-details/CharacterDetails'
import store from '../../store/index'
import characterMocked from '../../utils/mock'


const char = characterMocked

const renderComponent = () => 
    render(
        <Provider store={store}>
            <Router>
                <CharacterDetail props={char}/>
            </Router>
        </Provider>
    )

describe('CharacterDetail test', () => {
    const { getByTestId, getByText, queryByText } = renderComponent()
    it('Should render card', () => {
        expect(queryByText('A-Bomb')).toBeInTheDocument()
    })
    it('Button edit should call form component', async () => {
        const { getByTestId, getByText, queryByText } = renderComponent()
        const customizeButton = await waitForElement(
            () => getByTestId('customizer-button')
        )
        expect(customizeButton).toBeInTheDocument()
        fireEvent.click(customizeButton)
    })
})