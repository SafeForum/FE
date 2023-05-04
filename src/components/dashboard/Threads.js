import React, { useContext } from "react";
import { MessageBoardContext } from "../../context/messageBoardContext";
import { Link } from "react-router-dom";

const Threads = () => {
  const { threads } = useContext(MessageBoardContext);
  console.log("MB DATA: ", threads);

  return (
    <ul className="divide-y divide-gray-100">
      {threads.map((thread, i) => (
        <Link to="" key={i}>
          <li className="flex justify-between gap-x-6 my-2 py-5 hover:shadow-md px-6 border rounded-md ">
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {thread.subject}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {thread.creator.firstName} {thread.creator.lastName}
                </p>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Threads;
