import { expect } from "chai";
import { env } from "jsdom";
import { readFileSync } from "fs";
describe("Our first test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should have h1 that says Users", done => {
    const index = readFileSync("./src/index.html", "utf-8");
    env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName("h1")[0];
      expect(h1.innerHTML).to.equal("Users!");
      done();
      window.close();
    });
  });
});
