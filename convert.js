const fs = require("fs");
const { parse, convert } = require("odata2openapi");
// Read the OData metadata XML file
const xml = fs.readFileSync("metadata.xml", "utf-8");
const options = {
  host: "services.odata.org",
  path: "/V4/Northwind/Northwind.svc",
};

parse(xml)
  .then((service) => convert(service.entitySets, options, service.version))
  .then((swagger) => {
    fs.writeFileSync("openapi.json", JSON.stringify(swagger, null, 2));
    console.log("✅ Conversion complete. Output saved to openapi.json");
  })
  .catch((error) => console.error(error));
