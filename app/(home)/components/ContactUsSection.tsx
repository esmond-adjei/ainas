const ContactUs = () => {
  return (
    <section id="contact-us" className="py-20 bg-gray-100">
      <h2 className="text-3xl font-semibold mb-8 text-center">Contact Us</h2>

      {/* Contact Info Block */}
    <div className="mb-12 max-w-3xl mx-auto bg-white p-8 rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
        <form action="#" method="POST">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
            <label htmlFor="name" className="block text-gray-700 text-sm">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your Full Name"
            />
            </div>
            <div>
            <label htmlFor="email" className="block text-gray-700 text-sm">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your Email"
            />
            </div>
        </div>
        <div className="mb-6">
            <label htmlFor="subject" className="block text-gray-700 text-sm">Subject</label>
            <input
            type="text"
            id="subject"
            name="subject"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Subject of Your Message"
            />
        </div>
        <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm">Message</label>
            <textarea
            id="message"
            name="message"
            className="w-full p-3 border border-gray-300 rounded-md"
            rows={4}
            placeholder="Your Message"
            />
        </div>
        <button type="submit" className="w-full px-6 py-3 bg-primary text-white rounded-full hover:bg-secondary transition">
            Send Message
        </button>
        </form>
    </div>
    </section>
  );
};

export default ContactUs;
