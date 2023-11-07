import { useState } from "react";
import { Navigate } from "react-router-dom";

const AuthenticateAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const authenticate = (e) => {
    e.preventDefault();

    const validUsername = "shreeji@admin";
    const validPassword = "shreeji_2022";

    if (username === validUsername && password === validPassword) {
      setAuthenticated(true);
    } else if (username !== validUsername || password !== validPassword) {
      setAuthenticated(false);
      setLoginError(true);
      // alert("Username and password does not match");
      setUsername("");
      setPassword("");
    } else {
      setAuthenticated(false);
      setLoginError(false);
    }
  };

  return (
    <>
      <div className="section max-container flex-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg border border-neutral-300 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
          <form className="flex flex-col" onSubmit={authenticate}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-primary-color transition ease-in-out duration-150"
              placeholder="Email address"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-primary-color transition ease-in-out duration-150"
              placeholder="Password"
            />
            {loginError && (
              <span className="text-sm bg-red-100 rounded-sm px-2 text-red-600">
                Email and password does not match
              </span>
            )}

            <button
              type="submit"
              className="bg-gradient-to-r from-primary-color to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      {authenticated && <Navigate to={"/admin"} replace={true} />}
    </>
  );
};

export default AuthenticateAdmin;
