import { StatusBadge } from "../common/StatusBadge";

export default function Hero() {
  return (
    <section className="relative pt-42 pb-16 px-4 md:px-8 min-h-[80vh] flex flex-col items-center justify-center text-center">
      <StatusBadge text="Enterprise Solutions" className="mb-5" />

      {/* Headlines */}
      <h1 className="max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">
        Early Access to <br />
        Future of AI <span className="italic font-light">Growth</span>
      </h1>

      <p className="max-w-2xl mt-3 text-base text-gray-600 md:text-lg">
        Automate tasks, unlock insights, and scale your team's
        <br /> productivity — all in one place
      </p>

      {/* Waitlist Form */}
      <div className="z-10 w-full max-w-md mt-10">
        <div className="relative p-2 ring-1 flex items-center bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-gray-100/50 rounded-full">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 flex-1 bg-transparent outline-none text-gray-800 placeholder:text-gray-400"
          />
          <button className="px-8 py-3 text-base font-medium text-white bg-[#1A1A1A] rounded-full transition-all hover:bg-black">
            Join Waitlist
          </button>
        </div>
      </div>

      {/* Proof / Founders */}
      <div className="z-10 mt-8 flex items-center justify-center gap-3">
        <div className="-space-x-3 flex">
          <div className="h-8 w-8 border-2 flex items-center justify-center bg-gray-200 border-white shadow-sm overflow-hidden rounded-full">
            <img
              src="https://i.pravatar.cc/100?img=33"
              alt="avatar 1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-8 w-8 border-2 flex items-center justify-center bg-gray-300 border-white shadow-sm overflow-hidden rounded-full">
            <img
              src="https://i.pravatar.cc/100?img=47"
              alt="avatar 2"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-8 w-8 border-2 flex items-center justify-center bg-gray-400 border-white shadow-sm overflow-hidden rounded-full">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="avatar 3"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <p className="text-sm font-medium text-gray-600">
          Join 120 + SaaS & AI founders
        </p>
      </div>
    </section>
  );
}
