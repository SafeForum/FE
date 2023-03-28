import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../utilities/hooks";
import { gql, useMutation } from "@apollo/client";
import { AuthContext } from "../context/authContext";

// move this query to GraphQL/Queries.js
const GET_PROFILE = gql`
  query Profile(
        $id: ID!, 
        $user: User!, 
        $avatar: String, 
        $bio: String,
        $occupation: String,
        $socialStatus: [SocialStatus],
        $twitter: String,
        $facebook: String,
        $instagram: String
        ) {
    profile(
        id: $id,
        user: $user,
        avatar: $avatar,
        bio: $bio,
        occupation: $occupation,
        socialStatus: $socialStatus,
        twitter: $twitter,
        facebook: $facebook,
        instagram: $instagram) {
        user
        avatar
        bio
    }
  }
`;

function Profile(props) {
    return (
        <h1 className="text-3xl font-bold">
        Profile page
      </h1>
    )
}

export default Profile;
