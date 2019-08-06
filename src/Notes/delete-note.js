import config from '../config';

export default function deleteNote(noteId, callback, history) {
    fetch(config.API_NOTES + `/${noteId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
    }).then(response => {
        if(!response.ok) {
            throw new Error(response.status)
        }
        // return response.json()
        // -- server doesn't send a response other than status code, just ends
    }).then(data=> {
        callback(noteId)
    }).then(history.push('/'))
    
    .catch(error => {
        console.error(error)
    })
}