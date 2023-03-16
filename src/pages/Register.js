import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utilities/hooks";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const CREATE_USER = gql`
  mutation CreateUser($userInput: UserInput!, $profileInput: ProfileInput) {
    createUser(userInput: $userInput, profileInput: $profileInput) {
      token
      userId
      tokenExpiration
      cityPortal
    }
  }
`;

const Register = (props) => {
  let navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const { login, currentCityPortal } = useContext(AuthContext);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setIsLoading(false);
    setTimeout(() => {}, 8000);
    if (currentCityPortal) {
      navigate(`/dashboard/${currentCityPortal}`);
    }
  }, [currentCityPortal, navigate]);



  function loginUserCallback() {
    gql_login();
  }

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

  const [gql_login, { loading }] = useMutation(CREATE_USER, {
    update(proxy, { data: { createUser: userData } }) {
      login(userData);
      setIsLoading(loading)
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className=" mb-40 text-center font-semibold font-serif mt-4">
        REGISTER
      </div>
      <form onSubmit={onSubmit}>
        <div className="max-w-md px-4 mx-auto">
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
        <div className="max-w-md px-4 mx-auto ">
          <label htmlFor="password" className="block py-2 text-gray-500">
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            id="password"
            className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            onChange={onChange}
            required
          />
        </div>
        <div className="max-w-md px-4 mx-auto">
          <label htmlFor="first name" className="block py-2 text-gray-500">
            First Name
          </label>
          <input
            name="first name"
            type="text"
            placeholder="first name"
            id="firstName"
            className="w-full  px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            onChange={onChange}
            required
          />
        </div>
        <div className="max-w-md px-4 mx-auto">
          <label htmlFor="last name" className="block py-2 text-gray-500">
            lastName
          </label>

          <input
            type="text"
            name="last name"
            placeholder="last name"
            id="last name"
            className="w-full  px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            onChange={onChange}
            required
          />
        </div>

        <div className="max-w-md px-4 mx-auto">
          <label htmlFor="Date of Birth" className="block py-2 text-gray-500">
            Date of Birth
          </label>

          <input
            name="dob"
            type="date"
            placeholder="date of birth"
            id="date of birth"
            className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            onChange={onChange}
            required
          />
        </div>
        <div className="max-w-md px-4 mx-auto">
          <label htmlFor="city" className="block py-2 text-gray-500">
            City
          </label>

         <label htmlFor="state" className="block py-2 text-gray-"></label>
          <input
            name="state"
            type="text"
            placeholder="state"
            id="state"
            className="w-full  px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            onChange={onChange}
            required
          />
        </div>

        <div className="max-w-md px-4 mx-auto ">
          <label htmlFor="occupation" className="block py-2 text-gray-500">
            Occupation
          </label>

          <input
            name="occupation"
            type="text"
            placeholder="occupation"
            id="occupation"
            className="w-full  px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            onChange={onChange}
            required
          />
        </div>
        <div className="max-w-md px-4 mx-auto">
          <label htmlFor="bio" className="block py-2 text-gray-500">
            Bio
          </label>
          <textarea
            textarea=""
            name="bio"
            type="textarea"
            placeholder="bio"
            id="bio"
            rows="6"
            col="50"
            className="w-full mb-40 mt-2 px-3 py-2 text-gray-500
          bg-transparent outline-none border focus:border-indigo-600 shadow-sm
          rounded-lg"
            onChange={onChange}
            required
          />
        </div>
        {errors.map(function (error) {
            return <p>{error.message}</p>;
          })}
        <div className="flex justify-center">
          <button className="px-7 py-4 text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 acrtive:shadow">
            REGISTER
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
