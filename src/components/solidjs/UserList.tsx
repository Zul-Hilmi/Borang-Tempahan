import type { HydratedDocument } from "mongoose";
import type { IUser } from "../../models/User";
import { For, createSignal } from "solid-js";

export default function UserList(props:{
    users:HydratedDocument<IUser>[]
}){
    const [id,setId] = createSignal('');
    return(
        <div class="flex flex-col items-center gap-2">
            <For each={props.users}>
                {(user,i)=>
                    (<div class="flex flex-col items-center bg-slate-300 rounded p-2 w-full">
                    <a href={user.id} id={i().toString()} class="flex flex-col items-center text-black">
                        <span class="font-bold ">
                        {user.nama}
                        </span>
                        <span class="text-blue-700 underline font-bold hover:bg-slate-500">
                        {user.emel}
                        </span>
                    </a>
                    </div>)
                }
            </For>
        </div>  
    );
}