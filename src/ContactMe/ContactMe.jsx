import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_6935khp",
                "template_ngzxh1g",
                form.current,
                "oEfAnD_aSR4lLkODW"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "E-mail Has been sent",
                        showConfirmButton: false,
                        timer: 1500
                    });
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (

        <div className="flex justify-center items-center contact mb-24" id="contact">
            <div className="w-96">
                <h1 className="text-4xl font-bold text-center mt-20 mb-20 "> Contact </h1>
                <form className="flex flex-col w-full text-base" ref={form} onSubmit={sendEmail}>
                    <label className="mt-4">Name</label>
                    <input
                        type="text"
                        name="from_name"
                        className="w-full h-6 p-7 outline-none rounded-md border border-gray-300 focus:border-teal-500"
                    />
                    <label className="mt-4">Email</label>
                    <input
                        type="email"
                        name="from_email"
                        className="w-full h-6 p-7 outline-none rounded-md border border-gray-300 focus:border-teal-500"
                    />
                    <label className="mt-4">Message</label>
                    <textarea
                        name="message"
                        className="w-full max-w-full min-w-full max-h-100 min-h-100 p-7 outline-none rounded-md border border-gray-300 focus:border-teal-500"
                    />
                    <input
                        type="submit"
                        value="Send"
                        className="mt-8 cursor-pointer bg-[#c3902c] hover:bg-[#c3902c] text-white border-none rounded-lg h-10 btn "
                    />
                </form>
            </div>
        </div>
    );
};




export default Contact;
