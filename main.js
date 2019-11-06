import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import Stamen from 'ol/source/Stamen';
import VectorLayer from 'ol/layer/Vector';
import Vector from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Stroke from 'ol/style/Stroke';
import * as olProj from 'ol/proj';



const map = new Map({
    target: 'map',
    view: new View({
        center: olProj.fromLonLat([15.756522, 48.258624]),
        zoom: 8.7
    })
});
map.addLayer(new TileLayer({
    source: new Stamen({
        layer: 'watercolor'
    })
}));


const layer1 = new VectorLayer({
    source: new Vector({
        url: 'data/testmeldungen.json',
        format: new GeoJSON()
    })
});
layer1.setStyle(function(feature) {
    return new Style({
    text: new Text({
    text: feature.get('name'),
    font: 'Bold 8pt Verdana',
    stroke: new Stroke({
    color: 'white',
    width: 3
    })
    })
    });
    });

const layer2 = new VectorLayer({
    source: new Vector({
        url: 'data/grenzennoe.json',
        format: new GeoJSON()
    })
});


const layer3 = new VectorLayer({
    source: new Vector({
        url: 'data/testmeldungen.json',
        format: new GeoJSON()
    })
});
map.addLayer(layer2);
map.addLayer(layer3);
map.addLayer(layer1);