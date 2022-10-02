import { useState } from "react";
import Popup from "./Popup";

export default function Main({
    imageURL
}: {
    imageURL: string
}) {
    const [popupOpened, setPopupOpened] = useState(false);

    return <main>
        <button type="button"
            onClick={() => setPopupOpened(true)}
        >
            Show popup
        </button>
        {popupOpened ?
        <Popup imageURL={imageURL} close={() => setPopupOpened(false)} />
        : undefined}
    </main>

}
