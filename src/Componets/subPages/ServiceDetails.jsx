// ServicePage.jsx
import { useParams, Link } from 'react-router-dom';
import { serviceList } from '../../serviceListData'; // adjust path

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = serviceList.find(item => item.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
        <p className="opacity-70 mb-4">We couldn't find this service. Please go back and try again.</p>
        <Link to="/" className="px-6 py-2 bg-white text-black rounded-full">← Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col mt-52 items-center justify-center text-white gap-6 px-6 text-center">

      <h1 className="text-4xl font-bold">{service.title}</h1>
      <p className="max-w-xl opacity-90 text-lg">{service.desc}</p>
      <img src={service.image} alt={service.title} className="w-full max-w-3xl rounded-xl shadow-lg" />

<p className="text-lg text-gray-300 mt-4">{service.content}</p>

      <Link to="/" className="px-6 py-2 bg-white text-black rounded-full">← Back to Services</Link>
    </div>
  );
}
