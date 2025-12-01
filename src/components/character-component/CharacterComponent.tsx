import './CharacterComponent.css';
import type {FC, ReactNode} from "react";
import type {CharacterModel} from "../../models/CharacterModel.ts";

interface CharacterComponentProps {
    character: CharacterModel;
    children?: ReactNode;
}

export const CharacterComponent: FC<CharacterComponentProps> = ({character, children}: CharacterComponentProps) => {
    return (
        <div className='character'>
            <h3>{character.name} {character.surname}</h3>
            {children}
        </div>
    );
};