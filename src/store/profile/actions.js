import axios from 'axios'
export function loadProfile (context, username) {
  axios.get('http://127.0.0.1:8000/profile/' + username)
    .then(response => {
      console.log('from store', username)
      const payload = { 'profile': response.data, 'username': username }
      context.commit('loadProfile', payload)
    })
}
