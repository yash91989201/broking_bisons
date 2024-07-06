import { headers } from "next/headers";
import { type NextRequest, userAgent } from "next/server";

export function GET(request: NextRequest) {
  console.log(request.ip)

  return Response.json({ status: "ok", ip: request.ip ?? "localhost" })
}