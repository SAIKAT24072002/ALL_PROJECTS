import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
    const [showPassword, setShowPassword] = useState("password");
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    function handleFormSubmit(event) {
        event.preventDefault();
        // console.log("Form Submitted", value);
        if(value){
            setTimeout(()=>{
                {/*navigate(`/play?text=${value}`)-->this type of passig the data is know as query params */}
                navigate(`/play`, { state:{ wordSelected: value } })
                // -->this type of passig the data is know as path params
            },1000)
        }
    }

    function handleTextInputChange(event) {
        // console.log("Text Input Changed");
        // console.log(event.target.value);
        setValue(event.target.value); 
    }
    function handleShowHideClick(){
        showPassword === "password" ? setShowPassword("text") : setShowPassword("password") 
        //console.log("show/hide button click");
    }
    return (
        <TextInputForm
            inputType={showPassword}
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
        />
    )
}

export default TextInputFormContainer;