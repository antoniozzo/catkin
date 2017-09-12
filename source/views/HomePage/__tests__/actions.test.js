import actions from '../actions'

describe('actions', () => {
    it('should create a loading action', () => {
        expect(actions.loading(true)).toEqual({
            type: actions.loading.toString(),
            payload: {
                loading: true,
            },
        })
    })

    it('should create a error action', () => {
        expect(actions.error('error message')).toEqual({
            type: actions.error.toString(),
            payload: {
                error: 'error message',
            },
        })
    })

    it('should create a set action', () => {
        expect(actions.set({ foo: 'bar' })).toEqual({
            type: actions.set.toString(),
            payload: {
                foo: 'bar',
            },
        })
    })
})
