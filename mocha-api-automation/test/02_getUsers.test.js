const axios = require("axios");
const { expect } = require("chai");
const Ajv = require("ajv");
const schema = require("../schemas/users.schema.json");

describe("GET /api/users", () => {
  it("should return list of users", async () => {
    const response = await axios.get(
      "https://belajar-bareng.onrender.com/api/users",
      {
        headers: {
          Authorization: `Bearer ${global.token}`
        }
      }
    );

    expect(response.status).to.equal(200);

    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    expect(validate(response.data)).to.be.true;
  });
});
