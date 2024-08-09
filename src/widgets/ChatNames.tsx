import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { media } from "../assets";
import { UserDetails } from "../interfaces/AuthInterface";
import { debounce } from "lodash";
import { SearchUserModal } from "../interfaces/SearchUserModal";

export const ChatNames: React.FC <SearchUserModal> = ({users}) => {
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<UserDetails[] | undefined>();

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
      aria-moda="true"
    >
      <div>
        <div className="flex flex-col space-y-[33px] w-[409px] h-[840px] rounded-[13px] border-[0.5px] shadow-[0px_0px_7.599999904632568px_0px_#00000012]">
          <div className="relative flex mb-[33px]">
            <img
              src={media.msg_search}
              alt=""
              className="w-[24px] h-[24px] absolute left-[58px] top-[46px]"
            />
            <input
              type="text"
              value={query}
              onChange={handleChange}
              className="w-[261px] h-[45px] rounded-[13px] bg-message-hover font-[600] text-[15px] leading-[18.15px] pl-[54px] relative top-[32px] ml-[33px] text-[#78000080] placeholder-[#78000080] focus:outline-none"
              placeholder="Search"
            />
            <img
              src={media.compose}
              className="w-[38px] h-[38px] relative top-[37px] ml-[34px] hover:cursor-pointer"
              onClick={() => console.log("users")}
            />
          </div>
          <div className="flex flex-col items-start space-y-[16px] ml-[33px] overflow-auto">
            {filteredUsers?.map((user) => (
              <div
                className="flex items-center justify-center space-x-[15px] hover:cursor-pointer"
                key={user.id}
              >
                {user?.profilePicture ? (
                  <img
                    src={user?.profilePicture}
                    alt="profile"
                    className="w-[38px] h-[38px] rounded-full"
                  />
                ) : (
                  <img
                    src={media.upload}
                    alt="profile"
                    className="w-[38px] h-[38px] rounded-full"
                  />
                )}
                <span className="text-[13px] font-[600] text-admin-secondary leading-[15.73px] hover:bg-message-hover hover:w-[302px] hover:h-[45px] hover:rounded-[13px]">
                  {user?.firstName} {user?.lastName}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
