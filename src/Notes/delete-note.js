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
    }).then(this.props.history.push('/'))
    
    .catch(error => {
        console.error(error)
    })
}


//.then(window.location.assign('/'))

// how to use props.history in a function within it's own component?