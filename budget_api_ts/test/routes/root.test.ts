import { test } from "tap"
import { build } from "../helper"

test("default root route", async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: "/",
  })
  t.same(res.payload, "home screen")
  // t.same(JSON.parse(res.payload), "homescreen")
})
