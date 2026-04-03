import { userService } from "@/app/services/user.service";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
    const pathName = request.nextUrl.pathname;
    let isAuthenticated = false;
    const { data } = await userService.getSession();
    if (data) {
        isAuthenticated = true;
    }
    if (
        (pathName === "/" || pathName.startsWith("/feed")) &&
        !isAuthenticated
    ) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/feed",
        "/"
    ],
};