export default function TextInputElement (text : string) {
    return (
        <div>
            <input type={text} />
            <button>Submit</button>
        </div>
    )
}