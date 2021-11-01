// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">
let map, heatmap;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: { lat: -33.885643, lng: 151.187424 },
        mapTypeId: "satellite",
    });
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map,
    });
    document
        .getElementById("toggle-heatmap")
        .addEventListener("click", toggleHeatmap);
    document
        .getElementById("change-gradient")
        .addEventListener("click", changeGradient);
    document
        .getElementById("change-opacity")
        .addEventListener("click", changeOpacity);
    document
        .getElementById("change-radius")
        .addEventListener("click", changeRadius);
}

function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
    const gradient = [
        "rgba(0, 255, 255, 0)",
        "rgba(0, 255, 255, 1)",
        "rgba(0, 191, 255, 1)",
        "rgba(0, 127, 255, 1)",
        "rgba(0, 63, 255, 1)",
        "rgba(0, 0, 255, 1)",
        "rgba(0, 0, 223, 1)",
        "rgba(0, 0, 191, 1)",
        "rgba(0, 0, 159, 1)",
        "rgba(0, 0, 127, 1)",
        "rgba(63, 0, 91, 1)",
        "rgba(127, 0, 63, 1)",
        "rgba(191, 0, 31, 1)",
        "rgba(255, 0, 0, 1)",
    ];

    heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
}

function changeRadius() {
    heatmap.set("radius", heatmap.get("radius") ? null : 20);
}

