import universal from 'react-universal-component'

import { PromiseProp } from 'utilities/propTypes'

import Loading from 'components/Loading'
import ErrorMessage from 'components/Error'

const Universal = universal(({ component }) => component, {
    minDelay: 500,
    loading: Loading,
    error: ErrorMessage,
})

Universal.propTypes = {
    component: PromiseProp.isRequired,
}

export default Universal
