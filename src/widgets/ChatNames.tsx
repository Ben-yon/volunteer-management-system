import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { media } from "../assets";
import { UserDetails } from "../interfaces/AuthInterface";
import { debounce } from "lodash";
import { DisplayChatUsers } from "../interfaces/ModalProps";
import { forwardRef } from "react";

export const ChatNames = forwardRef<HTMLDivElement, DisplayChatUsers>(
  ({
  getSelectedUserId,
  closeModal,
  users,
}, ref) => {
  const [query, setQuery] = useState("");

  const [filteredUsers, setFilteredUsers] = useState<
    UserDetails[] | undefined
  >();


  const userSearch = useCallback(
    debounce((searchTerm: string) => {
      if (searchTerm) {
        const filtered = users?.filter((user) => {
          return (
            user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
          );
        });
        setFilteredUsers(filtered);
      } else {
        setFilteredUsers([]);
      }
    }, 200),
    [users]
  );

  useEffect(() => {
    userSearch(query);
    return () => {
      userSearch.cancel();
    };
  }, [query, userSearch]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };


  return (
    <div
      className="relative z-10"
      aria-labelledby="message-user"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 modal-content" ref={ref}>
        <div className="w-[90%] max-w-[409px] h-[90%] max-h-[840px] bg-white rounded-lg border shadow-lg flex flex-col p-6">
            <h1 className="text-[23px] leading-[27.84px] font-[600] text-admin-secondary mb-[19.52px] mt-[39.37px]">
              New Chat
            </h1>
          <div className="relative flex items-center mb-6">
            <img
              src={media.msg_search}
              alt="Search Icon"
              className="absolute left-4 w-6 h-6"
            />
            <input
              type="text"
              value={query}
              onChange={handleChange}
              className="w-full pl-12 py-2 rounded-lg bg-message-hover text-sm font-semibold text-[#78000080] placeholder-[#78000080] focus:outline-none"
              placeholder="Search"
            />
          </div>
          <div className="flex flex-col items-start space-y-4 overflow-y-auto">
            {filteredUsers?.map((user) => (
              <div
                className="flex items-center space-x-4 cursor-pointer p-2 rounded-lg"
                key={user.id}
                onClick={() => {
                  getSelectedUserId(user.id)
                  closeModal()
                } }
              >
                <img
                  src={user?.profilePicture || media.upload}
                  alt={`${user?.firstName} ${user?.lastName} profile`}
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-sm font-semibold text-admin-secondary hover:bg-message-hover hover:w-[302px] hover:h-[45px] hover:rounded-[13px] hover:flex hover:items-center hover:pl-[8px]">
                  {user?.firstName} {user?.lastName}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
);

