const fields = [
  { label: 'Client', key: 'client' },
  { label: 'Industry', key: 'industry' },
  { label: 'Service', key: 'service' },
  { label: 'Role', key: 'role' },
  { label: 'Year', key: 'year' },
  { label: 'Status', key: 'status' },
];

export default function ProjectOverview({ project }) {
  return (
    <section className="w-4/5 m-auto border-t border-gray-200 py-10">
      <div className="grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
        {fields.map((field, index) => (
          <div key={field.key}>
            <p className="  font-medium uppercase   text-gray-400 text-sm leading-relaxed">
              {field.label}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-900">{project[field.key]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
