import React, { useState } from "react";
import { FaTimes, FaChevronDown } from "react-icons/fa";
import { VolunteersPayload } from "../interfaces/AuthInterface";



interface MultiSelectProps {
  users: VolunteersPayload[];
}

const MultiSelect: React.FC<MultiSelectProps> = ({ users }) => {
  const [selectedUsers, setSelectedUsers] = useState<VolunteersPayload[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Handle user selection
  const handleUserSelect = (user: VolunteersPayload) => {
    if (!selectedUsers.find((u) => u.id === user.id)) {
      setSelectedUsers((prev) => [...prev, user]);
    }
    setIsOpen(false);
  };

  // Handle removing a user
  const handleRemoveUser = (userId: string) => {
    setSelectedUsers((prev) => prev.filter((user) => user.id !== userId));
  };

  return (
    <div className="relative w-80">
      {/* Selected users */}
      <div
        className="border border-gray-300 rounded-md p-2 flex flex-wrap gap-2 items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedUsers.length === 0 ? (
          <span className="text-gray-400">Select users...</span>
        ) : (
          selectedUsers.map((user) => (
            <div
              key={user.id}
              className="bg-gray-100 flex items-center rounded-full px-2 py-1"
            >
              <img
                src={user.profilePicture}
                alt={user.firstName}
                className="w-6 h-6 rounded-full mr-2"
              />
              <span className="text-sm mr-2">{user.firstName}</span>
              <FaTimes
                className="text-gray-400 cursor-pointer"
                onClick={() => handleRemoveUser(user.id)}
              />
            </div>
          ))
        )}
        {/* Dropdown icon */}
        <FaChevronDown className="ml-auto text-gray-400" />
      </div>

      {/* Dropdown options */}
      {isOpen && (
        <ul className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleUserSelect(user)}
            >
              <img
                src={user.profilePicture}
                alt={user.firstName}
                className="w-6 h-6 rounded-full mr-3"
              />
              <span>{user.firstName} {user.lastName}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiSelect;
