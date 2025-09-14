import {Button} from "./Button";
import "../styles/card.css";

export function ViewCard({ onEdit, onDelete, name, rating }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>Rating: {rating}</p>
            <Button onClick={onEdit} title="Edit" />
            <Button onClick={onDelete} title="Delete"/>
        </div>
    );
}