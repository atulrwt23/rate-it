import {Button} from "./Button";
import "../styles/card.css"

export const Card = ({ name, rating, onView, onEdit, onDelete}) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Rating: {rating}</p>
            <Button onClick={onDelete} title="Delete"/>
            <Button onClick={onView} title="View" />
            <Button onClick={onEdit} title="Edit" />
        </div>
    );
};
