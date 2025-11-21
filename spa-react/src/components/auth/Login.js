import React from "react";
import "../../App.css";

function Login() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="">
      <header className="">
        <p>LOGIN</p>
      </header>
    </div>
  );
}
export default Login;
