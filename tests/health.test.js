import { jest } from "@jest/globals";
import handler from "../api/health.js";

function mockRes() {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
}

test("health endpoint returns ok", () => {
  const req = {};
  const res = mockRes();

  handler(req, res);

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith(
    expect.objectContaining({
      status: "ok",
      service: "ci-cd-vercel-demo-v2"
    })
  );
});