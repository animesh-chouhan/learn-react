const Button = (props) => {
    const onClick = () => {
        console.log("click")
    }

    return (
        <button onClick={onClick} style={{backgroundColor: props.color}}>{props.text}</button>
    )
}


Button.defaultProps = {
    text: "Button"
}

export default Button

