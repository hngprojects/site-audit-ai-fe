export default function NewsletterForm() {
  return (
    <section className="mt-16 md:mt-20  rounded-lg p-4 md:p-12">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-sans font-bold text-[#FF5A3D] mb-4">
          Want a Healthier Website?
        </h2>
        <p className="text-[#1C1C1C] text-base md:text-lg mb-8 leading-relaxed">
          Stay connected to get expert tips, guides, and early access to our
          audit tool so you can fix them before they hurt your traffic.
        </p>

        <form className="space-y-6 max-w-[652px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-left">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-[#494949] mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF5A3D] focus:border-transparent outline-none transition-colors placeholder:text-[#B9B9B9]"
              />
            </div>

            <div className="text-left">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#494949] mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="user@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF5A3D] focus:border-transparent outline-none transition-colors placeholder:text-[#B9B9B9]"
              />
            </div>
          </div>

          <div className="text-left">
            <label
              htmlFor="challenge"
              className="block text-sm font-medium text-[#494949] mb-2"
            >
              What is your biggest website challenge?
            </label>
            <input
              type="text"
              id="challenge"
              name="challenge"
              placeholder="Describe your main challenge"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF5A3D] focus:border-transparent outline-none transition-colors placeholder:text-[#B9B9B9]"
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-18 py-3 bg-[#FF5A3D] text-white font-semibold rounded-lg hover:bg-[#FF5A3D]/90 transition-colors focus:ring-2 focus:ring-[#FF5A3D] focus:ring-offset-2 outline-none"
          >
            Keep Me Updated
          </button>
        </form>
      </div>
    </section>
  );
}
