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
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="w-full max-w-md rounded-md bg-white shadow-lg p-6">

            <div className="text-center py-4">
                <h2 className="text-2xl font-bold">Welcome Back</h2>
                <p className="text-gray-600">Sign in to your real estate platform account</p>
            </div>
        <form onSubmit={handleSubmit(onSubmit)}>
    
            <div>
                <label className="block font-medium font-bold mb-2">Email Address</label>
            <input type="email" {...register("email", {required: true})}placeholder="Enter your email"
            className="px-6 py-2 border-2 border-gray-300 rounded-lg w-full focus:border-blue-500 focus:outline-none"
            />
            </div>
    
            <div>
                <label className="block font-medium font-bold mb-2">Password</label>
            <input 
            type="password" {...register("password", {required: true})} placeholder="Enter your password"
            className="px-6 py-2 border-2 border-gray-300 rounded-lg w-full focus:border-blue-500 focus:outline-none"
            />
            </div>
    
            <button type="submit">
                Login
    
            </button>
            
    
        </form>
        </div>

    </div>
)

}

