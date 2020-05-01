import React from 'react';
import { useSelector } from 'react-redux';


export const Toggle = ({id, children}) => {
    console.log('CHAMMMOUUUU TOGLEEE', id)
    const show = useSelector(state => state.toggles[id]);
    return show ? children : null;
};