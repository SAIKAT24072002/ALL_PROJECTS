function TextInput({
    label,
    type = "text",
    placeholder = "Enter Your Input here",
    onChangeHandler
}) {
    return (
        <>
       
        <div className="">
            <label>
                <span className="text-gray-500">
                    {label}
                </span>
                <input
                    type={type}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    className="border border-gray-500 px-4 py-2 rounded-md w-full outline-orange-500"
                />
            </label>
        </div>

        </>
    )
}

export default TextInput;