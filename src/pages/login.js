import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../utilities/hooks";
import { gql, useMutation } from "@apollo/client";
import { AuthContext } from "../context/authContext";

const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      userId
      tokenExpiration
    }
  }
`;

function Login(props) {
  let navigate = useNavigate();

  const context = useContext(AuthContext);
  const [errors, setErrors] = useState([]);

  function loginUserCallback() {
    login();
  }

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: "",
    password: "",
  });

  const [login, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, { data: { login: userData } }) {
      context.login(userData);
      navigate("/");
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
    variables: { email: values.email, password: values.password },
  });

  if (loading) {
    <h1>error loading</h1>;
  }
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <img
            src="https://floatui.com/logo.svg"
            width={150}
            className="mx-auto"
            alt="logo"
          />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h3>
            <p className="">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              name="email"
              placeholder="Email"
              onChange={onChange}
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              name="password"
              placeholder="Password"
              onChange={onChange}
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          {errors.map(function (error) {
            return <p>{error.message}</p>;
          })}
          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Sign in
          </button>
          <div className="text-center">
            <Link to="/register" className="hover:text-indigo-600">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
