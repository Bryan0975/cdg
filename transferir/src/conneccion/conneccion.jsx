var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "ue1dbadesardslea002.czcriav4h9lp.us-east-2.rds.amazonaws.com", //process.env.host,
    user: "dbadmin_audesa", //process.env.username,
    password: "D3s4*39auro"//process.env.password,
});

exports.connection = connection;