import { headers } from "next/headers";
import { type NextRequest, userAgent } from "next/server";

export function GET(request: NextRequest) {
  const head = headers()
  const userData = userAgent(request)
  console.log("head")
  console.log(head)
  console.log("geo")
  console.log(request.geo)
  console.log("userdata")
  console.log(userData)

  return Response.json({ status: "ok" })
}