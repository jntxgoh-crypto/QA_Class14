const axios = require("axios");
const { expect } = require("chai");
const Ajv = require("ajv");
const schema = require("../schemas/login.schema.json");

describe("POST /api/login", () => {
  it("should login successfully and return token", async () => {
    const response = await axios.post(
      "https://belajar-bareng.onrender.com/api/login",
      {
        username: "admin",
        password: "admin"
      }
    );

    expect(response.status).to.equal(200);

    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    expect(validate(response.data)).to.be.true;

    global.token = response.data.token;
  });
});
