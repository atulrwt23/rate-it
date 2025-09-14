import {ReviewPage} from "./ReviewPage";
import React, {useState} from "react";
import {mockSeriesData} from "../services/api";
import {Card} from "./Card";
import {ViewCard} from "./ViewCard";

export function Main() {
    const [series, setSeries] = useState(mockSeriesData)
    const [openReviewPage, setReviewPage] = useState(false);
    const [view, setView] = useState(false);
    const onSubmit = (item) => {
        setReviewPage(false);
        const newReview = {...item, id: item.id};
        setSeries([...series, newReview])
    }

    const [defaultValues, setDefaultValues] = useState({
        name: "",
        description: "",
        rating: 1,
        id: null,
        onSubmit: onSubmit
    });

    const onClick = () => {
        setReviewPage(true);
    }

    const onEdit = ({name, description, id, rating}) => (e) => {
        setReviewPage(true);
        setView(false);
        setDefaultValues({name, description, id, rating, onSubmit: editReview});
    }

    const editReview = ({name, rating, description, id}) => {
        const newSeries = series.map((review) => {
            if (review.id === id) {
                return {name, rating, description, id}
            }
            return review;
        });

        setSeries(newSeries);
        setReviewPage(false);
        setDefaultValues({name: "", description: "", rating: 1, id: null, onSubmit: onSubmit});
    }

    const onDelete = (id) => {
        const newSeries = series.filter((review) => review.id !== id);
        setSeries(newSeries);
        setReviewPage(false);
        setDefaultValues({name: "", description: "", rating: 1, id: null, onSubmit: onSubmit});
        setView(false);
    }

    const onView = (id) => {
        setView(true);
        setReviewPage(false);
        const {name, rating, description} = series.find((review) => review.id === id);
        setDefaultValues({name, description, rating, id, onSubmit: onSubmit});
    }

    if (view) {
        return <ViewCard onEdit={onEdit(defaultValues)} onDelete={() => onDelete(defaultValues.id)} {...defaultValues}/>
    }


    return openReviewPage ? <ReviewPage defaultValues={defaultValues}/> : (
        <>
            <button onClick={onClick}>Add New Review</button>
            {series.map(item =>
            <Card key={item.id} {...item}
                  onEdit={onEdit(item)}
                  onDelete={() => onDelete(item.id)}
                  onView={() => onView(item.id)}
            />
            )}
        </>
    )
}