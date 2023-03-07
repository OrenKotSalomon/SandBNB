import MapIcon from '@mui/icons-material/Map';

export function AppFooter() {
    return <>
        <div className='map-btn-container'>

            <button className='show-map-btn'>
                <span>Show map</span>
                <MapIcon />
            </button>
        </div>
        <section className='app-footer'>
            {/* app footer info here */}
        </section>
    </>

}