import {useState} from "react";
import "../styles/reviewPage.css";
import {Button} from "./Button";

export const ReviewPage = ({defaultValues}) => {
    const [name, setName] = useState(defaultValues.name);
    const [rating, setRating] = useState(defaultValues.rating);
    const [description, setDescription] = useState(defaultValues.description);

    const handleSubmit = (e) => {
        e.preventDefault();
        const review = {name, rating, description, id: defaultValues.id};
        defaultValues.onSubmit(review);
    }

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    return (
        <div className="review-page">
            <h1 id="heading">ADD NEW REVIEW</h1>
            <form onSubmit={handleSubmit}>
                <div id="form">
                    <div id="seriesName">
                        <li><label>Title</label></li>
                        <input type="text" name="seriesName" onChange={handleNameChange} value={name}/>
                    </div>
                    <div id="description">
                        <li><label>Description</label></li>
                        <textarea name="descritption" rows="4" cols="40" onChange={handleDescriptionChange}
                                  value={description}/>
                    </div>
                    <div id="rating">
                        <li><label>Choose a Rating:</label></li>
                        <select name="Rating" id="rating" value={rating} onChange={handleRatingChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                </div>
                <Button title="Submit" />
            </form>
        </div>
    );
};
