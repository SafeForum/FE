import React, { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utilities/hooks";
import { gql, useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";

const CREATE_USER = gql`
  mutation CreateUser($userInput: UserInput, $profileInput: ProfileInput) {
    createUser(userInput: $userInput, profileInput: $profileInput) {
      token
      userId
      tokenExpiration
    }
  }
`;

const Register = (props) => {
  let navigate = useNavigate();

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
      navigate("/");
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
    <h1>error loading</h1>;
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="max-w-md px-4 mx-auto mt-12">
          <label htmlFor="email" className="block py-2 text-gray-500">
            Email
          </label>
          <div className="flex items-center text-gray-400 border rounded-md">
            <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r"></div>
            <input
              name="email"
              type="text"
              placeholder="email"
              id="email"
              className="w-full p-2.5 ml-2 bg-transparent outline-none"
              required
              onChange={onChange}
            />
          </div>
        </div>
        <div className="max-w-md px-4 mx-auto mt-12">
          <label htmlFor="password" className="block py-2 text-gray-500">
            Password
          </label>
          <div className="flex items-center text-gray-400 border rounded-md">
            <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r"></div>
            <input
              name="password"
              type="text"
              placeholder="passwor"
              id="password"
              className="w-full p-2.5 ml-2 bg-transparent outline-none"
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="max-w-md px-4 mx-auto mt-12">
          <label htmlFor="firstName" className="block py-2 text-gray-500">
            First Name
          </label>
          <div className="flex items-center text-gray-400 border rounded-md">
            <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r"></div>
            <input
              name="firstName"
              type="text"
              placeholder="firstName"
              id="firstName"
              className="w-full p-2.5 ml-2 bg-transparent outline-none"
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="max-w-md px-4 mx-auto mt-12">
          <label htmlFor="lastName" className="block py-2 text-gray-500">
            lastName
          </label>
          <div className="flex items-center text-gray-400 border rounded-md">
            <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r"></div>
            <input
              type="text"
              name="lastName"
              placeholder="lastName"
              id="lastName"
              className="w-full p-2.5 ml-2 bg-transparent outline-none"
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="max-w-md px-4 mx-auto mt-12">
          <label htmlFor="Date of Birth" className="block py-2 text-gray-500">
            Date of Birth
          </label>
          <div className="flex items-center text-gray-400 border rounded-md">
            <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r"></div>
            <input
              name="dob"
              type="date"
              placeholder="dob"
              id="dob"
              className="w-full p-2.5 ml-2 bg-transparent outline-none"
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="max-w-md px-4 mx-auto mt-12">
          <label htmlFor="city" className="block py-2 text-gray-500">
            City
          </label>
          <div className="flex items-center text-gray-400 border rounded-md">
            <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r"></div>
            <input
              name="city"
              type="text"
              placeholder="city"
              id="city"
              className="w-full p-2.5 ml-2 bg-transparent outline-none"
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="max-w-md px-4 mx-auto mt-12">
          <label htmlFor="state" className="block py-2 text-gray-500">
            State
          </label>
          <div className="flex items-center text-gray-400 border rounded-md">
            <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r"></div>
            <input
              name="state"
              type="text"
              placeholder="state"
              id="state"
              className="w-full p-2.5 ml-2 bg-transparent outline-none"
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="max-w-md px-4 mx-auto mt-12">
          <label htmlFor="occupation" className="block py-2 text-gray-500">
            Occupation
          </label>
          <div className="flex items-center text-gray-400 border rounded-md">
            <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r"></div>
            <input
              name="occupation"
              type="text"
              placeholder="occupation"
              id="occupation"
              className="w-full p-2.5 ml-2 bg-transparent outline-none"
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="max-w-md px-4 mx-auto mt-12">
          <label htmlFor="state" className="block py-2 text-gray-500">
            Bio
          </label>
          <div className="flex items-center text-gray-400 border rounded-md">
            <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r"></div>
            <textarea
              name="bio"
              type="text"
              placeholder="bio"
              id="state"
              rows="4"
              col="50"
              className="w-full p-2.5 ml-2 bg-transparent outline-none"
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="px-5 py-3 text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg">
            Signup
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;