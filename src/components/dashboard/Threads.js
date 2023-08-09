import React, { useContext } from "react";
import { MessageBoardContext } from "../../context/messageBoardContext";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

const Threads = () => {
  const { threads } = useContext(MessageBoardContext);
  const { cityPortal } = useContext(AuthContext);
  console.log("MB DATA: ", threads);

  return (
    <ul className="divide-y divide-gray-100">
      {threads.map((thread, i) => (
        <Link to={`/dashboard/${cityPortal}/threads/${thread._id}`} key={i}>
          <li className="gap-x-6 my-2 py-2 hover:shadow-md px-6 border rounded-md ">
            <div className="flex flex-row gap-x-4">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {thread.subject}
                </p>
                <p className="text-sm leading-6 text-gray-900">
                  {thread.body}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {thread.creator.firstName} {thread.creator.lastName}
                </p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Threads;
