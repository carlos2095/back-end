const request = require("supertest");
const app = require("../app");

describe("Usuarios", () => {
  it("Debe agregar un el usuario registrado", async (done) => {
    const res = await request(app)
      .post("/auth/login")
      .send({
        email: "juan@gmail.com",
        password: "1234",
      });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty("data");
      expect(res.body.data).toHaveProperty("id");
      expect(res.body.data).toHaveProperty("email", "carlos@gmail.com");
      expect(res.body.data).toHaveProperty("password", "123");
      done();
  });

  it("Debe agregar un nuevo usuario", async (done) => {
    const res = await request(app)
      .post("/auth/register")
      .send({
        username: "Juan",
        email: "juan@gmail.com",
        password: "1234",
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("data");
    expect(res.body.data).toHaveProperty("id");
    expect(res.body.data).toHaveProperty("username", "carlos");
    expect(res.body.data).toHaveProperty("email", "carlos@gmail.com");
    done();
  });
});