import {useState} from 'react'
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import NewSongForm from './NewSongForm';

function SongList() {

    const [ songs, setSongs ] = useState([
        {title: 'Let it be', id: 1},
        {title: 'My Way', id: 1},
        {title: 'Yesterday', id: 1}
    ])

    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid()}])
    }

    return (


        <div className='container mx-auto song-list'>
            <Link to="/">Home</Link>
            <ul>
                { songs.map(song => (
                    <li key={song.id}>{song.title}</li>
                ))}
            </ul>

            <NewSongForm addSong={addSong} />

        </div>
    )
}

export default SongList