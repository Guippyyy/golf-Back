const supertest = require("supertest");
const { withServer } = require("../helpers");

describe("scoresTest", () => {
  let requestApi;
  let authHeader;

  withServer(({ request: r, authHeader: a }) => {
    requestApi = r;
    authHeader = a;
  });

  it("POST /api/scores ~ success", async () => {
    const coursID = 2;
    const scores = "1,2,3,4";
    const result = -9;

    const createResponse = await requestApi
      .post("/api/scores")
      .send({
        coursID,
        scores,
        result,
      })
      .set("Authorization", authHeader);

    expect(createResponse.statusCode).toBe(200);
    expect(createResponse.body.coursID).toEqual(coursID);
    expect(createResponse.body.scores).toEqual(scores);
    expect(createResponse.body.result).toEqual(result);
  })

  it("POST /api/scores - Fail invalid score", async () => {
    const { body, statusCode } = await requestApi
      .post("/api/scores")
      .send({
        coursID: 1,
        scores: "",
        result: -9,
      })
      .set("Authorization", authHeader);

    expect(statusCode).toBe(400);
    expect(body).toEqual({
      errors: [
        {
          location: "body",
          msg: "scores is required",
          param: "scores",
          value: "",
        },
      ],
    });
  });

  it("should get all scores", async () => {
    const { body, statusCode } = await requestApi.get("/api/scores").set("Authorization", authHeader);

    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          coursID: expect.any(Number),
          scores: expect.any(String),
          result: expect.any(Number),
          createdAt: expect.any(String),
          userID: expect.any(String),
        }),
      ])
    );
    expect(statusCode).toBe(200);
  });
});
