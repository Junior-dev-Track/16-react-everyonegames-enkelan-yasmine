import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function BasicButtonExample() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id={"dropdown-basic"} className={"dropdown-toggle"}>
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu className={"dropdown-menu"}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export {BasicButtonExample};