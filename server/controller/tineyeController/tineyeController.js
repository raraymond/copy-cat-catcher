var TinEye = require('tineye-api')
var api = new TinEye(
    'https://api.tineye.com/rest/',
    'LCkn,2K7osVwkX95K4Oy',
    '6mm60lsCNIB,FwOWjJqA80QZHh9BMwc-ber4u=t^'
);

var url = 'https://services.tineye.com/developers/img/meloncat.20c77523.jpg';
var params = {
    'offset': 0,
    'limit': 10,
    'sort': 'score',
    'order': 'desc'
};

exports.searchResultsGet = (req, res, ) => {
    api.searchUrl(url, params)
        .then(function(response) {
            console.log(response);
            res.json(response);
        })
        .catch(function(error) {
            console.log(error);
        });

}