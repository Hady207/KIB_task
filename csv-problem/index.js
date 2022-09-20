const fs = require("fs");
const readlineSync = require("readline-sync");
const { stringify } = require("csv-stringify");
const { parse } = require("csv-parse");
const mockData = require("./seed");
const records = [];

// Initialize the parser
const parser = parse({ delimiter: ",", from_line: 2 });
const filename = readlineSync.question("enter a name for the file ");
const writableStream = fs.createWriteStream(`./csv/${filename}.csv`);

const columns = [
  "id",
  "area",
  "product_name",
  "product_quantity",
  "product_brand",
];

const stringifier = stringify({ header: true, columns: columns });

mockData.forEach((row) => stringifier.write(row));

stringifier.pipe(writableStream);
console.log("Finished writing data");

// =============================================

// time complexity O(n)
const calcAverage = () => {
  const newRecord = {};
  for (let i = 0; i < records.length; i++) {
    newRecord[records[i][2]] = 0;
  }

  for (let i = 0; i < records.length; i++) {
    newRecord[records[i][2]] = (
      parseFloat(newRecord[records[i][2]]) +
      parseFloat(records[i][3]) / records.length
    ).toFixed(2);
  }

  const writableStream = fs.createWriteStream(`./csv/0_${filename}.csv`);

  const columns = ["product_name", "product_quantity_average"];

  const stringifier = stringify({ header: true, columns: columns });

  for (const key in newRecord) {
    stringifier.write([`${key},${newRecord[key]}`]);
  }

  stringifier.pipe(writableStream);
};

// time complexity O(n)
const calcPopularBrand = () => {
  const secondRecord = {};
  for (let i = 0; i < records.length; i++) {
    secondRecord[records[i][4]] = {
      productName: records[i][2],
      popularity: 0,
    };
  }
  for (let i = 0; i < records.length; i++) {
    secondRecord[records[i][4]] = {
      productName: records[i][2],
      popularity: ++secondRecord[records[i][4]].popularity,
    };
  }

  const writableStream = fs.createWriteStream(`./csv/1_${filename}.csv`);

  const columns = ["product_name", "most_popular_brand_for_that_product"];

  const stringifier = stringify({ header: true, columns: columns });

  for (const key in secondRecord) {
    stringifier.write([`${secondRecord[key].productName},${key}`]);
  }

  stringifier.pipe(writableStream);
};

fs.createReadStream("./csv/saved_from_db.csv")
  .pipe(parser)
  .on("data", function (row) {
    records.push(row);
  })
  .on("end", function () {
    calcAverage();
    calcPopularBrand();
  })
  .on("error", function (error) {
    console.log(error.message);
  });
