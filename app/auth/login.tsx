'use client'
import { useForm } from "react-hook-form";

type LoginFormData={
    email:string
    password:string
}
 
export default function Login(){

    const{register,handleSubmit} = useForm<LoginFormData>();

    const onSubmit = (data:LoginFormData)=>{
        console.log(data.email, data.password);
    };
return(
    <form onSubmit={handleSubmit(onSubmit)}>

        <input 
        type="email"
        {...register("email")}
        placeholder="email"
        />

        <input 
        type="password"
        {...register("password")}
        placeholder="password"
        />

        <button type="submit">
            Login

        </button>
        

    </form>

)

}

