export default function Popup({
    imageURL
}: {
    imageURL: string
}) {
    return <div className="popup">
        <img src={imageURL} />
    </div>
}