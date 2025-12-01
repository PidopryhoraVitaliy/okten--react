import styles from './FamilyComponent.module.css';
import {simpsons} from "../../data/simpsons.ts";
import {CharacterComponent} from "../character-component/CharacterComponent.tsx";

export const FamilyComponent = () => {
    return (
        <div className={styles.familyWrapper}>
            {
                simpsons.map((character, index) => (
                    <CharacterComponent key={index} character={character}>
                        <div>age: {character.age}</div>
                        <div>{character.info}</div>
                        <img src={character.photo} alt={character.name} />
                    </CharacterComponent>
                ))
            }
        </div>
    );
};