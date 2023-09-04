import { NavLink } from "react-router-dom";

export default function PageButtons(props) {
  return (
    <div className={`
      ${props.className && props.className}
    `}>
      <ul className={`flex gap-8
        ${props.className && props.className}
      `}>
        <li className="cursor-pointer text-[#474747] font-bold hover:text-Rosa hover:underline">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-Rosa underline" : "")}>
            Home
          </NavLink>
        </li>
        <li className="cursor-pointer text-[#474747] font-bold hover:text-Rosa hover:underline">
          <NavLink
            to="/productsList"
            className={({ isActive }) => (isActive ? "text-Rosa underline" : "")}
          >
            Produtos
          </NavLink>
        </li>
        <li className="cursor-pointer text-[#474747] font-bold hover:text-Rosa hover:underline">
          Categorias
        </li>
        <li className="cursor-pointer text-[#474747] font-bold hover:text-Rosa hover:underline">
          <NavLink
            to="/meuspedidos"
            className={({ isActive }) => (isActive ? "text-Rosa underline" : "")}
          >
            Meus Produtos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}