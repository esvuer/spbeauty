import Profile from "./Components/Profile/Profile";
import Preferences from "./Components/Preferences";
function General() {
    
    return (
        <div className='d-inline-flex col-6 col-sm-3 flex-column'>
            <Profile/> {/* Фото компании, название, тип и адрес */}
            <Preferences/> {/* Инпуты, где можно поменять название, тип и адрес */}
        </div>
    );
}

export default General;