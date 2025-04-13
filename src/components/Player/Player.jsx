import { useState } from 'react'

const Player = ({initilName, symbol }) => {
    const [name, setName] = useState(initilName)
    const [isEditing, setEditing] = useState(false)
    const handleEdit = () => {
        setEditing(wasEditing => !wasEditing)
    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    let btnCaption = isEditing ? 'Save' : 'Edit';
    let playerName = isEditing   
        ?  <input type='text' required defaultValue={name} onChange={handleNameChange} />
        : <span className='player-name'>{name}</span>

    return (
        <li>
            <span className='player'>
                {playerName}
                <span className='player'>{symbol}</span>
            </span>
            <button onClick={handleEdit}>{btnCaption}</button>
        </li>
    )
}

export default Player