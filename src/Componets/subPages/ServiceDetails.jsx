// ServicePage.jsx
import { useParams, Link } from "react-router-dom";
import { serviceList } from "../../serviceListData"; // adjust path
import { useState } from "react";

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = serviceList.find((item) => item.slug === slug);

  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-gray-900 to-black px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Service Not Found</h1>
        <p className="opacity-70 mt-3 mb-6 max-w-lg">
          We couldn't find this service. Please go back and try again.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-white text-black font-medium rounded-full shadow-md hover:bg-gray-200 transition"
        >
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white pt-40 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title + Description */}
        <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg opacity-90">
          {service.desc}
        </p>

        {/* Main Content */}
        <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <div className="relative group">
            <img
              src={service.image}
              alt={service.title}
              className="w-full  object-cover rounded-2xl shadow-xl cursor-pointer transform group-hover:scale-105 transition duration-300"
              onClick={() => setIsFullscreen(true)}
            />
            <p className="absolute bottom-3 left-3 bg-black/60 text-sm px-3 py-1 rounded-full opacity-80 group-hover:opacity-100 transition">
              Click to enlarge
            </p>
          </div>

          {/* Text Content */}
          <div className="text-left space-y-6">
            {service.intro && (
              <h2
                className="text-xl font-semibold opacity-90"
                dangerouslySetInnerHTML={{ __html: service.intro }}
              />
            )}

            {Array.isArray(service.subContent) &&
              service.subContent.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 shadow-md hover:bg-white/10 transition"
                >
                  <h3
                    className="text-lg font-semibold mb-2"
                    dangerouslySetInnerHTML={{ __html: item.heading }}
                  />
                  <p
                    className="text-base opacity-80"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              ))}

            {service.content && (
              <p className="text-base opacity-80">{service.content}</p>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <Link
            to="/"
            className="px-6 py-3 bg-white text-black font-medium rounded-full shadow-md hover:bg-gray-200 transition"
          >
            ← Back to Services
          </Link>
        </div>
      </div>

      {/* Fullscreen Image Preview */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] p-6"
          onClick={() => setIsFullscreen(false)}
        >
          <img
            src={service.image}
            alt={service.title}
            className="max-w-full max-h-full rounded-xl shadow-2xl object-contain"
          />
        </div>
      )}
    </div>
  );
}
