let path = require('path');

module.exports = class HomeController {

    static index = (req, res) => {
        res.status(200);
        res.setHeader('Content-Type', 'text/html');
        res.sendFile(path.resolve("views/index.html"));
    }
}