<<<<<<< HEAD:app/(auth)/register/page.tsx
'use client';
=======
"use client";
>>>>>>> 3d8e74c (Updated login and register pages):app/auth/register.tsx
import { useForm } from "react-hook-form";

type SignupFormData = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  role: "investor" | "developer";
  terms: boolean;
};

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
  } = useForm<SignupFormData>();

  const selectedRole = watch("role");

  const onSubmit = (data: SignupFormData) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-lg bg-blue-600 text-white">
            🏢
          </div>
          <h1 className="text-xl font-semibold">Join RealEstate Ventures</h1>
          <p className="text-sm text-gray-500">
            Create your account 
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              {...register("fullName", { required: true })}
              placeholder="Enter your full name"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input
              {...register("phone")}
              placeholder="Enter your phone number"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Create a strong password"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="text-sm font-medium">I am a</label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <label
                className={`border rounded-lg p-3 text-center cursor-pointer ${
                  selectedRole === "investor"
                    ? "border-blue-600 bg-blue-50"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  value="investor"
                  {...register("role", { required: true })}
                  className="hidden"
                />
                📈 Investor
              </label>

              <label
                className={`border rounded-lg p-3 text-center cursor-pointer ${
                  selectedRole === "developer"
                    ? "border-blue-600 bg-blue-50"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  value="developer"
                  {...register("role", { required: true })}
                  className="hidden"
                />
                🛠 Developer
              </label>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              {...register("terms", { required: true })}
            />
            I agree to the{" "}
            <span className="text-blue-600 cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-blue-600 cursor-pointer">
              Privacy Policy
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <span className="text-blue-600 cursor-pointer">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
