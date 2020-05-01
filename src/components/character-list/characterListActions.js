import axios from 'axios'

const URL = 'https://akabab.github.io/superhero-api/api/all.json'

export const loadCharList = () => {
    const request = axios.get(URL)
    return {
        type: 'CHARACTER_LIST_LOADED',
        payload: request
    }
}

