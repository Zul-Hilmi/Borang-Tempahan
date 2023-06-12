import type { HydratedDocument } from "mongoose";
import type { IUser } from "../../models/User";
import { For } from "solid-js";

export default function UserList(props:{
    users:HydratedDocument<IUser>[]
}){
    return(
        <div class="flex flex-col items-center gap-2">
            <For each={props.users}>
                {(user,i)=>
                    <a href={user.id} id={i().toString()} class=" flex-col rounded bg-slate-400 text-white text-center w-full flex p-2 gap-2 hover:bg-slate-500">
                        {user.nama}<br/>{user.emel}
                    </a>
                }
            </For>
        </div>  
    );
}