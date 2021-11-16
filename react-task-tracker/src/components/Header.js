import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    return (
        <header>
            <h1 style={headingStyle} >{props.title}</h1>
            <Button /> 
            
            {/* <Button text="Button 1" color="blue" />
            <Button text="Button 2" color="green" />
            <Button text="Button 3" color="red" />  */}
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string
}

const headingStyle = {
    color: "yellow",
    backgroundColor: "black"
}

export default Header