export default function Popup({
    imageURL
}: {
    imageURL: string
}) {
    return <div className="popup">
        <div className="container">
            <img className="image" src={imageURL} alt="" />
        </div>
    </div>
}