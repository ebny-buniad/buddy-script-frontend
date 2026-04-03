"use client"
import { authClient } from "@/app/lib/auth-clients";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {

    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const value = {
            email: formData?.email,
            password: formData?.password
        }
        const toastId = toast.loading("Login user");
        try {
            const { data, error } = await authClient.signIn.email(value)
            console.log(data)
            if (error) {
                toast.error(error.message, { id: toastId });
                return;
            }
            toast.success("User login Successfully", { id: toastId });
            if (data?.user) {
                router.replace("/")
                router.refresh()
                return;
            } else {
                router.replace("/");
                router.refresh();
            }
        } catch (err) {
            toast.error("Something went wrong, please try again.", { id: toastId });
        }
    };

    return (
        <section className="_social_login_wrapper _layout_main_wrapper">
            <div className="_shape_one">
                <Image
                    src="/assets/images/shape1.svg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="_shape_img"
                />
                <Image
                    src="/assets/images/dark_shape.svg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="_dark_shape"
                />
            </div>
            <div className="_shape_two">
                <Image
                    src="/assets/images/shape2.svg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="_shape_img"
                />
                <Image
                    src="/assets/images/dark_shape1.svg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="_dark_shape _dark_shape_opacity"
                />
            </div>
            <div className="_shape_three">
                <Image
                    src="/assets/images/shape3.svg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="_shape_img"
                />
                <Image
                    src="/assets/images/dark_shape2.svg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="_dark_shape _dark_shape_opacity"
                />
            </div>
            <div className="_social_login_wrap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="_social_login_left">
                                <div className="_social_login_left_image">
                                    <Image
                                        src="/assets/images/login.png"
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                        className="_left_img"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="_social_login_content">
                                <div className="_social_login_left_logo _mar_b28">
                                    <Image
                                        src="/assets/images/logo.svg"
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                        className="_left_logo"
                                    />
                                </div>
                                <p className="_social_login_content_para _mar_b8">Welcome back</p>
                                <h4 className="_social_login_content_title _titl4 _mar_b50">
                                    Login to your account
                                </h4>
                                <button
                                    type="button"
                                    className="_social_login_content_btn _mar_b40"
                                >
                                    <Image
                                        src="/assets/images/google.svg"
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                        className="_google_img"
                                    />{" "}
                                    <span>Or sign-in with google</span>
                                </button>
                                <div className="_social_login_content_bottom_txt _mar_b40">
                                    {" "}
                                    <span>Or</span>
                                </div>
                                <form className="_social_login_form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div className="_social_registration_form_input _mar_b14">
                                                <label className="_social_registration_label _mar_b8">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="form-control _social_registration_input"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div className="_social_registration_form_input _mar_b14">
                                                <label className="_social_registration_label _mar_b8">Password (8 Char)</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    className="form-control _social_registration_input"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                            <div className="form-check _social_login_form_check">
                                                <input
                                                    className="form-check-input _social_login_form_check_input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault2"
                                                //   defaultChecked=""
                                                />
                                                <label
                                                    className="form-check-label _social_login_form_check_label"
                                                    htmlFor="flexRadioDefault2"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                                            <div className="_social_login_form_left">
                                                <p className="_social_login_form_left_para">
                                                    Forgot password?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                                            <div className="_social_login_form_btn _mar_t40 _mar_b60">
                                                <button
                                                    type="submit"
                                                    className="_social_login_form_btn_link _btn1"
                                                >
                                                    Login now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="_social_login_bottom_txt">
                                            <p className="_social_login_bottom_txt_para">
                                                Dont have an account? <Link href="/auth/registration" className="_social_login_bottom_txt_link">Create New Account</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}