const ButtonComponent = ({
    handleOnClick,
    textSize = '12px',
    backgroundColor = "red"
}) => {
    return (
        <button id="myBtn" onClick={handleOnClick} style={{ fontSize: textSize, backgroundColor: backgroundColor }}>Click Me</button>
    )
}

export default ButtonComponent;