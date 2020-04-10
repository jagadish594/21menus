
const InputSearch = (props) => {
    return (
        <div>
            <input
            type="text"
            value={props.inputQuery}
            onChange={props.handleInput}
            />
            <button onClick={props.handleSearchButton}>Search</button>
        </div>
    );
}

export default InputSearch;