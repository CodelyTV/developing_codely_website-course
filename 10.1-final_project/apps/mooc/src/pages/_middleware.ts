import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest): Response {
  if (isProtected(req)) {
    const basicAuth = req.headers.get("authorization");
    if (basicAuth) {
      const auth = basicAuth.split(" ")[1];
      const [user, pwd] = Buffer.from(auth, "base64").toString().split(":");

      if (user === (process.env.BASIC_AUTH_USERNAME as string) && pwd === (process.env.BASIC_AUTH_PASSWORD as string)) {
        return NextResponse.next();
      }
    }

    return new Response("Auth required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Codely Area"',
      },
    });
  }

  return NextResponse.next();
}

function isProtected(req: NextRequest) {
  if (process.env.NODE_ENV == "development" || uriIsAllowed(req)) {
    return false;
  }

  return true;
}

function uriIsAllowed(req: NextRequest) {
  const nonProtectedUris: string[] = [
    "/api/company/subscribe",
    "/api/stripe/webhook",
    "/api/command",
    "/api/query",
    "/favicon.ico",
    "/api/invoices/download",
    "/invoices",
  ];

  for (const uri of nonProtectedUris) {
    if (req.url.includes(uri)) {
      return true;
    }
  }

  return false;
}
