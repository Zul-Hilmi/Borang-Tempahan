import { Schema,model } from "mongoose"

interface IUser{
    emel:string,
    nama:string,
    jabatan:string,
    telefon:string,
}


const userSchema = new Schema<IUser>({
    emel:{type:String,required:true,unique:true},
    nama:{type:String,required:true},
    jabatan:{type:String,required:true},
    telefon:{type:String,required:true},
})

const User = model<IUser>("User",userSchema)

export default User;
export type {IUser};
