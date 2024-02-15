import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '224px' : props.minWidth;
    const Button = styled.div`
        background: #FFFFFF;
        border: 2px solid #64748B;
        border-radius: 24px;
        min-width: ${minWidth};
        color: #152842;
        &:hover {
            background: #E5E5E5;
        }
        &:active {
            background: #BDBDBD;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md gray-text'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;