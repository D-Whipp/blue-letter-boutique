import './contact-us.component.css';

import React, { useState } from 'react';

import Promotion from '../../routes/promotion/promotion.component';
import Navigation from '../../routes/navigation/navigation.component';
import QuickLinks from '../../routes/quick-links/quick-links.component';
import Footer from '../footer/footer.component';

const FORM_ENDPOINT =
    'https://public.herotofu.com/v1/0b0f43b0-00e3-11ee-9eca-1f15a141e038';

const ContactUs = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <>
            <Promotion />
            <Navigation />

            <div className="contact-us-container">
                <div className="contact-us-text-container">
                    <h2>Contact us</h2>
                    <p>
                        At Blue Letter Boutique, we are committed to
                        providing quality service and showering our
                        customers with love & attention. Please let us
                        know if there’s any way we can help or
                        improve, or even if you want to just talk
                        fashion! We are always ready! Please remember
                        that we are a locally owned small business.
                        Our online division is not open on weekends or
                        holidays but please know we will get back with
                        you first thing the next business day!
                    </p>
                    <p>Website Customer Service Hours:</p>
                    <p>Monday-Friday 9AM - 5PM MT</p>
                    <p>555-555-5555</p>
                    <p>orders@blueletterboutique.com</p>
                </div>

                <div className="contact-us-form-container">
                    <form
                        action={FORM_ENDPOINT}
                        onSubmit={handleSubmit}
                        method="POST"
                        target="_blank"
                    >
                        <div className="form-name-input-container">
                            <input
                                type="text"
                                placeholder="Your name"
                                name="name"
                                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                required
                            />
                        </div>
                        <div className="form-email-input-container">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                required
                            />
                        </div>
                        <div className="form-message-input-container">
                            <textarea
                                placeholder="Your message"
                                name="message"
                                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                required
                            />
                        </div>
                        <div className="mb-3 pt-0">
                            <button
                                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="submit"
                            >
                                Send a message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <QuickLinks />
            <Footer />
        </>
    );
};

export default ContactUs;
