var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RAHUL3_1 = new ol.format.GeoJSON();
var features_RAHUL3_1 = format_RAHUL3_1.readFeatures(json_RAHUL3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAHUL3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAHUL3_1.addFeatures(features_RAHUL3_1);
var lyr_RAHUL3_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RAHUL3_1, 
                style: style_RAHUL3_1,
                interactive: true,
                title: '<img src="styles/legend/RAHUL3_1.png" /> RAHUL 3'
            });
var format_RAHUL2_2 = new ol.format.GeoJSON();
var features_RAHUL2_2 = format_RAHUL2_2.readFeatures(json_RAHUL2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAHUL2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAHUL2_2.addFeatures(features_RAHUL2_2);
var lyr_RAHUL2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RAHUL2_2, 
                style: style_RAHUL2_2,
                interactive: true,
                title: '<img src="styles/legend/RAHUL2_2.png" /> RAHUL 2'
            });
var format_RAHUL1_3 = new ol.format.GeoJSON();
var features_RAHUL1_3 = format_RAHUL1_3.readFeatures(json_RAHUL1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAHUL1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAHUL1_3.addFeatures(features_RAHUL1_3);
var lyr_RAHUL1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RAHUL1_3, 
                style: style_RAHUL1_3,
                interactive: true,
                title: '<img src="styles/legend/RAHUL1_3.png" /> RAHUL1'
            });

lyr_OSMStandard_0.setVisible(true);lyr_RAHUL3_1.setVisible(true);lyr_RAHUL2_2.setVisible(true);lyr_RAHUL1_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_RAHUL3_1,lyr_RAHUL2_2,lyr_RAHUL1_3];
lyr_RAHUL3_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RAHUL2_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RAHUL1_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RAHUL3_1.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_RAHUL2_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_RAHUL1_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_RAHUL3_1.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_RAHUL2_2.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_RAHUL1_3.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'header label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_RAHUL1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});