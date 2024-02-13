import { NextRequest, NextResponse } from "next/server";

function logRequest(req: NextRequest) {
  const serviceName = req.nextUrl.pathname.split("/")[2] || "unknown-service";

  console.info(`API Request to ${req.nextUrl.pathname}`, {
    method: req.method,
    path: req.nextUrl.pathname,
    userAgent: req.headers.get("user-agent"),
    service: serviceName,
  });
}

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/api")) {
    logRequest(req);
  }

  // Proceed with the request
  return NextResponse.next();
}