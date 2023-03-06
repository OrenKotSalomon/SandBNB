import { Avatar } from '@mui/material'
import dempPic from '../assets/react.svg'
import SearchIcon from '@mui/icons-material/Search';

export function AppHeader() {
    return (
        <section className='app-header'>
            <div className='logo-container'>
                <img src={dempPic} alt="" />
                <p className='brand-name'>AirBNB</p>

            </div>

            <div className='filter-container'>
                {/* filter component soon */}
                <div className='btn-container'>
                    <button className='any-week'>Any week</button>
                    <div className='seperator'>|</div>
                    <button className='any-where'>Any where</button>
                    <div className='seperator'>|</div>
                    <button className='add-guest-container'>
                        <div className='add-guest-txt'>
                            Add guests
                        </div>
                        <SearchIcon color='success' />
                    </button>
                </div>
            </div>

            <div className="user-menu">
                <button className="menu-container">
                    <div className="user-icon">
                        <Avatar alt="Remy Sharp" src={dempPic}
                            sx={{ width: 26, height: 26 }}
                        />

                    </div>
                    <div className='user-bars'>---</div>
                </button>
            </div>
        </section>
    )
}