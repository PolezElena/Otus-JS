import fetch from "node-fetch"
import supertest from "supertest"

test("get with node-fetch", async () => {
  const response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=Q5bz7IZm7gPtFsTe4mHdFhYBbEsmk23Ftq5nQJw6",
  )
  console.log(response)
  expect(response.status).toEqual(201)
  const { status } = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=Q5bz7IZm7gPtFsTe4mHdFhYBbEsmk23Ftq5nQJw6",
  )
  console.log(status)
  expect(status).toEqual(201)
})

test("get with supertest", async () => {
  const response = await supertest("https://api.nasa.gov")
    .get("/planetary/apod?api_key=Q5bz7IZm7gPtFsTe4mHdFhYBbEsmk23Ftq5nQJw6")
    .set("Accept", "application/json")
  expect(response.status).toEqual(405)
})

test("post node-fetch", async () => {
  const response = await fetch(
    "https://apichallenges.herokuapp.com/gui/challenger",
    { method: "POST" },
  )
  expect(response.status).toEqual(201)
})

test.only("post1 node-fetch", async () => {
const r = await fetch('https://apichallenges.herokuapp.com/challenger',
    {
      method: 'POST',
      headers: { Accept: 'application/json' },
    });
  const token = r.headers['x-challenger'];
  const { status } = await fetch('https://apichallenges.herokuapp.com/challenges',
    {
      method: 'GET',
      headers: { 'X-CHALLENGER': token },
    });
  expect(status).toEqual(201);
  });

