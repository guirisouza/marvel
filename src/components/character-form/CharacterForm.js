import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { StyledCardMainContainer } from './style'
import { submitCharacterFormAction } from './characterFormActions'

let CharacterForm = props => {
    console.log('NOOOVOOOOOO',props)
    const {handleSubmit} = props
    const dispatch = useDispatch()

    const submit = (data, action) => {
        dispatch(submitCharacterFormAction(data, props.state))
    }
    return(
        <>
            <StyledCardMainContainer>
                <form onSubmit={handleSubmit(fields => submit(fields, submitCharacterFormAction))}>
                    
                    <Field type="text" component="input" placeholder={props.state.name} name="name"/>
                
                    
                    <Field type="text" component="input" placeholder={props.state.appearance.gender} name="gender"/>

                    
                    <Field type="text" component="input" placeholder={props.state.appearance.race} name="race"/>

                    
                    <Field type="number" component="input" placeholder={props.state.powerstats.intelligence} name="intelligence"/>

                    
                    <Field type="number" component="input" placeholder={props.state.powerstats.strength} name="strength"/>

                    
                    <Field type="number" component="input" placeholder={props.state.powerstats.speed} name="speed"/>

                    
                    <Field type="number" component="input" placeholder={props.state.powerstats.durability} name="durability"/>

                    
                    <Field type="number" component="input" placeholder={props.state.powerstats.power} name="power"/>

                    
                    <Field type="number" component="input" placeholder={props.state.powerstats.combat} name="combat"/>
                    <button type="submit">Submit</button>
                </form>
            </StyledCardMainContainer>
        </>
    )
}

CharacterForm = reduxForm({
    form: 'characterForm'
})(CharacterForm)

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {submitCharacterFormAction})(CharacterForm)