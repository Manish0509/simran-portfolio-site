"use client";
import React, { useState } from "react";
import Button from "../Common/Button";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [respMessage, setRespMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    serviceType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearMessage = () => {
    setTimeout(() => {
      setRespMessage("");
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/contact/`, {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          serviceType: "",
        });
        setRespMessage("Your response is submitted successfully.");
        clearMessage();
      } else {
        setRespMessage("Something went wrong!");
      }
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error sending email", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex v2-contact-form">
      <form
        className="w-full flex flex-col !gap-5"
        id="contact-form"
        onSubmit={handleSubmit}
      >
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
          <input
            className="form-field"
            placeholder="Name"
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
          />
          <input
            className="form-field"
            placeholder="Email Address"
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
          />
        </div>
        <div className="w-full grid grid-cols-1 gap-4">
          <input
            className="form-field"
            placeholder="Phone Number"
            type="number"
            name="phone"
            value={formData.phone}
            required
            onChange={handleChange}
          />
          <div className="relative w-full">
            <select
              name="serviceType"
              value={formData.serviceType}
              required
              onChange={handleChange}
              className="form-field appearance-none w-full bg-white border border-gray-300 px-4 py-2 pr-10 rounded text-base"
            >
              <option value="" disabled>
                Select Service Type
              </option>
              <option className="!text-black" value="Mobile Application Design">
                Mobile Application Design
              </option>
              <option
                className="!text-black"
                value="Website Application Design"
              >
                Website Application Design
              </option>
              <option className="!text-black" value="Re-design">
                Re-design
              </option>
              <option className="!text-black" value="Brand Identity">
                Brand Identity
              </option>
              <option className="!text-black" value="Logo Design">
                Logo Design
              </option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5">
              <svg
                className="w-4 h-4 text-off-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1">
          <textarea
            className="form-field resize-none"
            cols="1"
            rows="4"
            placeholder="About Your Project"
            id="message"
            aria-invalid="false"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        {respMessage && (
          <div className="h-4 text-white" id="sucess_msg">
            {respMessage}
          </div>
        )}
        <div className="flex flex-col md:flex-row items-center gap-5">
          <Button
            id="submit"
            name="btnSubmit"
            type="submit"
            size="large"
            className="hover:text-themeColor hover:!bg-colorWhite md:w-fit w-full gap-2"
            // icon={isSubmitting ? <Loader /> : ""}
            label={isSubmitting ? "Submitting..." : "Submit"}
            disabled={isSubmitting}
          />
          <div
            className={`md:text-xl text-lg md:text-left text-center md:border-l border-l-0 border-l-[#2d3540] md:!pl-5 text-off-white`}
          >
            <div>
              Email Us :{" "}
              <a
                href="mailto:simranlalchandani150@gmail.com"
                target="_blank"
                className="bg-clip-text text-transparent text-gradient"
              >
                simranlalchandani150@gmail.com
              </a>
            </div>
            <div className="flex items-center flex-col md:flex-row flex-wrap mt-1">
              Contacts :{" "}
              <p className="flex bg-clip-text text-transparent text-gradient">
                <a href="tel:917999051428" className="md:pt-1.5 font-medium">
                  +91 7999051428
                </a>
                ,&nbsp;
                <br className="md:hidden block" />
                <a href="tel:971547628002" className="md:pt-1.5 font-medium">
                  +971 547628002
                </a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
