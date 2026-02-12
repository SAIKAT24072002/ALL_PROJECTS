function getButtonStyling(styleType){
    switch (styleType) {
        case "primary":
            return "bg-blue-500";
        case "danger":
            return "bg-red-500";
        case "success":
            return "bg-green-500";
        case "secondary":
            return "bg-gray-500";
        case "error":
            return "bg-yellow-500"
        default:
            return "bg-blue-500";
    }
}

export default getButtonStyling;