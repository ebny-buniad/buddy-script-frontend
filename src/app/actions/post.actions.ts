import { cookies } from "next/headers";

interface ICreatePost {
    text?: string,
    image?: string
}

const NEXT_PUBLIC = process.env.NEXT_PUBLIC_API_URL;

export async function createPost(payload: ICreatePost) {
    try {
        const cookieStore = await cookies();
        const data = payload;
        const url = new URL(`${NEXT_PUBLIC}/posts`)
        const res = await fetch(url.toString(), {
            method: "POST",
            headers: {
                cookie: cookieStore.toString(),
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data)
        });
        const result = await res.json();
        console.log(result)

        return {
            data: result,
            success: true,
            error: null
        }
    }
    catch (err) {
        console.error(err);
        return { data: null, error: { message: "Something Went Wrong" } };
    }
}