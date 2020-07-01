import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, cleanup, waitForElement, within, getByTestId } from '@testing-library/react'
import CharacterDetail from '.'
import CharacterForm from '../../components/CharacterForm/index'
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

describe('CharacterForm Component', ()=> {
    it('Should update character when form is submit', async () => {
        const char = {
            name: 'Superman',
            race: 'krypto',
            gender: 'Male',
            intelligence: '100',
            strenght: '100',
            speed: '100',
            durability: '100',
            power: '100',
            combat:'100'
        }
        const { getByTestId, getByText, queryByText } = renderComponent()
        
        //name input
        const nameFieldNode = await waitForElement(
            () => getByTestId('name-field')
        )
        fireEvent.change(
            nameFieldNode, 
            {target: {value: char.name}}
        )
        expect(nameFieldNode.value).toEqual(char.name)

        //race input
        const raceFieldNode = await waitForElement(
            () => getByTestId('race-field')
        )
        fireEvent.change(
            raceFieldNode, 
            {target: {value: char.race}}
        )
        expect(raceFieldNode.value).toEqual(char.race)

        //intelligence input
        const intelligenceFieldNode = await waitForElement(
            () => getByTestId('intelligence-field')
        )
        fireEvent.change(
            intelligenceFieldNode, 
            {target: {value: char.intelligence}}
        )
        expect(intelligenceFieldNode.value).toEqual(char.intelligence)

        //strenght input
        const strenghtFieldNode = await waitForElement(
            () => getByTestId('strenght-field')
        )
        fireEvent.change(
            strenghtFieldNode, 
            {target: {value: char.strenght}}
        )
        expect(strenghtFieldNode.value).toEqual(char.strenght)

        //speed input
        const speedFieldNode = await waitForElement(
            () => getByTestId('speed-field')
        )
        fireEvent.change(
            speedFieldNode, 
            {target: {value: char.speed}}
        )
        expect(speedFieldNode.value).toEqual(char.speed)

        //durability input
        const durabilityFieldNode = await waitForElement(
            () => getByTestId('durability-field')
        )
        fireEvent.change(
            durabilityFieldNode, 
            {target: {value: char.durability}}
        )
        expect(durabilityFieldNode.value).toEqual(char.durability)

        //power input
        const powerFieldNode = await waitForElement(
            () => getByTestId('power-field')
        )
        fireEvent.change(
            powerFieldNode, 
            {target: {value: char.power}}
        )
        expect(powerFieldNode.value).toEqual(char.power)

        //combat input
        const combatFieldNode = await waitForElement(
            () => getByTestId('combat-field')
        )
        fireEvent.change(
            combatFieldNode, 
            {target: {value: char.combat}}
        )
        expect(combatFieldNode.value).toEqual(char.combat)

        const customizeButtonNode = await waitForElement(
            () => getByTestId('customize-button')
        )

        fireEvent.click(customizeButtonNode)

        const nameUpdatedNode = await waitForElement(
            () => getByTestId('name-identifier')
        )

        expect(nameUpdatedNode.textContent).toEqual(char.name)
        
    }) 
})