import dempPic from '../assets/react.svg'

export function AppHeader() {
    return (
        <section className='app-header'>
            <div className='logo-container'>
                <img src={dempPic} alt="" />
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
                        <img src={dempPic} alt="" />
                    </button>
                </div>
            </div>

            <div className="user-menu">
                <button className="menu-container">
                    <div className="user-icon">
                        <img src={dempPic} alt="" />
                    </div>
                    <div className='user-bars'>---</div>
                </button>
            </div>
        </section>
    )
}