import React, {useEffect} from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { StyledCardMainContainer } from './style'
import { submitCharacterFormAction } from './characterFormActions'
import { Toggle } from '../toggle/Toggle'
import { showToggle, hideToggle } from '../toggle/ToggleActions'

let CharacterForm = props => {
    const {handleSubmit} = props
    const dispatch = useDispatch()

    const submit = (data, action) => {
        dispatch(submitCharacterFormAction(data, props.state))
        dispatch(hideToggle('characterFormComponent'))
        dispatch(showToggle('characterDetailsComponent'))
    }
    return(
        <>
            <Toggle id={'characterFormComponent'}>
                <StyledCardMainContainer>
                    <form onSubmit={handleSubmit(fields => submit(fields, submitCharacterFormAction))}>
                        <label>Name</label>
                        <Field type="text" component="input" placeholder={props.state.name} name="name"/>
                    
                        <label>Gender</label>
                        <Field type="text" component="input" placeholder={props.state.appearance.gender} name="gender"/>

                        <label>Race</label>
                        <Field type="text" component="input" placeholder={props.state.appearance.race} name="race"/>

                        <label>Intelligence</label>
                        <Field type="number" component="input" placeholder={props.state.powerstats.intelligence} name="intelligence"/>

                        <label>Strength</label>
                        <Field type="number" component="input" placeholder={props.state.powerstats.strength} name="strength"/>

                        <label>Speed</label>
                        <Field type="number" component="input" placeholder={props.state.powerstats.speed} name="speed"/>

                        <label>Durability</label>
                        <Field type="number" component="input" placeholder={props.state.powerstats.durability} name="durability"/>

                        <label>Power</label>
                        <Field type="number" component="input" placeholder={props.state.powerstats.power} name="power"/>

                        <label>Combat</label>
                        <Field type="number" component="input" placeholder={props.state.powerstats.combat} name="combat"/>
                        <div className="selectors">
                            <button>Return</button>
                            <button type="submit">Customize</button>
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