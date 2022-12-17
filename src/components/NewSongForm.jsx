import {useState, useEffect } from 'react'

function NewSongForm({ addSong }) {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('');
    }
    useEffect(() => {

    }, [])
  return (
    <form onSubmit={handleSubmit} className='mt-4'>
        <label>Some name</label>
        <input 
            className="border block" 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            required />
        <input className="border" type="submit" value="Add song" />
    </form>
  )
}

export default NewSongForm