/* eslint-env browser */
const {
    BatchRecorder,
    jsonEncoder: {JSON_V2}
} = require('zipkin');
const { HttpLogger }    = require('zipkin-transport-http');


const ZIPKIN_SERVER_HOST  = process.env.ZIPKIN_SERVER_HOST;

const zipkin_server_recorder = new BatchRecorder({
    logger: new HttpLogger({
        endpoint: `https://${ZIPKIN_SERVER_HOST}/api/v2/spans`,
        jsonEncoder: JSON_V2
    })
});

module.exports.recorder = zipkin_server_recorder;