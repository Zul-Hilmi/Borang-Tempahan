import type { APIRoute } from "astro"

export const post:APIRoute = ({})=>{

    

    return new Response(JSON.stringify({
        data:null,error:'Gagal mendaftar borang, cuba lagi',
    }),{
        status:500,
        statusText:"Internal server error"
    })
}