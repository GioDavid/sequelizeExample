// Pull in models
var db = require("./models");
// TODO - Write fs code here - read from file
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

export default function getInformationFromCSVFile() {
  return fs.createReadStream('MOCK_DATA_SMALL.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    return results;
  });
}
