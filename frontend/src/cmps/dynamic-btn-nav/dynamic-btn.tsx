import { useNavigate } from "react-router";

import MapIcon from '@mui/icons-material/Map';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

interface Iprops {
    txt: string
}

export function DynamicBtn({ txt }: Iprops) {

    const navigate = useNavigate()

    function btnSwitch() {
        switch (txt) {
            case 'map':
                return <div key={txt} className='map-btn-container'>
                    {/* need to create button component */}
                    <button onClick={() => navigate('/')} className='show-map-btn'>
                        <span>Show list</span>
                        <FormatListBulletedIcon />
                    </button>
                </div>
            case 'index':
                return <div key={txt} className='map-btn-container'>
                    {/* need to create button component */}
                    <button onClick={() => navigate('/map')} className='show-map-btn'>
                        <span>Show map</span>
                        <MapIcon />
                    </button>
                </div>
            default: return <div>failed to load button</div>

        }
    }
    return (
        <div>
            {btnSwitch()}
        </div>
    )
}