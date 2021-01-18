import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import * as Proj from "ol/proj";

import landLayer from './xyzLayer';

const baseLayer = new TileLayer({
    source: new OSM()
});

const map = new Map({
    target: 'map',
    layers: [
        baseLayer,
        landLayer
    ],
    view: new View({
        center: Proj.fromLonLat([121.21284029065943, 25.011669772542394]),
        zoom: 17,
        minZoom: 6,
        maxZoom: 19
    })
});