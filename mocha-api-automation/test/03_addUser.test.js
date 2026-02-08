const axios = require("axios");
const { expect } = require("chai");
const Ajv = require("ajv");
const schema = require("../schemas/addUser.schema.json");

describe("POST /api/add-user", () => {
  it("should add new user successfully", async () => {
    const response = await axios.post(
      "https://belajar-bareng.onrender.com/api/add-user",
      {
        username: "Misako",
        age: 34
      },
      {
        headers: {
          Authorization: `Bearer ${global.token}`
        }
      }
    );

    expect(response.status).to.equal(201);

    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    expect(validate(response.data)).to.be.true;
  });
});
