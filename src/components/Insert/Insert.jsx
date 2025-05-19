import { useState } from "react";
import supabase from "../../config/supabaseClient";

export default function Insert() {
    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");
    const [release, setRelease] = useState("");
    const [formError, setFormError] = useState(null);
    const [formSuccess, setFormSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !duration || !genre || !rating || !release) {
            setFormError("Please fill in all fields");
            return;
        }

        const { data, error } = await supabase
            .from("shows")
            .insert([{ title, duration, genre, rating, release }])
            .select();

        if (data) {
            setFormSuccess("Data inserted: " + JSON.stringify(data));
            setFormError(null);
        }
        if (error) {
            setFormError("Could not insert the data");
            setFormSuccess(null);
        } 
    }

    return (
        <div>
            <h1>Insert</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="duration">Duration:</label>
                <input
                    type="text"
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />

                <label htmlFor="genre">Genre:</label>
                <input
                    type="text"
                    id="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />

                <label htmlFor="rating">Rating:</label>
                <input
                    type="number"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />

                <label htmlFor="release">Release:</label>
                <input
                    type="date"
                    id="release"
                    value={release}
                    onChange={(e) => setRelease(e.target.value)}
                />

                <button type="submit">Insert</button>

                {formSuccess && <div>Data inserted successfully! {formSuccess}</div>}   

                {formError && <div>{formError}</div>}            

            </form>
        </div>
    );
}