const app = require("../../app.js");
const request = require("supertest");

describe("GET /", () => {
  it("Should return 200", async () => {
    const response = await request(app).get("/base/").send();
    expect(response.statusCode).toBe(200);
    return Promise.resolve();
  });

  it("Should say it's up", async () => {
    const response = await request(app).get("/base/").send();
    expect(response.body.msg).toBe("Base route response");
    return Promise.resolve();
  });
});
