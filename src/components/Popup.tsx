import { useState } from "react";

export default function Popup({
    imageURL,
    close,
}: {
    imageURL: string,
    close: () => void,
}) {
    const
        MAX_SCALE = 10,
        MIN_SCALE = -10;

    const [scale, setScale] = useState(0);

    function increaseScale(scale: number) {
        if (scale >= MAX_SCALE)
            return scale;

        return scale + 1;
    }

    function decreaseScale(scale: number) {
        if (scale <= MIN_SCALE)
            return scale;

        return scale - 1;
    }

    function scaleToMarginEffect(scale: number) {
        if (scale === 0)
            return 0;

        if (scale > 0)
            return -(scale * 10);
        
        return -(scale * 2);
    }

    return <div className="popup" style={{
        '--margin-scaler': scaleToMarginEffect(scale)
    } as { [key: string]: string | number } }>
        <div className="controls">
            <button type="button" className="close-button"
                onClick={close}
            >X</button>
            <button type="button"
                onClick={() => setScale(decreaseScale)}
            >-</button>
            <input type="range" min={MIN_SCALE} max={MAX_SCALE} value={scale}
                onChange={e => setScale(Number(e.target.value))}
            />
            <button type="button"
                onClick={() => setScale(increaseScale)}
            >+</button>
        </div>
        <div className="container">
            <img className="image" src={imageURL} alt="" />
        </div>
    </div>
}