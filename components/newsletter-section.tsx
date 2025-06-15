export default function NewsletterSection() {
    return (
        <div className="mt-16 border-t border-gray-800 pt-12">
            <h4 className="text-xl font-semibold mb-4 text-white">Subscribe to Our Newsletter</h4>
            <form className="flex flex-col sm:flex-row items-center sm:space-x-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-auto px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    aria-label="Email address"
                />
                <button
                    type="submit"
                    className="mt-4 sm:mt-0 px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded text-white font-medium transition duration-200"
                >
                    Subscribe
                </button>
            </form>
        </div>
    )

}