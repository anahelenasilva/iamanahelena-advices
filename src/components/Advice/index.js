import React from "react"
import GithubCorner from 'react-github-corner';

import api from '../../api'

const AdviceWrapper = ({ advice }) => {
    return <div>
        <h1>{advice}</h1>
        <GithubCorner href="https://github.com/anahelenasilva" bannerColor="#fff" octoColor="#000" />
    </div>
}

const Advice = () => {
    let [advice, setAdvice] = React.useState(null)

    React.useEffect(() => {
        api.getData()
            .then((response) => {
                setAdvice(response.data.slip.advice)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);


    return <AdviceWrapper advice={advice} />
}

export default Advice