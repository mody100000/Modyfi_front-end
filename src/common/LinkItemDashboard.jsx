import { Link, useLocation } from "react-router-dom";

const LinkItem = ({ name, url, icon }) => {
  return (
    <Link
      to={`/${url}`}
      className={`bg-primary/25 py-6 px-3 border-solid border-b-2 border-primary/75 text-gray-200
              hover:bg-primary/75 ease-in-out duration-300 font-semibold text-lg
              ${useLocation().pathname == "/" + url ? "active" : null}
`}
    >
      {icon} <span className="ml-2">{name}</span>
    </Link>
  );
};

export default LinkItem;
