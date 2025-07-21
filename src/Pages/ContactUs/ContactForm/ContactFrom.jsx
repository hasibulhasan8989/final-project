



const ContactFrom = () => {

    return (
         <div className="bg-gray-100 py-16  mb-6 px-6">
      <form className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-yellow-700">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Write your message here"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-8 py-3 rounded-lg shadow-md transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
    );
};

export default ContactFrom;