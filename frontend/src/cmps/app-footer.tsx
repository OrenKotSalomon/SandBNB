import MapIcon from '@mui/icons-material/Map';
import { parsePath, useNavigate, useParams } from 'react-router-dom';

export function AppFooter() {
    const navigate = useNavigate()
    const temp = parsePath

    return <>
        <div className='map-btn-container'>

            <button onClick={() => navigate('/map')} className='show-map-btn'>
                <span>Show map</span>
                <MapIcon />
            </button>
        </div>
        <section className='app-footer'>
            {/* app footer info here */}
        </section>
    </>

}