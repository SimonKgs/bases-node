const getAge = require("get-age");
const { getUUID } = require("./get-id.plugin");

const { http } = require('./http-client.plugin')

module.exports = {
    getAge,
    getUUID,
    http,
}