const app = require("../../app.js");
const request = require("supertest");

describe("GET /", () => {
  it("Should return 200", async () => {
    const response = await request(app).get("/").send();
    expect(response.statusCode).toBe(200);
    return Promise.resolve();
  });

  it("Should say it's up", async () => {
    const response = await request(app).get("/").send();
    expect(response.body.msg).toBe("I'm up!");
    return Promise.resolve();
  });
});
