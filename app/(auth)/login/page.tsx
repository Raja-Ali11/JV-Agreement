'use client'
import { Building, ChartLine, LogIn, MapPinned } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type LoginFormData={
    email:string
    password:string
    role: 'investor' | 'landOwner'
}
 
export default function Login(){

    // const navigate = useNavigate();

    const{register,handleSubmit} = useForm<LoginFormData>({
        defaultValues: { role: 'investor' }
    });

    const onSubmit = (data:LoginFormData)=>{
        console.log(data.email, data.password);
    };
return(
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="w-full max-w-md rounded-md bg-white shadow-lg p-8">

            <div className="text-center py-4 space-y-2">
                <p className="p-3 inline-block rounded-lg bg-blue-600 text-white">
                    <Building size={24}/>
                </p>
                <h2 className="text-2xl font-bold">Welcome Back</h2>
                <p className="text-gray-600">Sign in to your real estate platform account</p>
            </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-4">
    
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

            <div>
                <label className="block font-medium mb-2">I am a</label>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <input
                            type="radio"
                            id="role-investor"
                            value="investor"
                            {...register('role', { required: true })}
                            className="peer hidden"
                            name="role"
                        />
                        <label
                            htmlFor="role-investor"
                            className="cursor-pointer gap-2 p-2 border-2 border-gray-300 rounded-lg flex items-center justify-center text-center peer-checked:border-blue-500 peer-checked:bg-blue-50"
                        >
                            <ChartLine size={16}/>
                            <span className="font-medium">Investor</span>
                        </label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="role-landOwner"
                            value="landOwner"
                            {...register('role', { required: true })}
                            className="peer hidden"
                            name="role"
                        />
                        <label
                            htmlFor="role-landOwner"
                            className="cursor-pointer gap-2 p-2 border-2 border-gray-300 rounded-lg flex items-center justify-center text-center peer-checked:border-blue-500 peer-checked:bg-blue-50"
                        >
                            <MapPinned size={16} />
                            <span className="font-medium">Land Owner</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="items-center">
                    <input type="checkbox" id="rememberMe" className="mr-2"/>
                    <label htmlFor="rememberMe" className="text-sm font-medium">Remember Me</label>
                </div>
                <div>
                    <p  className="text-sm font-semibold text-blue-600 hover:underline cursor-pointer">Forgot Password?</p>
                </div>
            </div>
    
            <button type="submit" className=" flex justify-center gap-2 p-2 items-center text-center bg-blue-600 rounded-lg text-white font-bold w-full">
                <LogIn size={18} />
                Sign in
            </button>
            
            <div className="flex space-x-2 font-semibold text-sm justify-center">
                <span className="text-gray-600">Dont have an account?</span>
                <p className=" text-blue-600 hover:underline cursor-pointer">Create one here</p>
            </div>
    
        </form>
        </div>

    </div>
)

}

