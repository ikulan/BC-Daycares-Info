import Tag from "./common/Tag";

function SiteLogo() {
  return (
    <div className="flex">
      <a
        href="https://github.com/ikulan/BC-Daycares-Info"
        className="mx-2 flex items-center justify-between"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/android-chrome-192x192.png"
          className="h-5 md:h-8"
          alt="Site Logo"
        />
        <span className="ms-2 self-center whitespace-nowrap text-xl font-semibold text-gray-600 md:text-2xl">
          ChildCareMap.ca
        </span>
      </a>
      <Tag color="indigo-800">Beta</Tag>
    </div>
  );
}

export default SiteLogo;
