/*
Example JavaScript called from the command-line or within a Node.JS application.
Node.JS v11 command line example (Ubuntu / Debian Linux) where this file and Gs1DigitalLinkToolkit.js are in the same folder:

/usr/local/lib/nodejs/bin/node decodeDigitalLinkURL.js "https://id.gs1.org/gtin/05011157888163"

*/
const GS1DigitalLinkToolkit = require("./GS1DigitalLinkToolkit");
let gs1dlt = new GS1DigitalLinkToolkit();
let structuredObject = {};

try
{
    structuredObject = gs1dlt.analyseURI(process.argv[2],true).structuredOutput;
    structuredObject.error = "OK";
}
catch (err)
{
    structuredObject = {
        identifiers: [],
        qualifiers: [],
        dataAttributes: [],
        other: [],
        error: err.toString()
    }
}
console.log(JSON.stringify(structuredObject));