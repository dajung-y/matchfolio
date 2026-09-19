import { FaUser } from "react-icons/fa";

export default function ProfileInfo({
  profile,
  education,
  certificates,
  awards,
}) {
  return (
    <section className="w-full rounded-xl border border-primary-light px-6 py-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-2 flex h-6 w-6 items-center justify-center">
            <FaUser className="w-full text-primary" />
          </div>

          <h2 className="text-lg font-semibold text-primary">기본 프로필</h2>
        </div>

        <button
          type="button"
          className="cursor-pointer text-sm text-primary-medium underline">
          수정
        </button>
      </div>

      {/* Profile */}
      <div className="mt-5">
        <p className="text-lg font-bold text-gray-900">{profile.name}</p>

        <p className="mt-1 text-sm text-gray-500">{profile.position}</p>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-gray-100" />

      {/* Additional Info */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Education */}
        <div>
          <h3 className="text-sm font-medium text-gray-500">학력</h3>

          <div className="mt-2 space-y-3">
            {education.map((edu) => (
              <div key={edu.id}>
                <p className="text-sm font-semibold text-gray-800">
                  {edu.school}
                </p>

                <p className="mt-1 text-sm text-gray-600">{edu.major}</p>

                <p className="mt-1 text-xs text-gray-400">
                  {edu.period.start} - {edu.period.end}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h3 className="text-sm font-medium text-gray-500">자격증</h3>

          <div className="mt-2 space-y-3">
            {certificates.map((certificate) => (
              <div key={certificate.id}>
                <p className="text-sm font-semibold text-gray-800">
                  {certificate.name}
                </p>

                <p className="mt-1 text-xs text-gray-400">{certificate.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-sm font-medium text-gray-500">수상</h3>

          <div className="mt-2 space-y-3">
            {awards.map((award) => (
              <div key={award.id}>
                <p className="text-sm font-semibold text-gray-800">
                  {award.name}
                </p>

                <p className="mt-1 text-xs text-gray-400">{award.date}</p>

                {award.description && (
                  <p className="mt-1 text-sm text-gray-600">
                    {award.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
