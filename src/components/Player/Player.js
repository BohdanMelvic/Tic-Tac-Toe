import { useState } from 'react'

const Player = ({name, symbol }) => {
    const [isEdited, setEdited] = useState(false)
    const handleEdit = () => {

    }

    return (
        <li>
            <span className='player'>
                <span className='player'>{name}</span>
                <span className='player'>{symbol}</span>
            </span>
            <button onClick={handleEdit}>Edit</button>
        </li>
    )
}

export default Player