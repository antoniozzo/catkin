import store from 'store'
import expirePlugin from 'store/plugins/expire'

store.addPlugin(expirePlugin)

export function save(key, data, duration) {
    store.set(key, data, new Date().getTime() + duration)
}

export function load(key) {
    return store.get(key)
}
