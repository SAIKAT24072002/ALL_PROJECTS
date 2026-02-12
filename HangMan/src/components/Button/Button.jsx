import getButtonStyling from "./getButtonStyle";
function Button({ text, onClickHandler, styleType, type = "button" }) {
    return (
        <>
            <button
                onClick={onClickHandler}
                type={type}
                className={`${getButtonStyling(styleType)} m-4 text-white px-4 py-3 rounded-md`}
            >
                {text}
            </button>
        </>
    )
}

export default Button;