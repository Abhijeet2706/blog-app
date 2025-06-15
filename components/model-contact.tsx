export default function ModalConact({
    setShowModal,
    handleSubmit
}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-lg relative">
                <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
                >
                    ×
                </button>
                <h2 className="text-xl font-semibold mb-4 text-[#1A1C2B]">Let's Talk</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-[#1A1C2B]">Name</label>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#1A1C2B] focus:ring-[#1A1C2B]"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#1A1C2B]">Email</label>
                        <input
                            type="email"
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#1A1C2B] focus:ring-[#1A1C2B]"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#1A1C2B]">Message</label>
                        <textarea
                            rows={3}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-[#1A1C2B] focus:ring-[#1A1C2B]"
                            placeholder="What would you like to discuss?"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#1A1C2B] text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-[#1A1C2B]/90"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}