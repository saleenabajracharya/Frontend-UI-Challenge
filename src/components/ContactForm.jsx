import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import isValidPhoneNumber from "libphonenumber-js/min";
import { Helmet } from "react-helmet";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({ mode: "onChange" });

  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    setSubmitted(true);
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
    setValue("phone", value, {
      shouldValidate: true,
    });
  };

  return (
    <>
      <Helmet>
        <title>Logoipsum</title>
        <meta
          name="description"
          content="This is EB Pearl task."
        />
      </Helmet>
      <div
        className={`min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-white`}
      >
        {!submitted ? (
          <>
            <h1 className="text-6xl text-center font-bold text-[var(--primary-color)] pt-2 mt-6 mb-6">
              Contact us
            </h1>
            <p className="text-[var(--content-color)] mb-12 text-center">
              Speak with our team to see how we can help your business.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="lg:w-1/2 md:w-1/2 w-full space-y-4 "
            >
              <input
                type="text"
                placeholder="Your name"
                {...register("name", { required: "Name is required" })}
                className={`w-full px-4 py-3  mt-10 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 h-[60px]  outline-none ${
                  errors.name ? "border-red-500" : "border-[#9E9E9E]"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}

              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-4 py-3 border rounded-xl h-[60px] focus:outline-none focus:ring-2 focus:ring-indigo-300 outline-none ${
                  errors.email ? "border-red-500" : "border-[#9E9E9E]"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
              <PhoneInput
                defaultCountry="NP"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="Your best contact number"
                className={`react-phone-input  w-full px-4 py-3 h-[60px] border focus:outline-none  focus:ring-indigo-300 rounded-xl ${
                  errors.phone ? "border-red-500" : "border-[#9E9E9E]"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
              <input
                type="hidden"
                {...register("phone", {
                  required: "Phone number is required",
                  validate: (value) =>
                    isValidPhoneNumber(value || "") || "Invalid phone number",
                })}
              />

              <textarea
                rows={4}
                placeholder="Business or company name"
                {...register("message", { required: "Message is required" })}
                className={`w-full px-4 py-3 border rounded-xl resize-none focus:outline-none h-[179px] focus:ring-2 focus:ring-indigo-300 outline-none ${
                  errors.message ? "border-red-500" : "border-[#9E9E9E]"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}

              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="w-[195px] py-3 bg-[var(--primary-color)] text-white rounded-xl hover:bg-[#3726CC] transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Message Sent Successfully! 🎉
            </h2>
            <p className="text-gray-600">
              Thank you for reaching out to us. We’ll get back to you shortly.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactForm;
