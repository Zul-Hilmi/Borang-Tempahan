import type { HydratedDocument } from "mongoose";
import type { IUser } from "../../models/User";
import { createSignal } from "solid-js";

type FormEvent = MouseEvent & {
    currentTarget: HTMLFormElement;
    target: Element;
}


export default async function UserDetail(props:{user:HydratedDocument<IUser>}){
    const [haveError,setHaveError] = createSignal(false);
    const [errors,setErrors] = createSignal({emel:'',error:''});
    const [message,setMessage] = createSignal(''); 
    const [user,setUser] = createSignal({name:'',jabatan:'',emel:'',telefon:''});
    const putUser = async(e:FormEvent)=>{
        e.preventDefault();
        const res = await fetch(`/users/${props.user.id}`,{
            headers:{'Content-type': 'application/json; charset=UTF-8'},
            method:"PUT",
            body:JSON.stringify(user())
        });
        if(res.ok){
            const data:any = await res.json();
            setErrors(data.error);
            setMessage(data.message);
            setMessage(data.haveError);
            if(haveError() === false){
                setUser(data.user);
            }
        }
    }
    return(

	    <main class="flex flex-col items-center gap-2">
        <form class="flex flex-col gap-2 p-4 w-fit items-center" id="putForm">
            <h1 class="font-bold text-center">MAKLUMAT ANGGOTA</h1>
            <input type="email" class="px-1 rounded border border-black" value={props.user?.emel.toString()} disabled/>
            <input type="text" name="nama" class="px-1 rounded border border-black" value={props.user?.nama.toString()}/>
            <input type="text" name="telefon" class="px-1 rounded border border-black" value={props.user?.telefon.toString()}/> 
            <input type="text" name="jabatan" class="px-1 rounded border border-black" value={props.user?.jabatan.toString()}/>
            <button class="bg-blue-500 text-white rounded p-2 text-sm" type="submit">KEMASKINI</button>
        </form>
        <dialog id="message-modal" class="rounded backdrop:backdrop-blur-sm w-fit">
        <form name="modal-form" method="dialog" class="flex flex-col w-full items-center ">
            {<span class="text-center text-red-500 font-bold">{errors().emel}</span>}
            {<span class="text-center text-green-500 font-bold">{message()}</span>}
            &nbsp;
            <button type="button" formmethod="dialog" form="modal-form" id="closeModal"
            class="text-white bg-blue-500 px-2 py-1 rounded w-1/2 hover:bg-blue-600"
            >OK</button>
        </form>
        </dialog>
        </main>
    )
}