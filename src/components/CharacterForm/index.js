import React, {useEffect} from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { StyledCardMainContainer } from './styles'
import { submitCharacterFormAction } from './actions'
import { Toggle } from '../Toggle/index'
import { showToggle, hideToggle } from '../Toggle/actions'
import characterMocked from '../../utils/mock'

let CharacterForm = props => {
    let char = ''
    if(props.state === undefined) {
        char = characterMocked
    } else {
        char = props.state
    }
    const {handleSubmit} = props
    const dispatch = useDispatch()

    const submit = (data, action) => {
        dispatch(submitCharacterFormAction(data, char))
        dispatch(hideToggle('characterFormComponent'))
        dispatch(showToggle('characterDetailsComponent'))
    }
    return(
        <>
            <Toggle id={'characterFormComponent'}>
                <StyledCardMainContainer>
                    <form onSubmit={handleSubmit(fields => submit(fields, submitCharacterFormAction))}>
                        <label>Name</label>
                        <Field data-testid="name-field" type="text" component="input" placeholder={char.name} name="name"/>
                    
                        <label>Gender</label>
                        <Field type="text" data-testid="gender-field" component="input" placeholder={char.appearance.gender} name="gender"/>

                        <label>Race</label>
                        <Field type="text" data-testid="race-field" component="input" placeholder={char.appearance.race} name="race"/>

                        <label>Intelligence</label>
                        <Field type="number" data-testid="intelligence-field" component="input" placeholder={char.powerstats.intelligence} name="intelligence"/>

                        <label>Strength</label>
                        <Field type="number" data-testid="strenght-field" component="input" placeholder={char.powerstats.strength} name="strength"/>

                        <label>Speed</label>
                        <Field type="number" data-testid="speed-field" component="input" placeholder={char.powerstats.speed} name="speed"/>

                        <label>Durability</label>
                        <Field type="number" data-testid="durability-field" component="input" placeholder={char.powerstats.durability} name="durability"/>

                        <label>Power</label>
                        <Field type="number" data-testid="power-field" component="input" placeholder={char.powerstats.power} name="power"/>

                        <label>Combat</label>
                        <Field type="number"  data-testid="combat-field" component="input" placeholder={char.powerstats.combat} name="combat"/>
                        
                        <div className="selectors">
                            <button>Return</button>
                            <button type="submit" data-testid="customize-button">Customize</button>
                        </div>
                    </form>
                </StyledCardMainContainer>
            </Toggle>
        </>
    )
}

CharacterForm = reduxForm({
    form: 'characterForm'
})(CharacterForm)

const mapStateToProps = state => ({characters: state.list.characters})

export default connect(mapStateToProps, {submitCharacterFormAction})(CharacterForm)