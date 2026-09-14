import SectionLabel from "../../../Componets/UI/SectionLabel";

export default function TechStack({ stack }) {
  return (
    <section className="md:w-4/5 px-3 m-auto border-t border-gray-200 py-7">

      <SectionLabel text="Technology stack" className="!text-sm" />

      <div className="flex flex-wrap mt-3 gap-3">
        {stack.map(tech => (
          <span
            key={tech}
            className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
