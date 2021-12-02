const request = require("supertest");
const app = require("./app");

describe("People-Products test suite", () => {
  it("tests api/people endpoint", async () => {
    const response = await request(app).get("/api/people");
      expect(response.statusCode).toBe(200);
      expect(response.body.data).toHaveLength(5)
    expect(response.body.data).toEqual(
      expect.arrayContaining([expect.any(Object)])
    );
    expect(response.body.data[0]).toHaveProperty(["id"], 1)
    expect(response.body.data).toContainEqual({ id: 1, name: "john" });
  });
    
  it("tests api/products endpoint", async () => {
    const response = await request(app).get("/api/products");
      expect(response.statusCode).toBe(200);
      expect(response.body.data).toHaveLength(4);
    expect(response.body.data).toEqual(
      expect.arrayContaining([expect.any(Object)])
      );
      expect(response.body.data[0]).toHaveProperty(["id"], 1);
    expect(response.body.data).toContainEqual({
      id: 1,
      name: "albany sofa",
      image:
        "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
      price: 39.95,
      desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
    });
  });
});
