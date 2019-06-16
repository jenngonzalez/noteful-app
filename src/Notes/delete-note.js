import config from '../config';

export default function deleteNote(noteId, callback) {
    fetch(config.API_NOTES + `${noteId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
    }).then(response => {
        if(!response.ok) {
            throw new Error(response.status)
        }
        return response.json()
    }).then(data=> {
        callback(noteId)
    }).then(window.location.assign('/'))
    
    .catch(error => {
        console.error(error)
    })
}