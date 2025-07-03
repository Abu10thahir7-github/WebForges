// ServicePage.jsx
import { useParams, Link } from 'react-router-dom';
import { serviceList } from '../../serviceListData'; // adjust path
import { useState } from 'react';

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = serviceList.find(item => item.slug === slug);
  const [isFullscreen, setIsFullscreen] = useState(false);
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
        <p className="opacity-70 mb-4">
          We couldn't find this service. Please go back and try again.
        </p>
        <Link to="/" className="px-6 py-2 bg-white text-black rounded-full">
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col w-4/5 m-auto mt-52 items-center justify-center text-white gap-6 px-6 text-center">
      <h1 className="text-4xl font-bold">{service.title}</h1>
      <p className="max-w-xl opacity-90 text-lg">{service.desc}</p>


      <div className='flex gap-4 '>
        <img
          src={service.image}
          alt={service.title}
          className="w-[450px] h-fit max-w-3xl rounded-xl cursor-pointer shadow-lg"
          onClick={() => setIsFullscreen(true)}
        />
        <div className='flex flex-col text-left'>

      <h2 className='text-xl mt-4 manjari-regular' dangerouslySetInnerHTML={{ __html: service.intro }} />

{service.subContent.map((item, index) => (
  <div key={index}>
    <h1 className='text-xl mt-4 ' dangerouslySetInnerHTML={{ __html: item.heading }} />
    <p className='text-base mt-4 ' dangerouslySetInnerHTML={{ __html: item.content }} />
  </div>
))}
</div>
        <p className="text-lg text-gray-300 manjari-regular text-left mt-4">{service.content}</p>
      </div>

      <Link to="/" className="px-6 py-2 bg-white text-black rounded-full">
        ← Back to Services
      </Link>
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[100]"
          onClick={() => setIsFullscreen(false)}
        >
          <img
            src={service.image}
            alt={service.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
