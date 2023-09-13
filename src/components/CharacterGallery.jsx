import Character from "./Character";
import characters from "../data/characterData.json";

const CharacterGallery = () => {
    return (
        <div>
            {characters.map(c => <Character key={c._id} {...c} />)}
        </div>
    )
};

export default CharacterGallery;