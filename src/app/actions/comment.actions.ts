"use server"
import { cookies } from "next/headers";
const NEXT_PUBLIC = process.env.NEXT_PUBLIC_API_URL;


interface ICreateComment {
    text?: string,
    parentId?: string | null;
    p_Id: string
}

interface ICreateCommentReact {
    type: string,
    id: string
}

// Create comment api
export async function createComment(data: ICreateComment) {
    try {
        const cookieStore = await cookies();
        const payload = {
            text: data?.text,
            parentId: data?.parentId
        }
        const url = new URL(`${NEXT_PUBLIC}/comments/${data?.p_Id}`)
        const res = await fetch(url.toString(), {
            method: "POST",
            headers: {
                cookie: cookieStore.toString(),
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(payload)
        });
        const result = await res.json();
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

// Create comment react api
export async function createCommentReact(data: ICreateCommentReact) {
    console.log(data.type)
    try {
        const cookieStore = await cookies();
        const payload = {
            type: data?.type
        }
        const url = new URL(`${NEXT_PUBLIC}/comment-reactions/${data?.id}`)
        const res = await fetch(url.toString(), {
            method: "POST",
            headers: {
                cookie: cookieStore.toString(),
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(payload)
        });
        const result = await res.json();
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