import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

function TextInputForm(
    {   handleFormSubmit,
        handleTextInputChange,
        inputType = "text",
        handleShowHideClick,
    }) {
    return (
        <>
            <form 
                onSubmit={handleFormSubmit}
                className="w-1/3 mx-auto border border-gray-500 px-4 py-3"
            >
                <TextInput
                    type={inputType}
                    label="Enter some Text"
                    placeholder="Enter some Text here"
                    onChangeHandler={handleTextInputChange}
                />
                <div className="text-center">
                    <Button
                        text={inputType === "password" ? "Show" : "Hide"}
                        styleType="success"
                        onClickHandler={handleShowHideClick}
                    />

                    <Button
                        text="Submit"
                        styleType="success"
                        type="submit"
                    />
                </div>
            </form>
        </>
    );
}

export default TextInputForm;