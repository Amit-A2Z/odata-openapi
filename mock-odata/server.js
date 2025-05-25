const express = require("express");
const swaggerUi = require("swagger-ui-express");
const cdsSwaggerUiExpress = require("cds-swagger-ui-express");
const fs = require("fs");
const path = require("path");

const NorthwindServer = require("./NorthwindServer");

NorthwindServer.create(3010);
console.log("🚀 OData v4 server running at http://localhost:3010/");

const app = express();
const port = 3000;

// Serve static mock-metadata.xml at /odata/$metadata
app.get("/odata/$metadata", (req, res) => {
  const filePath = path.join(__dirname, "mock-metadata.xml");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Could not load metadata");
    } else {
      res.set("Content-Type", "application/xml");
      res.send(data);
    }
  });
});

// Optional: add some mock responses for /odata/Products, etc.
app.get("/odata/Products", (req, res) => {
  res.json({
    value: [
      { ID: 1, Name: "Chai", Price: 18 },
      { ID: 2, Name: "Chang", Price: 19 },
    ],
  });
});

app.listen(port, () => {
  console.log(
    `✅ Express mock server running at http://localhost:${port}/odata/$metadata`,
  );
});
