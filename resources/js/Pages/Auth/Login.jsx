import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import Footer from "@/Components/Footer";

export default function Login({ auth, status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <form
                onSubmit={submit}
                className="bg-gray-200 dark:bg-zinc-900 dark:text-gray-200 flex flex-col items-center p-6 w-screen h-screen"
            >
                <h1 className="text-2xl lg:text-4xl font-bold my-6">Login</h1>
                <div className="w-full md:w-2/3 lg:w-1/3">
                    <InputLabel
                        className="mb-2"
                        htmlFor="email"
                        value="Email"
                    />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full p-2 border"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4 w-full md:w-2/3 lg:w-1/3">
                    <InputLabel
                        className="mb-2"
                        htmlFor="password"
                        value="Password"
                    />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full p-2 border"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4 w-full md:w-2/3 lg:w-1/3">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex flex-col gap-6 items-center justify-center mt-4 w-full">
                    <div className="flex items-center gap-2">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="underline text-sm text-gray-600 dark:hover:text-gray-200 duration-150 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        )}
                        <Link
                            href={"/register"}
                            className="underline text-sm text-gray-600 dark:hover:text-gray-200 duration-150 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Doesn't have an account?
                        </Link>
                    </div>
                    <PrimaryButton
                        className="ms-4 dark:bg-zinc-700"
                        disabled={processing}
                    >
                        Log in
                    </PrimaryButton>
                </div>
            </form>
            <Footer auth={auth} />
        </GuestLayout>
    );
}
