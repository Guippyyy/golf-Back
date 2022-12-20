const supertest = require("supertest");
const {withServer} = require("../helpers")


describe("locationTest", () => {
    let requestApi;
    let authHeader;
  
    withServer(({ request: r, authHeader: a }) => {
      requestApi = r;
      authHeader = a;
    });

  it("should get all locations", async () => {
    const { body, statusCode } = await requestApi.get("/api/locations");

    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          image: expect.any(String),
          colours: expect.any(String),
        }),
      ])
    );
    expect(statusCode).toBe(200);
  });

  it("POST /api/locations - Fail invalid location", async () => {
    const { body, statusCode } = await requestApi.post("/api/locations")
    .send({
      id: 4,
      name: "",
      image: "images/palin.png",
      colours: "snow, gold, blue, IndianRed",
    });

    expect(statusCode).toBe(400);
    expect(body).toEqual({
      errors: [
        {
          location: "body",
          msg: "location name is required",
          param: "name",
          value: "",
        }
      ]
    })
  });
});
