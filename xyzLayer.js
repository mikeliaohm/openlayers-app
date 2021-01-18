import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

const dockerCDN = "http://localhost:1235/assets/tiles";

const areaExtents = [13488197.50506056, 2874713.885244023, 13496562.320206212, 2880071.653151566];

const landLayer = new TileLayer({
    extent: areaExtents,
    source: new XYZ({
        url: `${dockerCDN}/{z}/{x}/{y}.png`,
    }),
});

export default landLayer;