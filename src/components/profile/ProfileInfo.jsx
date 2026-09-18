export default function ProfileInfo({ profile }) {
  return (
    <section className="rounded-xl border border-primary-light w-full px-6 py-4">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="rounded-full w-4 h-4 mr-2 bg-primary-light"></div>
          <h2 className="text-lg font-semibold text-primary">기본 정보</h2>
        </div>
        <button className="text-sm text-primary-medium underline">수정</button>
      </div>
      {/* content */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 justify-between gap-10">
        {/* info */}
        <div className="w-full">
          <p className="font-semibold text-gray-900">{profile.name}</p>
          <p className="text-sm text-gray-500 mt-1">{profile.position}</p>
        </div>
        {/* link */}
        <div className="flex flex-col justify-center rounded-lg border border-primary-light px-4 py-2">
          <div className="text-sm">
            {profile.links.github && (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-primary-medium hover:underline">
                GitHub
              </a>
            )}
            {profile.links.blog && (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-primary-medium hover:underline">
                Blog
              </a>
            )}
            {profile.links.portfolio && (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-primary-medium hover:underline">
                Portfolio
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
