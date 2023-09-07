import "./component.style.css";
import { useNavigate } from "react-router-dom";

interface IHeaderProps {
  isShowSubPages: boolean;
}
function Header({ isShowSubPages }: IHeaderProps) {
  const navigate = useNavigate();
  return (
    <div className="header">
      {!isShowSubPages ? (
        <>
          <button onClick={() => navigate("/home")}>Home</button>
          <button onClick={() => navigate("/foobar")}>Foobar</button>
        </>
      ) : (
        <>
          <button onClick={() => navigate("/foobar/foo")}>Foo</button>
          <button onClick={() => navigate("/foobar/bar")}>Bar</button>
          <button onClick={() => navigate("/")}>Go back</button>
        </>
      )}
    </div>
  );
}

export default Header;
