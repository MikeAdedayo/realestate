export function add (state) {
  state.place = 'my new place'
}
export function del (state) {
  state.place = 'my old place'
}
export function loadProfile (state, payload) {
  state.username = payload.username
  state.profile = payload.profile
}
