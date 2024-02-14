import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '224px' : props.minWidth; 
    const Button = styled.div`
        background: #3B82F6;
        border-radius: 24px;
        min-width: ${minWidth};
        color: white;
        &:hover {
            background: #1A71FF;
        }
        &:active {
            background: #0F5FE3;
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;