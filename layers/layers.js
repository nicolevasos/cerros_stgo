var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_comuna_elevacion_precio_stgo_1 = new ol.format.GeoJSON();
var features_comuna_elevacion_precio_stgo_1 = format_comuna_elevacion_precio_stgo_1.readFeatures(json_comuna_elevacion_precio_stgo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comuna_elevacion_precio_stgo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comuna_elevacion_precio_stgo_1.addFeatures(features_comuna_elevacion_precio_stgo_1);
var lyr_comuna_elevacion_precio_stgo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_comuna_elevacion_precio_stgo_1, 
                style: style_comuna_elevacion_precio_stgo_1,
                interactive: true,
                title: '<img src="styles/legend/comuna_elevacion_precio_stgo_1.png" /> comuna_elevacion_precio_stgo'
            });
var format_capa_final_cerro_stgo_2 = new ol.format.GeoJSON();
var features_capa_final_cerro_stgo_2 = format_capa_final_cerro_stgo_2.readFeatures(json_capa_final_cerro_stgo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_capa_final_cerro_stgo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_capa_final_cerro_stgo_2.addFeatures(features_capa_final_cerro_stgo_2);
var lyr_capa_final_cerro_stgo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_capa_final_cerro_stgo_2, 
                style: style_capa_final_cerro_stgo_2,
                interactive: true,
    title: 'capa_final_cerro_stgo<br />\
    <img src="styles/legend/capa_final_cerro_stgo_2_0.png" /> -15.58 - -15<br />\
    <img src="styles/legend/capa_final_cerro_stgo_2_1.png" /> -15 - -10<br />\
    <img src="styles/legend/capa_final_cerro_stgo_2_2.png" /> -10 - -5<br />\
    <img src="styles/legend/capa_final_cerro_stgo_2_3.png" /> -5 - 0<br />\
    <img src="styles/legend/capa_final_cerro_stgo_2_4.png" /> 0 - 5<br />\
    <img src="styles/legend/capa_final_cerro_stgo_2_5.png" /> 5 - 10<br />\
    <img src="styles/legend/capa_final_cerro_stgo_2_6.png" /> 10 - 15<br />\
    <img src="styles/legend/capa_final_cerro_stgo_2_7.png" /> 15 - 16.69<br />'
        });
var format_20m_3 = new ol.format.GeoJSON();
var features_20m_3 = format_20m_3.readFeatures(json_20m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20m_3.addFeatures(features_20m_3);
var lyr_20m_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20m_3, 
                style: style_20m_3,
                interactive: true,
                title: '<img src="styles/legend/20m_3.png" /> 20m'
            });
var format_linea_perfil_san_cristobal_stgo_4 = new ol.format.GeoJSON();
var features_linea_perfil_san_cristobal_stgo_4 = format_linea_perfil_san_cristobal_stgo_4.readFeatures(json_linea_perfil_san_cristobal_stgo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linea_perfil_san_cristobal_stgo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linea_perfil_san_cristobal_stgo_4.addFeatures(features_linea_perfil_san_cristobal_stgo_4);
var lyr_linea_perfil_san_cristobal_stgo_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_linea_perfil_san_cristobal_stgo_4, 
                style: style_linea_perfil_san_cristobal_stgo_4,
                interactive: true,
                title: '<img src="styles/legend/linea_perfil_san_cristobal_stgo_4.png" /> linea_perfil_san_cristobal_stgo'
            });
var format_poligono_sancristobal_stgo_5 = new ol.format.GeoJSON();
var features_poligono_sancristobal_stgo_5 = format_poligono_sancristobal_stgo_5.readFeatures(json_poligono_sancristobal_stgo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligono_sancristobal_stgo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligono_sancristobal_stgo_5.addFeatures(features_poligono_sancristobal_stgo_5);
var lyr_poligono_sancristobal_stgo_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poligono_sancristobal_stgo_5, 
                style: style_poligono_sancristobal_stgo_5,
                interactive: false,
                title: '<img src="styles/legend/poligono_sancristobal_stgo_5.png" /> poligono_sancristobal_stgo'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_comuna_elevacion_precio_stgo_1.setVisible(true);lyr_capa_final_cerro_stgo_2.setVisible(true);lyr_20m_3.setVisible(true);lyr_linea_perfil_san_cristobal_stgo_4.setVisible(true);lyr_poligono_sancristobal_stgo_5.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_comuna_elevacion_precio_stgo_1,lyr_capa_final_cerro_stgo_2,lyr_20m_3,lyr_linea_perfil_san_cristobal_stgo_4,lyr_poligono_sancristobal_stgo_5];
lyr_comuna_elevacion_precio_stgo_1.set('fieldAliases', {'Comuna': 'Comuna', 'Elevación promedio (msnm)': 'Elevación promedio (msnm)', 'Precio m² (UF)': 'Precio m² (UF)', });
lyr_capa_final_cerro_stgo_2.set('fieldAliases', {'Nombre': 'Nombre', 'Variación de precios (%)': 'Variación de precios (%)', });
lyr_20m_3.set('fieldAliases', {'Elevación (msnm)': 'Elevación (msnm)', });
lyr_linea_perfil_san_cristobal_stgo_4.set('fieldAliases', {});
lyr_poligono_sancristobal_stgo_5.set('fieldAliases', {'Nombre': 'Nombre', 'd': 'd', });
lyr_comuna_elevacion_precio_stgo_1.set('fieldImages', {'Comuna': 'TextEdit', 'Elevación promedio (msnm)': '', 'Precio m² (UF)': 'TextEdit', });
lyr_capa_final_cerro_stgo_2.set('fieldImages', {'Nombre': 'TextEdit', 'Variación de precios (%)': 'TextEdit', });
lyr_20m_3.set('fieldImages', {'Elevación (msnm)': 'TextEdit', });
lyr_linea_perfil_san_cristobal_stgo_4.set('fieldImages', {});
lyr_poligono_sancristobal_stgo_5.set('fieldImages', {'Nombre': 'TextEdit', 'd': 'TextEdit', });
lyr_comuna_elevacion_precio_stgo_1.set('fieldLabels', {'Comuna': 'header label', 'Elevación promedio (msnm)': 'header label', 'Precio m² (UF)': 'header label', });
lyr_capa_final_cerro_stgo_2.set('fieldLabels', {'Nombre': 'header label', 'Variación de precios (%)': 'header label', });
lyr_20m_3.set('fieldLabels', {'Elevación (msnm)': 'header label', });
lyr_linea_perfil_san_cristobal_stgo_4.set('fieldLabels', {});
lyr_poligono_sancristobal_stgo_5.set('fieldLabels', {'Nombre': 'no label', 'd': 'no label', });
lyr_poligono_sancristobal_stgo_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});