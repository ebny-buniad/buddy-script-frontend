"use client"
import { authClient } from '@/app/lib/auth-clients';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Registration() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
        agree: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" || type === "radio" ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const value = {
            name: formData?.name,
            email: formData?.email,
            password: formData?.password
        }
        
        const toastId = toast.loading("Creating user");
        try {
            const { data, error } = await authClient.signUp.email(value)
            if (error) {
                toast.error(error.message, { id: toastId });
                return;
            }
            toast.success("User Created Successfully", { id: toastId });

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
        <div>
            <section className="_social_registration_wrapper _layout_main_wrapper">
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
                <div className="_social_registration_wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                <div className="_social_registration_right">
                                    <div className="_social_registration_right_image">
                                        <Image
                                            src="/assets/images/registration.png"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                            className="_right_img"
                                        />
                                    </div>
                                    <div className="_social_registration_right_image_dark">
                                        <Image
                                            src="/assets/images/registration1.png"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <div className="_social_registration_content">
                                    <div className="_social_registration_right_logo _mar_b28">
                                        <Image
                                            src="/assets/images/logo.svg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                            className="_right_logo"
                                        />
                                    </div>
                                    <p className="_social_registration_content_para _mar_b8">
                                        Get Started Now
                                    </p>
                                    <h4 className="_social_registration_content_title _titl4 _mar_b50">
                                        Registration
                                    </h4>
                                    <button
                                        type="button"
                                        className="_social_registration_content_btn _mar_b40"
                                    >
                                        <Image
                                            src="/assets/images/google.svg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                            className="_google_img"
                                        />{" "}
                                        <span>Register with google</span>
                                    </button>
                                    <div className="_social_registration_content_bottom_txt _mar_b40">
                                        {" "}
                                        <span>Or</span>
                                    </div>
                                    <form className="_social_registration_form" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <div className="_social_registration_form_input _mar_b14">
                                                    <label className="_social_registration_label _mar_b8">Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className="form-control _social_registration_input"
                                                    />
                                                </div>
                                            </div>

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
                                                    <label className="_social_registration_label _mar_b8">Password</label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                        className="form-control _social_registration_input"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <div className="_social_registration_form_input _mar_b14">
                                                    <label className="_social_registration_label _mar_b8">Repeat Password</label>
                                                    <input
                                                        type="password"
                                                        name="repeatPassword"
                                                        value={formData.repeatPassword}
                                                        onChange={handleChange}
                                                        className="form-control _social_registration_input"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                                <div className="form-check _social_registration_form_check">
                                                    <input
                                                        className="form-check-input _social_registration_form_check_input"
                                                        type="checkbox"
                                                        name="agree"
                                                        checked={formData.agree}
                                                        onChange={handleChange}
                                                        id="flexRadioDefault2"
                                                    />
                                                    <label
                                                        className="form-check-label _social_registration_form_check_label"
                                                        htmlFor="flexRadioDefault2"
                                                    >
                                                        I agree to terms &amp; conditions
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                                                <div className="_social_registration_form_btn _mar_t40 _mar_b60">
                                                    <button
                                                        type="submit"
                                                        className="_social_registration_form_btn_link _btn1"
                                                    >
                                                        Register
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div className="_social_registration_bottom_txt">
                                                <p className="_social_registration_bottom_txt_para">
                                                    Already have an account? <Link href="/auth/login" className="_social_registration_bottom_txt_link">Login</Link>
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

        </div>
    )
}
