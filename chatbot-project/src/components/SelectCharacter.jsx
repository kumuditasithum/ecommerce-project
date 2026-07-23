export function SelectCharacter({selectedCharacter, setSelectedCharacter}){
    return(
        <select
            value={selectedCharacter}
            onChange={(e) => {setSelectedCharacter(e.target.value)}}
        >
            <option value="robot">Robo</option>
            <option value="choco">Choco</option>
        </select>
    );
}