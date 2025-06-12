import { Button } from "@headlessui/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { SignIn } from "../firebase/FirebaseAuth.jsx";

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await SignIn(form.email, form.password);

            navigate("/");
        } catch (error) {
            setError(error.message || "An error occurred during signup");
        }
    };

    const onGoogleAuth = async () => {};

    return (
        <div className="flex flex-1 flex-col justify-center px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                Welcome back
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                Sign in to continue to your account
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                {error && (
                    <div className="mb-4 rounded bg-red-100 px-4 py-2 text-sm text-red-700">
                        {error}
                    </div>
                )}
                <button
                    onClick={onGoogleAuth}
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    <FcGoogle className="h-5 w-5" />
                    <span>Continue with Google</span>
                </button>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">Or continue with</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email address"
                        required
                        value={form.email}
                        onChange={handleInputChange}
                        className="block w-full rounded-md bg-white px-3 py-2.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-gray-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        value={form.password}
                        onChange={handleInputChange}
                        className="block w-full rounded-md bg-white px-3 py-2.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-gray-500 sm:text-sm"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                        <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
                            Forgot password?
                        </a>
                        </div>
                    </div>

                    <div>
                        <Button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        >
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;