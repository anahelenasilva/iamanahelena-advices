import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getData: () =>
        axios({
            'method': 'GET',
            'url': 'https://api.adviceslip.com/advice',
        })
}