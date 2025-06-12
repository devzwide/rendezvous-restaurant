import { useState } from "react";
import { Button } from "@headlessui/react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { generateFromEmail } from "unique-username-generator";
import { signUpWithEmailAndPassword } from "../firebase/FirebaseAuth.jsx";
import { newUser } from "../firebase/FirebaseFirestore.jsx";

const Signup = () => {
    const [form, setForm] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false
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

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (!form.terms) {
            setError("You must agree to the terms.");
            return;
        }

        try {
            const authUser = await signUpWithEmailAndPassword(form.email, form.password);

            const usernameGenerated = generateFromEmail(form.email, 3);
            const now = new Date();
            const userDoc = {
                uid: authUser.uid,
                name: form.name,
                surname: form.surname,
                email: authUser.email,
                displayName: authUser.displayName || `${form.name} ${form.surname}`,
                photoURL: authUser.photoURL || "",
                phoneNumber: authUser.phoneNumber || "",
                role: "customer",
                createdAt: now,
                lastLogin: now,
                isEmailVerified: authUser.emailVerified,
                isDisabled: false,
                terms: form.terms,
                termsAcceptedAt: now,
                isOnline: false,
                gender: "",
                birthdate: null,
                platform: "web",
                providerId: authUser.providerId || "password",
                username: usernameGenerated,
                bio: "",
                location: "",
            };

            await newUser(userDoc);

            setForm({
                name: "",
                surname: "",
                email: "",
                password: "",
                confirmPassword: "",
                terms: false
            });

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
                Create account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                Get started with your free account
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
                    <span className="bg-white px-2 text-gray-500">Or sign up with email</span>
                </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="First name"
                        required
                        value={form.name}
                        onChange={handleInputChange}
                        className="block w-full rounded-md bg-white px-3 py-2.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-gray-500 sm:text-sm"
                    />
                    </div>
                    <div>
                    <input
                        id="surname"
                        name="surname"
                        type="text"
                        placeholder="Last name"
                        required
                        value={form.surname}
                        onChange={handleInputChange}
                        className="block w-full rounded-md bg-white px-3 py-2.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-gray-500 sm:text-sm"
                    />
                    </div>
                </div>

                <div>
                    <input
                    id="signup-email"
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
                    id="signup-password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={form.password}
                    onChange={handleInputChange}
                    className="block w-full rounded-md bg-white px-3 py-2.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-gray-500 sm:text-sm"
                    />
                </div>

                <div>
                    <input
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    required
                    value={form.confirmPassword}
                    onChange={handleInputChange}
                    className="block w-full rounded-md bg-white px-3 py-2.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-gray-500 sm:text-sm"
                    />
                </div>

                <div className="flex items-center">
                    <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    checked={form.terms}
                    onChange={handleInputChange}
                    className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                    I agree to the <a href="#" className="text-gray-600 hover:text-gray-500">Terms</a> and <a href="#" className="text-gray-600 hover:text-gray-500">Privacy Policy</a>
                    </label>
                </div>

                <div>
                    <Button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                    Create account
                    </Button>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;