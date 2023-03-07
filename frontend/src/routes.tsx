import { MapPricing } from './cmps/map-pricing'
import { PlaceIndex } from './pages/place-index'

const routes = [
    {
        path: '/',
        component: <PlaceIndex />,
        label: 'Home',
    },
    {
        path: '/map',
        component: <MapPricing />,
        label: 'map',
    }
]

export default routes