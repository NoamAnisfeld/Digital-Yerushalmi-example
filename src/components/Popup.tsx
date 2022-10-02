export default function Popup({
    imageURL
}: {
    imageURL: string
}) {
    return <div className="popup">
        <div className="controls">
            <button type="button">-</button>
            <button type="button">+</button>
        </div>
        <div className="container">
            <img className="image" src={imageURL} alt="" />
        </div>
    </div>
}