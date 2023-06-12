import type { APIRoute } from "astro"
import User from "../../models/User"

export const get:APIRoute = async({})=>{

    const users = await User.find().catch(err=>console.log(err));
    if(users){
        return new Response(JSON.stringify({
            users,error:null}),
            {status:200});
    }
    
    return new Response(JSON.stringify({
        data:null,error:'Gagal mendapatkan maklumat anggota',
    }),{status:500});;
}