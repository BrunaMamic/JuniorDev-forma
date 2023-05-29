import "./Header.css";

function Header(prop: any) {
  const { title } = prop;
  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  );
}
export default Header;