function changeOpacity() {
    heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
    return [
        new google.maps.LatLng(-33.885643, 151.187424),
        new google.maps.LatLng(-33.885346, 151.187227),
        new google.maps.LatLng(-33.884534, 151.186952),
        new google.maps.LatLng(-33.887214, 151.183345),
        new google.maps.LatLng(-33.885318, 151.187334),
        new google.maps.LatLng(-33.884175, 151.186054),
        new google.maps.LatLng(-33.884778, 151.184090),
        new google.maps.LatLng(-33.884256, 151.183379),
        new google.maps.LatLng(-33.884108, 151.185282),
        new google.maps.LatLng(-33.883804, 151.183897),
        new google.maps.LatLng(-33.883556, 151.186147),
        new google.maps.LatLng(-33.884219, 151.186469),
        new google.maps.LatLng(-33.883125, 151.184497),
        new google.maps.LatLng(-33.884285, 151.185230),
        new google.maps.LatLng(-33.884921, 151.186446),
        new google.maps.LatLng(-33.884147, 151.189668),
        new google.maps.LatLng(-33.884206, 151.189686),
        new google.maps.LatLng(-33.884386, 151.18979),
        new google.maps.LatLng(-33.884701, 151.189902),
        new google.maps.LatLng(-33.884965, 151.189938),
        new google.maps.LatLng(-33.88501, 151.189947),
        new google.maps.LatLng(-33.88536, 151.189952),
        new google.maps.LatLng(-33.885715, 151.19003),
        new google.maps.LatLng(-33.886117, 151.190119),
        new google.maps.LatLng(-33.886564, 151.190209),
        new google.maps.LatLng(-33.886905, 151.19027),
        new google.maps.LatLng(-33.886956, 151.190279),
        new google.maps.LatLng(-33.870224, 151.18352),
        new google.maps.LatLng(-33.870155, 151.184101),
        new google.maps.LatLng(-33.87016, 151.18443),
        new google.maps.LatLng(-33.870378, 151.184527),
        new google.maps.LatLng(-33.870738, 151.184598),
        new google.maps.LatLng(-33.870938, 151.18465),
        new google.maps.LatLng(-33.871024, 151.184889),
        new google.maps.LatLng(-33.870955, 151.185392),
        new google.maps.LatLng(-33.870886, 151.185959),
        new google.maps.LatLng(-33.870811, 151.186275),
        new google.maps.LatLng(-33.870788, 151.186299),
        new google.maps.LatLng(-33.870719, 151.186302),
        new google.maps.LatLng(-33.870702, 151.186298),
        new google.maps.LatLng(-33.870661, 151.186273),
        new google.maps.LatLng(-33.870395, 151.186172),
        new google.maps.LatLng(-33.870228, 151.186116),
        new google.maps.LatLng(-33.870169, 151.18613),
        new google.maps.LatLng(-33.870066, 151.186167),
        new google.maps.LatLng(-33.884345, 151.172922),
        new google.maps.LatLng(-33.884389, 151.172926),
        new google.maps.LatLng(-33.884437, 151.172924),
        new google.maps.LatLng(-33.884746, 151.172818),
        new google.maps.LatLng(-33.885436, 151.172959),
        new google.maps.LatLng(-33.88612, 151.173112),
        new google.maps.LatLng(-33.886433, 151.173029),
        new google.maps.LatLng(-33.886631, 151.171213),
        new google.maps.LatLng(-33.88666, 151.171033),
        new google.maps.LatLng(-33.886801, 151.170141),
        new google.maps.LatLng(-33.886823, 151.170034),
        new google.maps.LatLng(-33.886831, 151.169916),
        new google.maps.LatLng(-33.887034, 151.168208),
        new google.maps.LatLng(-33.887056, 151.168034),
        new google.maps.LatLng(-33.887169, 151.167145),
        new google.maps.LatLng(-33.887217, 151.166715),
        new google.maps.LatLng(-33.886144, 151.166403),
        new google.maps.LatLng(-33.885292, 151.166257),
        new google.maps.LatLng(-33.880666, 151.140374),
        new google.maps.LatLng(-33.880501, 151.141281),
        new google.maps.LatLng(-33.880148, 151.142052),
        new google.maps.LatLng(-33.880173, 151.141148),
        new google.maps.LatLng(-33.880693, 151.140592),
        new google.maps.LatLng(-33.881261, 151.141142),
        new google.maps.LatLng(-33.881808, 151.14173),
        new google.maps.LatLng(-33.88234, 151.142341),
        new google.maps.LatLng(-33.882812, 151.143022),
        new google.maps.LatLng(-33.8833, 151.143672),
        new google.maps.LatLng(-33.883809, 151.144275),
        new google.maps.LatLng(-33.884246, 151.144979),
        new google.maps.LatLng(-33.884791, 151.145958),
        new google.maps.LatLng(-33.885675, 151.146746),
        new google.maps.LatLng(-33.886262, 151.14578),
        new google.maps.LatLng(-33.886776, 151.145093),
        new google.maps.LatLng(-33.887282, 151.144426),
        new google.maps.LatLng(-33.887783, 151.143767),
        new google.maps.LatLng(-33.888343, 151.143184),
        new google.maps.LatLng(-33.888895, 151.142506),
        new google.maps.LatLng(-33.889371, 151.141701),
        new google.maps.LatLng(-33.889722, 151.140952),
        new google.maps.LatLng(-33.890315, 151.140305),
        new google.maps.LatLng(-33.890738, 151.139616),
        new google.maps.LatLng(-33.879448, 151.188702),
        new google.maps.LatLng(-33.879023, 151.188585),
        new google.maps.LatLng(-33.878542, 151.188492),
        new google.maps.LatLng(-33.8781, 151.188411),
        new google.maps.LatLng(-33.877986, 151.188376),
        new google.maps.LatLng(-33.87768, 151.188313),
        new google.maps.LatLng(-33.877316, 151.188273),
        new google.maps.LatLng(-33.877135, 151.188254),
        new google.maps.LatLng(-33.876987, 151.188303),
        new google.maps.LatLng(-33.876946, 151.188404),
        new google.maps.LatLng(-33.876944, 151.188467),
        new google.maps.LatLng(-33.876892, 151.188459),
        new google.maps.LatLng(-33.876842, 151.188442),
        new google.maps.LatLng(-33.876822, 151.188391),
        new google.maps.LatLng(-33.876814, 151.188412),
        new google.maps.LatLng(-33.876787, 151.188628),
        new google.maps.LatLng(-33.876729, 151.18865),
        new google.maps.LatLng(-33.876759, 151.188677),
        new google.maps.LatLng(-33.876772, 151.188498),
        new google.maps.LatLng(-33.876787, 151.188389),
        new google.maps.LatLng(-33.876848, 151.188283),
        new google.maps.LatLng(-33.87687, 151.188239),
        new google.maps.LatLng(-33.877015, 151.188198),
        new google.maps.LatLng(-33.877333, 151.188256),
        new google.maps.LatLng(-33.877595, 151.188308),
        new google.maps.LatLng(-33.877797, 151.188344),
        new google.maps.LatLng(-33.87816, 151.188442),
        new google.maps.LatLng(-33.878414, 151.188508),
        new google.maps.LatLng(-33.878445, 151.188516),
        new google.maps.LatLng(-33.878503, 151.188529),
        new google.maps.LatLng(-33.878607, 151.188549),
        new google.maps.LatLng(-33.878670, 151.188644),
        new google.maps.LatLng(-33.878847, 151.188706),
        new google.maps.LatLng(-33.879240, 151.188744),
        new google.maps.LatLng(-33.879738, 151.188822),
        new google.maps.LatLng(-33.880201, 151.188882),
        new google.maps.LatLng(-33.880400, 151.188905),
        new google.maps.LatLng(-33.880501, 151.188921),
        new google.maps.LatLng(-33.880892, 151.188986),
        new google.maps.LatLng(-33.881446, 151.189087),
        new google.maps.LatLng(-33.881985, 151.189199),
        new google.maps.LatLng(-33.882239, 151.189249),
        new google.maps.LatLng(-33.882286, 151.189266),
        new google.maps.LatLng(-33.897847, 151.179388),
        new google.maps.LatLng(-33.897874, 151.17918),
        new google.maps.LatLng(-33.897885, 151.179069),
        new google.maps.LatLng(-33.897887, 151.17905),
        new google.maps.LatLng(-33.897933, 151.178954),
        new google.maps.LatLng(-33.898242, 151.17899),
        new google.maps.LatLng(-33.898617, 151.179075),
        new google.maps.LatLng(-33.898719, 151.179092),
        new google.maps.LatLng(-33.898944, 151.179145),
        new google.maps.LatLng(-33.899320, 151.179251),
        new google.maps.LatLng(-33.899590, 151.179309),
        new google.maps.LatLng(-33.899677, 151.179324),
        new google.maps.LatLng(-33.899966, 151.17936),
        new google.maps.LatLng(-33.870288, 151.17943),
        new google.maps.LatLng(-33.870443, 151.179461),
        new google.maps.LatLng(-33.870465, 151.179474),
        new google.maps.LatLng(-33.870644, 151.17954),
        new google.maps.LatLng(-33.870948, 151.17962),
        new google.maps.LatLng(-33.871242, 151.179685),
        new google.maps.LatLng(-33.871375, 151.179702),
        new google.maps.LatLng(-33.871400, 151.179703),
        new google.maps.LatLng(-33.871453, 151.179707),
        new google.maps.LatLng(-33.871473, 151.179709),
        new google.maps.LatLng(-33.871532, 151.179707),
        new google.maps.LatLng(-33.871852, 151.179729),
        new google.maps.LatLng(-33.872173, 151.179789),
        new google.maps.LatLng(-33.872459, 151.179847),
        new google.maps.LatLng(-33.872554, 151.179825),
        new google.maps.LatLng(-33.872647, 151.179549),
        new google.maps.LatLng(-33.872693, 151.179179),
        new google.maps.LatLng(-33.872729, 151.178751),
        new google.maps.LatLng(-33.866104, 151.159291),
        new google.maps.LatLng(-33.866103, 151.159268),
        new google.maps.LatLng(-33.866138, 151.159229),
        new google.maps.LatLng(-33.866183, 151.159231),
        new google.maps.LatLng(-33.866153, 151.159276),
        new google.maps.LatLng(-33.866005, 151.159365),
        new google.maps.LatLng(-33.865897, 151.15957),
        new google.maps.LatLng(-33.865767, 151.159739),
        new google.maps.LatLng(-33.865693, 151.160389),
        new google.maps.LatLng(-33.865615, 151.161201),
        new google.maps.LatLng(-33.865533, 151.162121),
        new google.maps.LatLng(-33.865467, 151.162939),
        new google.maps.LatLng(-33.865444, 151.164821),
        new google.maps.LatLng(-33.865444, 151.164964),
        new google.maps.LatLng(-33.865318, 151.165424),
        new google.maps.LatLng(-33.863961, 151.165296),
        new google.maps.LatLng(-33.863115, 151.165196),
        new google.maps.LatLng(-33.862967, 151.165183),
        new google.maps.LatLng(-33.862278, 151.165127),
        new google.maps.LatLng(-33.861675, 151.165055),
        new google.maps.LatLng(-33.860932, 151.164988),
        new google.maps.LatLng(-33.859337, 151.164862),
        new google.maps.LatLng(-33.873187, 151.171922),
        new google.maps.LatLng(-33.873043, 151.172118),
        new google.maps.LatLng(-33.873007, 151.172165),
        new google.maps.LatLng(-33.872979, 151.172219),
        new google.maps.LatLng(-33.872865, 151.172394),
        new google.maps.LatLng(-33.872779, 151.172503),
        new google.maps.LatLng(-33.872676, 151.172701),
        new google.maps.LatLng(-33.872606, 151.172806),
        new google.maps.LatLng(-33.872566, 151.17284),
        new google.maps.LatLng(-33.872508, 151.172852),
        new google.maps.LatLng(-33.872387, 151.173011),
        new google.maps.LatLng(-33.872099, 151.173328),
        new google.maps.LatLng(-33.871704, 151.173783),
        new google.maps.LatLng(-33.871481, 151.174081),
        new google.maps.LatLng(-33.871412, 151.174179),
        new google.maps.LatLng(-33.871352, 151.17422),
        new google.maps.LatLng(-33.871248, 151.174327),
        new google.maps.LatLng(-33.870904, 151.174781),
        new google.maps.LatLng(-33.870521, 151.175283),
        new google.maps.LatLng(-33.870337, 151.175553),
        new google.maps.LatLng(-33.870128, 151.175832),
        new google.maps.LatLng(-33.869756, 151.176331),
        new google.maps.LatLng(-33.869310, 151.176902),
        new google.maps.LatLng(-33.869132, 151.177065),
        new google.maps.LatLng(-33.869092, 151.177103),
        new google.maps.LatLng(-33.868979, 151.177172),
        new google.maps.LatLng(-33.868595, 151.177634),
        new google.maps.LatLng(-33.868372, 151.177913),
        new google.maps.LatLng(-33.868337, 151.177961),
        new google.maps.LatLng(-33.868244, 151.178138),
        new google.maps.LatLng(-33.867942, 151.178581),
        new google.maps.LatLng(-33.867482, 151.179094),
        new google.maps.LatLng(-33.867031, 151.179606),
        new google.maps.LatLng(-33.866732, 151.179986),
        new google.maps.LatLng(-33.866680, 151.180058),
        new google.maps.LatLng(-33.866633, 151.180109),
        new google.maps.LatLng(-33.866580, 151.180211),
        new google.maps.LatLng(-33.866367, 151.180594),
        new google.maps.LatLng(-33.865910, 151.181137),
        new google.maps.LatLng(-33.865353, 151.181806),
        new google.maps.LatLng(-33.864962, 151.182298),
        new google.maps.LatLng(-33.864868, 151.182486),
        new google.maps.LatLng(-33.864518, 151.182913),
        new google.maps.LatLng(-33.863435, 151.184173),
        new google.maps.LatLng(-33.862847, 151.184953),
        new google.maps.LatLng(-33.862291, 151.185935),
        new google.maps.LatLng(-33.862224, 151.186074),
        new google.maps.LatLng(-33.861957, 151.186892),
        new google.maps.LatLng(-33.861652, 151.188886),
        new google.maps.LatLng(-33.861284, 151.189955),
        new google.maps.LatLng(-33.861210, 151.190068),
        new google.maps.LatLng(-33.861064, 151.19072),
        new google.maps.LatLng(-33.861040, 151.191411),
        new google.maps.LatLng(-33.861048, 151.192324),
        new google.maps.LatLng(-33.860851, 151.193118),
        new google.maps.LatLng(-33.859977, 151.194591),
        new google.maps.LatLng(-33.859913, 151.194698),
        new google.maps.LatLng(-33.859623, 151.195065),
        new google.maps.LatLng(-33.858902, 151.195158),
        new google.maps.LatLng(-33.858428, 151.19457),
        new google.maps.LatLng(-33.857687, 151.19334),
        new google.maps.LatLng(-33.857583, 151.19324),
        new google.maps.LatLng(-33.857019, 151.192787),
        new google.maps.LatLng(-33.856603, 151.192322),
        new google.maps.LatLng(-33.856380, 151.191602),
        new google.maps.LatLng(-33.855790, 151.191382),
        new google.maps.LatLng(-33.854493, 151.192133),
        new google.maps.LatLng(-33.854361, 151.192206),
        new google.maps.LatLng(-33.853719, 151.19265),
        new google.maps.LatLng(-33.853096, 151.192915),
        new google.maps.LatLng(-33.851617, 151.193211),
        new google.maps.LatLng(-33.851496, 151.193246),
        new google.maps.LatLng(-33.850733, 151.193428),
        new google.maps.LatLng(-33.850126, 151.193536),
        new google.maps.LatLng(-33.850103, 151.193784),
        new google.maps.LatLng(-33.850390, 151.19401),
        new google.maps.LatLng(-33.850448, 151.194013),
        new google.maps.LatLng(-33.850536, 151.19404),
        new google.maps.LatLng(-33.850493, 151.194141),
        new google.maps.LatLng(-33.890859, 151.152808),
        new google.maps.LatLng(-33.890864, 151.152768),
        new google.maps.LatLng(-33.890995, 151.152539),
        new google.maps.LatLng(-33.891148, 151.152172),
        new google.maps.LatLng(-33.891385, 151.151312),
        new google.maps.LatLng(-33.891405, 151.150776),
        new google.maps.LatLng(-33.891288, 151.150528),
        new google.maps.LatLng(-33.891113, 151.150441),
        new google.maps.LatLng(-33.891027, 151.150395),
        new google.maps.LatLng(-33.891094, 151.150311),
        new google.maps.LatLng(-33.891211, 151.150183),
        new google.maps.LatLng(-33.891061, 151.149334),
        new google.maps.LatLng(-33.890538, 151.148718),
        new google.maps.LatLng(-33.890095, 151.148086),
        new google.maps.LatLng(-33.889644, 151.14736),
        new google.maps.LatLng(-33.889254, 151.146844),
        new google.maps.LatLng(-33.888855, 151.146397),
        new google.maps.LatLng(-33.888483, 151.145963),
        new google.maps.LatLng(-33.888015, 151.145365),
        new google.maps.LatLng(-33.887558, 151.144735),
        new google.maps.LatLng(-33.887472, 151.144323),
        new google.maps.LatLng(-33.887631, 151.144025),
        new google.maps.LatLng(-33.887767, 151.143987),
        new google.maps.LatLng(-33.887486, 151.144452),
        new google.maps.LatLng(-33.886977, 151.145043),
        new google.maps.LatLng(-33.886583, 151.145552),
        new google.maps.LatLng(-33.886541, 151.14561),
        new google.maps.LatLng(-33.886516, 151.145659),
        new google.maps.LatLng(-33.886378, 151.145707),
        new google.maps.LatLng(-33.886044, 151.145362),
        new google.maps.LatLng(-33.885598, 151.144715),
        new google.maps.LatLng(-33.885321, 151.144361),
        new google.maps.LatLng(-33.885207, 151.144236),
        new google.maps.LatLng(-33.885751, 151.144062),
        new google.maps.LatLng(-33.885996, 151.143881),
        new google.maps.LatLng(-33.886092, 151.14383),
        new google.maps.LatLng(-33.885998, 151.143899),
        new google.maps.LatLng(-33.885114, 151.144365),
        new google.maps.LatLng(-33.885022, 151.144441),
        new google.maps.LatLng(-33.884823, 151.144635),
        new google.maps.LatLng(-33.884719, 151.144629),
        new google.maps.LatLng(-33.885069, 151.144176),
        new google.maps.LatLng(-33.885511, 151.14365),
        new google.maps.LatLng(-33.885771, 151.143291),
        new google.maps.LatLng(-33.885839, 151.143159),
        new google.maps.LatLng(-33.882651, 151.150628),
        new google.maps.LatLng(-33.882616, 151.150599),
        new google.maps.LatLng(-33.882702, 151.15047),
        new google.maps.LatLng(-33.882915, 151.150192),
        new google.maps.LatLng(-33.883137, 151.149887),
        new google.maps.LatLng(-33.883414, 151.149519),
        new google.maps.LatLng(-33.883629, 151.149237),
        new google.maps.LatLng(-33.883688, 151.149157),
        new google.maps.LatLng(-33.883716, 151.149106),
        new google.maps.LatLng(-33.883798, 151.149072),
        new google.maps.LatLng(-33.883997, 151.149186),
        new google.maps.LatLng(-33.884271, 151.149538),
        new google.maps.LatLng(-33.884577, 151.149948),
        new google.maps.LatLng(-33.884828, 151.15026),
        new google.maps.LatLng(-33.884999, 151.150477),
        new google.maps.LatLng(-33.885113, 151.150651),
        new google.maps.LatLng(-33.885155, 151.150703),
        new google.maps.LatLng(-33.885192, 151.150749),
        new google.maps.LatLng(-33.885278, 151.150839),
        new google.maps.LatLng(-33.885387, 151.150857),
        new google.maps.LatLng(-33.885478, 151.15089),
        new google.maps.LatLng(-33.885526, 151.151022),
        new google.maps.LatLng(-33.885598, 151.151148),
        new google.maps.LatLng(-33.885631, 151.151202),
        new google.maps.LatLng(-33.885661, 151.151267),
        new google.maps.LatLng(-33.853986, 151.176035),
        new google.maps.LatLng(-33.854102, 151.175089),
        new google.maps.LatLng(-33.854211, 151.174156),
        new google.maps.LatLng(-33.853861, 151.173385),
        new google.maps.LatLng(-33.853151, 151.173214),
        new google.maps.LatLng(-33.852439, 151.173077),
        new google.maps.LatLng(-33.851740, 151.172905),
        new google.maps.LatLng(-33.851069, 151.172785),
        new google.maps.LatLng(-33.850345, 151.172649),
        new google.maps.LatLng(-33.899633, 151.172603),
        new google.maps.LatLng(-33.899750, 151.1717),
        new google.maps.LatLng(-33.899885, 151.170854),
        new google.maps.LatLng(-33.899209, 151.150607),
        new google.maps.LatLng(-33.895656, 151.150395),
        new google.maps.LatLng(-33.895203, 151.150304),
        new google.maps.LatLng(-33.878738, 151.165584),
        new google.maps.LatLng(-33.878812, 151.165189),
        new google.maps.LatLng(-33.878824, 151.165092),
        new google.maps.LatLng(-33.878833, 151.164932),
        new google.maps.LatLng(-33.878834, 151.164898),
        new google.maps.LatLng(-33.878740, 151.164757),
        new google.maps.LatLng(-33.878501, 151.164433),
        new google.maps.LatLng(-33.878182, 151.164026),
        new google.maps.LatLng(-33.877851, 151.163623),
        new google.maps.LatLng(-33.877486, 151.163166),
        new google.maps.LatLng(-33.877109, 151.162674),
        new google.maps.LatLng(-33.876743, 151.162186),
        new google.maps.LatLng(-33.876440, 151.1618),
        new google.maps.LatLng(-33.876295, 151.161614),
        new google.maps.LatLng(-33.876158, 151.16144),
        new google.maps.LatLng(-33.875806, 151.160997),
        new google.maps.LatLng(-33.875422, 151.160484),
        new google.maps.LatLng(-33.875126, 151.160087),
        new google.maps.LatLng(-33.875012, 151.159854),
        new google.maps.LatLng(-33.875164, 151.159573),
        new google.maps.LatLng(-33.875498, 151.15918),
        new google.maps.LatLng(-33.875868, 151.15873),
        new google.maps.LatLng(-33.876256, 151.15824),
        new google.maps.LatLng(-33.876519, 151.157928),
        new google.maps.LatLng(-33.876539, 151.157904),
        new google.maps.LatLng(-33.876595, 151.157854),
        new google.maps.LatLng(-33.876853, 151.157547),
        new google.maps.LatLng(-33.877234, 151.157087),
        new google.maps.LatLng(-33.877644, 151.156558),
        new google.maps.LatLng(-33.878066, 151.156017),
        new google.maps.LatLng(-33.878468, 151.155499),
        new google.maps.LatLng(-33.878866, 151.154995),
        new google.maps.LatLng(-33.879295, 151.154455),
        new google.maps.LatLng(-33.879695, 151.15395),
        new google.maps.LatLng(-33.879982, 151.153584),
        new google.maps.LatLng(-33.880295, 151.153223),
        new google.maps.LatLng(-33.880664, 151.152766),
        new google.maps.LatLng(-33.881043, 151.152288),
        new google.maps.LatLng(-33.881399, 151.151823),
        new google.maps.LatLng(-33.881727, 151.151407),
        new google.maps.LatLng(-33.881853, 151.151247),
        new google.maps.LatLng(-33.881894, 151.151195),
        new google.maps.LatLng(-33.882076, 151.150977),
        new google.maps.LatLng(-33.882338, 151.150603),
        new google.maps.LatLng(-33.882666, 151.150133),
        new google.maps.LatLng(-33.883048, 151.149634),
        new google.maps.LatLng(-33.883450, 151.149198),
        new google.maps.LatLng(-33.883791, 151.148998),
        new google.maps.LatLng(-33.884177, 151.148959),
        new google.maps.LatLng(-33.884388, 151.148971),
        new google.maps.LatLng(-33.884404, 151.149128),
        new google.maps.LatLng(-33.884586, 151.149524),
        new google.maps.LatLng(-33.884835, 151.149927),
        new google.maps.LatLng(-33.885116, 151.150307),
        new google.maps.LatLng(-33.885282, 151.150539),
        new google.maps.LatLng(-33.885346, 151.150692),
        new google.maps.LatLng(-33.865769, 151.157201),
        new google.maps.LatLng(-33.865790, 151.157414),
        new google.maps.LatLng(-33.865802, 151.157755),
        new google.maps.LatLng(-33.865791, 151.158219),
        new google.maps.LatLng(-33.865763, 151.158759),
        new google.maps.LatLng(-33.865726, 151.159348),
        new google.maps.LatLng(-33.865716, 151.159882),
        new google.maps.LatLng(-33.865708, 151.160202),
        new google.maps.LatLng(-33.865705, 151.160253),
        new google.maps.LatLng(-33.865707, 151.160369),
        new google.maps.LatLng(-33.865692, 151.16072),
        new google.maps.LatLng(-33.865699, 151.161215),
        new google.maps.LatLng(-33.865687, 151.161789),
        new google.maps.LatLng(-33.865666, 151.162373),
        new google.maps.LatLng(-33.865598, 151.162883),
        new google.maps.LatLng(-33.865543, 151.163039),
        new google.maps.LatLng(-33.865532, 151.163125),
        new google.maps.LatLng(-33.865510, 151.163553),
        new google.maps.LatLng(-33.865448, 151.164053),
        new google.maps.LatLng(-33.865388, 151.164645),
        new google.maps.LatLng(-33.865323, 151.16525),
        new google.maps.LatLng(-33.865303, 151.165847),
        new google.maps.LatLng(-33.865251, 151.166439),
        new google.maps.LatLng(-33.865204, 151.16702),
        new google.maps.LatLng(-33.865172, 151.167556),
        new google.maps.LatLng(-33.865164, 151.168075),
        new google.maps.LatLng(-33.865153, 151.168618),
        new google.maps.LatLng(-33.865136, 151.169112),
        new google.maps.LatLng(-33.865129, 151.169378),
        new google.maps.LatLng(-33.865119, 151.169481),
        new google.maps.LatLng(-33.865100, 151.169852),
        new google.maps.LatLng(-33.865083, 151.170349),
        new google.maps.LatLng(-33.865045, 151.17093),
        new google.maps.LatLng(-33.864992, 151.171481),
        new google.maps.LatLng(-33.864980, 151.171695),
        new google.maps.LatLng(-33.864993, 151.171843),
        new google.maps.LatLng(-33.864986, 151.172255),
        new google.maps.LatLng(-33.864975, 151.172823),
        new google.maps.LatLng(-33.864939, 151.173411),
        new google.maps.LatLng(-33.864902, 151.174014),
        new google.maps.LatLng(-33.864853, 151.174576),
        new google.maps.LatLng(-33.864826, 151.174922),
        new google.maps.LatLng(-33.864796, 151.175375),
        new google.maps.LatLng(-33.864782, 151.175869),
        new google.maps.LatLng(-33.864768, 151.176089),
        new google.maps.LatLng(-33.864766, 151.176117),
        new google.maps.LatLng(-33.864723, 151.176276),
        new google.maps.LatLng(-33.864681, 151.176649),
        new google.maps.LatLng(-33.882012, 151.1542),
        new google.maps.LatLng(-33.881574, 151.154911),
        new google.maps.LatLng(-33.881055, 151.155597),
        new google.maps.LatLng(-33.880479, 151.156341),
        new google.maps.LatLng(-33.879996, 151.156939),
        new google.maps.LatLng(-33.879459, 151.157613),
        new google.maps.LatLng(-33.878953, 151.158228),
        new google.maps.LatLng(-33.878409, 151.158839),
        new google.maps.LatLng(-33.877842, 151.159501),
        new google.maps.LatLng(-33.877334, 151.160181),
        new google.maps.LatLng(-33.876809, 151.160836),
        new google.maps.LatLng(-33.876241, 151.161514),
        new google.maps.LatLng(-33.875725, 151.162145),
        new google.maps.LatLng(-33.875192, 151.162805),
        new google.maps.LatLng(-33.874672, 151.163464),
        new google.maps.LatLng(-33.874084, 151.164186),
        new google.maps.LatLng(-33.873533, 151.163636),
        new google.maps.LatLng(-33.873021, 151.163009),
        new google.maps.LatLng(-33.872501, 151.162371),
        new google.maps.LatLng(-33.871964, 151.161681),
        new google.maps.LatLng(-33.871479, 151.161078),
        new google.maps.LatLng(-33.870992, 151.160477),
        new google.maps.LatLng(-33.870467, 151.159801),
        new google.maps.LatLng(-33.870093, 151.158904),
        new google.maps.LatLng(-33.869657, 151.158103),
        new google.maps.LatLng(-33.869132, 151.157276),
        new google.maps.LatLng(-33.868564, 151.156469),
        new google.maps.LatLng(-33.867984, 151.155745),
        new google.maps.LatLng(-33.867385, 151.155299),
        new google.maps.LatLng(-33.866604, 151.155297),
        new google.maps.LatLng(-33.865838, 151.1552),
        new google.maps.LatLng(-33.865139, 151.155139),
        new google.maps.LatLng(-33.864457, 151.155094),
        new google.maps.LatLng(-33.863716, 151.155142),
        new google.maps.LatLng(-33.862932, 151.155398),
        new google.maps.LatLng(-33.862126, 151.155813),
        new google.maps.LatLng(-33.861344, 151.156215),
        new google.maps.LatLng(-33.860556, 151.156495),
        new google.maps.LatLng(-33.859732, 151.156484),
        new google.maps.LatLng(-33.858916, 151.156228),
        new google.maps.LatLng(-33.858182, 151.155695),
        new google.maps.LatLng(-33.857676, 151.155118),
        new google.maps.LatLng(-33.857039, 151.154346),
        new google.maps.LatLng(-33.856335, 151.153719),
        new google.maps.LatLng(-33.855503, 151.153406),
        new google.maps.LatLng(-33.854665, 151.153242),
        new google.maps.LatLng(-33.853837, 151.153172),
        new google.maps.LatLng(-33.852986, 151.153112),
        new google.maps.LatLng(-33.851266, 151.153355),
    ];
}