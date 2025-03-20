import { describe, expect, test, beforeEach } from "bun:test";
import request from "supertest";
import { createApp } from "@/api/createApp";
import type { Express } from "express";

describe("Example Router", () => {
  let app: Express;

  beforeAll(() => {
    app = createApp();
  });

  beforeEach(async () => {
    await request(app).delete("/api/clear");
  });

  test("should return welcome message on root path", async () => {
    const response = await request(app).get("/api/example");
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({
      message: "Welcome to the example route!",
    });
  });

  test("should return hello message on /hello path", async () => {
    const response = await request(app).get("/api/example/hello");
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({
      message: "Hello from the example route!",
    });
  });
});
