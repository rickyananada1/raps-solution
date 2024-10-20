export default function CTA() {
  return (
    <div className="bg-gray-50 mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to Transform Your Business?</span>
          <span className="block text-indigo-600">
            Start exploring our IT solutions today <br></br>with a free consultation.
          </span>
        </h2>
        <div className="mt-8 ml-10 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
