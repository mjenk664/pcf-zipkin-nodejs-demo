/* eslint-env browser */
const {
    BatchRecorder,
    jsonEncoder: {JSON_V2}
} = require('zipkin');
const { HttpLogger }    = require('zipkin-transport-http');

// ------------------------------------------------------------------------
//    Zipkin data recorder for Splunk
// ------------------------------------------------------------------------
// Where to send the Zipkin trace data?
// These can be passed in environment variables
const SPLUNK_HEC_URL  = process.env.SPLUNK_HEC_URL;
const SPLUNK_HEC_TOKEN = 'Splunk ' + process.env.SPLUNK_HEC_TOKEN;


const splunk_server_recorder = new BatchRecorder({
    logger: new HttpLogger({
        endpoint: SPLUNK_HEC_URL,
        headers: {'Authorization': SPLUNK_HEC_TOKEN},
        jsonEncoder: JSON_V2
    })
});

module.exports.recorder = splunk_server_recorder;