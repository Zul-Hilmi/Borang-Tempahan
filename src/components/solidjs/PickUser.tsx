import {For, Show, createSignal, onMount } from "solid-js"
import type { IUser } from "../../models/User";
type Ev = Event & {
    currentTarget: HTMLSelectElement;
    target: HTMLSelectElement;
}
export default function PickUser(props:{name:string,label:string,users:IUser[]}){
    console.log(props.users)
    const [users,setUsers] = createSignal<IUser[]>(props.users);
    const [error,setError] = createSignal('');
    const [user,setUser] = createSignal<IUser>(users()[0]);
    const [picked,setPicked] = createSignal(false);
    const selectUser = (e:Ev)=>{
        setUser(users()[parseInt(e.target.value)]);
        setPicked(true);
    }

    return(
        <>
        <Show when={typeof error() !== 'undefined'}
         fallback={<p>{error()}</p>}
        >
            <div class="grid grid-cols-2">
            <label for={`nama_${props.name}`} class="ml-2">NAMA {props.label}</label>
            <select onChange={selectUser}>
                <For each={users()}>
                    {(user,i)=>
                        <option selected={i()==0} value={i()}>{user.nama}</option>
                    }
                </For>
            </select>
                <input type="hidden" value={user().nama} name={`nama_${props.name}`}/>
                <label for={`jabatan_${props.name}`} class="ml-2">JABATAN:</label> 
                <input type="text" name={`jabatan_${props.name}`} value={user().jabatan} />
                <label for={`telefon_${props.name}`} class="ml-2">NO. TEL:</label>
                <input type="text" name={`telefon_${props.name}`} value={user().telefon}/>
                <label for={`emel_${props.name}`} class="ml-2">EMEL:</label>
                <input type="text" name={`emel_${props.name}`} value={user().emel}/>
            </div>
        </Show>
        </>
    )
}