var size = 0;
var placement = 'point';

var style_comuna_elevacion_precio_stgo_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "16.900000000000002px \'Montserrat\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Comuna") !== null) {
        labelText = String(feature.get("Comuna"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(88,88,88,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(255,249,250,0.39999999999999997)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
