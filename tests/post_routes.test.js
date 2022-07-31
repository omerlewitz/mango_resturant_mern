const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../server");
const Post = require("../models/post_model");

beforeAll(async () => {
  //clear Posts collection
  await Post.remove();
});

afterAll(async () => {
  await Post.remove();
  mongoose.connection.close();
});

describe("This is a Post API", () => {
  const postMessage = "this is my test message";
  const sender = "311131311";
  var returendId = "";

  test("Test Post GET API", async () => {
    const response = await request(app).get("/post");
    expect(response.statusCode).toEqual(200);
  });

  test("Test Post post API", async () => {
    const response = await request(app).post("/post").send({
      message: postMessage,
      sender: sender,
    });
    returendId = response.body._id;
    expect(response.statusCode).toEqual(200);
    expect(response.body.Message).toEqual(postMessage);
    expect(response.body.Sender).toEqual(sender);
  });

  test("Test get Post by id API", async () => {
    const response = await request(app).get("/post/" + returendId);
    expect(response.statusCode).toEqual(200);
    expect(response.body.Message).toEqual(postMessage);
    expect(response.body.Sender).toEqual(sender);
    expect(response.body._id).toEqual(returendId);
  });
});
