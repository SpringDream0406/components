import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  path?: string;
  subItems: { path: string; label: string }[];
}

interface NavBarProps {
  navItems: NavItem[];
}

const NavBar: React.FC<NavBarProps> = ({ navItems }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.label} className="relative group">
            {/* 큰 카테고리 */}
            {item.path ? (
              <Link
                to={item.path}
                className="text-white hover:text-gray-400 cursor-pointer"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white hover:text-gray-400 cursor-pointer">
                {item.label}
              </span>
            )}
            {/* 세부 카테고리 (드롭다운) */}
            {item.subItems.length > 0 && (
              <ul className="absolute left-0 mt-0 hidden w-48 bg-gray-700 rounded-md shadow-lg group-hover:block z-10">
                {item.subItems.map((subItem) => (
                  <li key={subItem.path}>
                    <Link
                      to={subItem.path}
                      className="block px-4 py-2 text-white hover:bg-gray-600"
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
