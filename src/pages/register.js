import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utilities/hooks";
import { gql, useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const CREATE_USER = gql`
  mutation CreateUser($userInput: UserInput!, $profileInput: ProfileInput) {
    createUser(userInput: $userInput, profileInput: $profileInput) {
      token
      userId
      tokenExpiration
    }
  }
`;

const Register = (props) => {
  let navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    setTimeout(() => {}, 8000);
  }, []);

  //dont need context yet
  const context = useContext(AuthContext);

  const [errors, setErrors] = useState([]);

  function loginUserCallback() {
    login();
  }

  //1. record values from input here
  //2. send it in empty, and hook returns with k/v pairs
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    city: "",
    state: "",
    bio: "",
    occupation: "",
  });

  //3. separate values
  //replace with values.email... etc
  const userInput = {
    email: values.email,
    password: values.password,
    firstName: values.firstName,
    lastName: values.lastName,
    dob: values.dob,
    city: values.city,
    state: values.state,
  };

  const profileInput = {
    bio: values.bio,
    occupation: values.occupation,
  };

  const [login, { loading }] = useMutation(CREATE_USER, {
    update(proxy, { data: { createUser: userData } }) {
      context.login(userData);
      navigate("/dashboard");
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
    //4. send as variables to backend
    variables: {
      userInput: userInput,
      profileInput: profileInput,
    },
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <>

      <img
        src="https://floatui.com/logo.svg"
        width={150}
        className="mx-auto"
        alt="logo"
      />
      <div className=" mb-40 text-center font-semibold font-serif mt-4">REGISTER</div>
      <form onSubmit={onSubmit}>
        <div className="max-w-md px-4 mx-auto mt-12">
          <label htmlFor="email" className="block py-2 text-gray-500">
            Email
          </label>
          <input
            name="email"
            type="text"
            placeholder="email"
            id="email"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            required
            onChange={onChange}
          />
        </div>
        <div className="max-w-md px-4 mx-auto mt-12">
          <label htmlFor="password" className="block py-2 text-gray-500">
            Password
          </label>
          <input
            name="password"
            type="text"
            placeholder="password"
            id="password"
            className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            onChange={onChange}
            required
          />
        </div>
        <div className="max-w-md px-4 mx-auto mt-12">
          <label htmlFor="firstName" className="block py-2 text-gray-500">
            First Name
          </label>
          <input
            name="firstName"
            type="text"
            placeholder="first name"
            id="firstName"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            onChange={onChange}
            required
          />
        </div>
        <div className="max-w-md px-4 mx-auto mt-12">
          <label htmlFor="last name" className="block py-2 text-gray-500">
            lastName
          </label>

          <input
            type="text"
            name="lastName"
            placeholder="last name"
            id="lastName"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            onChange={onChange}
            required
          />
        </div>

        <div className="max-w-md px-4 mx-auto mt-12">
          <label htmlFor="Date of Birth" className="block py-2 text-gray-500">
            Date of Birth
          </label>

          <input
            name="dob"
            type="date"
            placeholder="date of birth"
            id="date of birth"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            onChange={onChange}
            required
          />
        </div>
        <div className="max-w-md px-4 mx-auto mt-12">
          <label htmlFor="city" className="block py-2 text-gray-500">
            City
          </label>

          <input
            name="city"
            type="text"
            placeholder="city"
            id="city"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            onChange={onChange}
            required
          />
        </div>

        <div className="max-w-md px-4 mx-auto mt-12">
          <label htmlFor="state" className="block py-2 text-gray-500">
            State
          </label>

          <input
            name="state"
            type="text"
            placeholder="state"
            id="state"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            onChange={onChange}
            required
          />
        </div>
        <div className="max-w-md px-4 mx-auto mt-12">
          <label htmlFor="occupation" className="block py-2 text-gray-500">
            Occupation
          </label>

          <input
            name="occupation"
            type="text"
            placeholder="occupation"
            id="occupation"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            onChange={onChange}
            required
          />
        </div>
        <div className="max-w-md px-4 mx-auto mt-12">
          <label htmlFor="bio" className="block py-2 text-gray-500">
            Bio
          </label>

          <textarea
            name="bio"
            type="text"
            placeholder="bio"
            id="bio"
            rows="4"
            col="50"
            className="w-full mb-40 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            onChange={onChange}
            required
          />
        </div>

        <div className="flex justify-center">
          <button className="mt-50 px-6 py-2 text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg">
            REGISTER
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
