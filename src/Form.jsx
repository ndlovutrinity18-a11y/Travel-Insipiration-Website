export default function Form() {
    return (
        <div className="form-container">
            <form>
                <label htmlFor="destination">Destination:</label>
                <input type="text" id="destination" name="destination" />
                <label htmlFor="budget">Budget:</label>
                <input type="number" id="budget" name="budget" />
                <label htmlFor="duration">Duration (in days):</label>
                <input type="number" id="duration" name="duration" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}