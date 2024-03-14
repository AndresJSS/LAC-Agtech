var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AgTech_Companies_LATC_v2_1 = new ol.format.GeoJSON();
var features_AgTech_Companies_LATC_v2_1 = format_AgTech_Companies_LATC_v2_1.readFeatures(json_AgTech_Companies_LATC_v2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgTech_Companies_LATC_v2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgTech_Companies_LATC_v2_1.addFeatures(features_AgTech_Companies_LATC_v2_1);
var lyr_AgTech_Companies_LATC_v2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AgTech_Companies_LATC_v2_1, 
                style: style_AgTech_Companies_LATC_v2_1,
                interactive: true,
                title: '<img src="styles/legend/AgTech_Companies_LATC_v2_1.png" /> AgTech_Companies_LATC_v2'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_AgTech_Companies_LATC_v2_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AgTech_Companies_LATC_v2_1];
lyr_AgTech_Companies_LATC_v2_1.set('fieldAliases', {'Company': 'Company', 'Service': 'Service', 'Country': 'Country', 'Contact': 'Contact', 'Photo': 'Photo', });
lyr_AgTech_Companies_LATC_v2_1.set('fieldImages', {'Company': 'TextEdit', 'Service': 'TextEdit', 'Country': 'TextEdit', 'Contact': 'TextEdit', 'Photo': 'ExternalResource', });
lyr_AgTech_Companies_LATC_v2_1.set('fieldLabels', {'Company': 'inline label', 'Service': 'inline label', 'Country': 'inline label', 'Contact': 'inline label', 'Photo': 'no label', });
lyr_AgTech_Companies_LATC_v2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});