import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const CharacterInfo = ({ url }) => {

    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setCharacter(res.data))
    }, [url])

    return (
        <div>
            <Link to={`/characters/${character.id}`}>
                <div className="character-card">
                    <img src={character.image} alt={character.name} />
                    { character.name }
                </div>
            </Link>
        </div>
    )
}

export default CharacterInfo