/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { media } from "../../assets";
import {
  useEffect,
  useState,
  KeyboardEvent,
  useCallback,
  ChangeEvent,
  useRef,
} from "react";

import { format, isSameDay } from "date-fns";
import { formatTime } from "../../utils/extractTimeFrom";

import * as signalR from "@microsoft/signalr";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { users } from "../../features/users/userActions";
import { UserDetails } from "../../interfaces/AuthInterface";
import { toast } from "react-toastify";
import {
  getMessages,
  postMessages,
} from "../../features/messaging/messagingActions";
import { MessagesDetails } from "../../interfaces/MessagingInterface";
import { TargetTypes } from "../../enums/targetTypes";

import debounce from "lodash/debounce";
import { MessageTypes } from "../../enums/messageTypes";
import { ChatNames } from "../../widgets/ChatNames";

export const Messages = () => {
  const [connection, setConnection] = useState<signalR.HubConnection | null>(
    null
  );

  const { loading, success, userInfo, error } = useSelector(
    (state: RootState) => state.usersSlice
  );

  const { messageDetails } = useSelector(
    (state: RootState) => state.getMessagesSlice
  );
  const [messageUsers, setMessageUsers] = useState<Array<UserDetails>>();
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<UserDetails[] | undefined>(
    messageUsers
  );
  const [messages, setMessages] = useState<MessagesDetails[]>([]);
  const [message, setMessage] = useState<string>("");
  const [userId, setUserId] = useState<string | undefined>();
  const userRef = useRef<HTMLSpanElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const [activeUser, setActivUser] = useState<UserDetails>();

  const connectionURL = import.meta.env.VITE_BACKEND_SERVER_BASE_URL;
  //@ts-ignore
  const currentUser = JSON.parse(localStorage.getItem("userInfo"));

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const fetchUsers = useCallback(() => {
    dispatch(users());
  }, [dispatch]);

  const fetchMessages = useCallback(() => {
    dispatch(getMessages());
  }, [dispatch]);

  useEffect(() => {
    fetchUsers();
    fetchMessages();
  }, [fetchUsers, messageDetails, fetchMessages]);

  useEffect(() => {
    if (success) {
      //@ts-expect-error
      const displayUsers = userInfo?.filter(
        //@ts-ignore
        (user) => user.id !== currentUser.id
      );
      setMessageUsers(displayUsers);
      toast.success("Users fetch successful");
    } else if (loading) {
      toast.info("Message Users Loading", { isLoading: false });
    } else {
      toast.error("User fetch was not successful");
    }
  }, [userInfo, success, error, loading]);

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${connectionURL}HubMessages`)
      .withAutomaticReconnect()
      .build();
    setConnection(newConnection);
  }, [connectionURL]);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const getUserById = (userId: string | undefined): UserDetails | undefined => {
    const user = messageUsers?.find((user) => user.id === userId);
    return user;
  };
  const getUserByName = useCallback(
    (name: string | undefined): UserDetails | undefined => {
      const selectedUser = messageUsers?.find(
        (user) =>
          user?.firstName === name?.split(" ")[0] &&
          user?.lastName === name.split(" ")[1]
      );
      return selectedUser;
    },
    [messageUsers]
  );

  const userSearch = useCallback(
    debounce((searchTerm: string) => {
      if (searchTerm) {
        const filtered = messageUsers?.filter((user) => {
          return (
            user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
          );
        });
        setFilteredUsers(filtered);
      } else {
        setFilteredUsers(messageUsers);
      }
    }, 200),
    [messageUsers]
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

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
    setIsTyping(true);
  };

  useEffect(() => {
    if (isTyping) {
      const typingTimeout = setTimeout(() => {
        setIsTyping(false); // Set typing state to false after 500ms of no input
      }, 500);

      // Cleanup timeout if user types before the timeout ends
      return () => clearTimeout(typingTimeout);
    }
  }, [message]);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          console.log("connected!");

          connection.on("ReceiveMessage", (userId: string, message: string) => {
            setMessages((messages) => [
              ...messages,
              {
                senderUserId: userId,
                body: message,
              },
            ]);
          });
        })
        .catch((e) => console.log("Connection failed: ", e));
    }
  }, [connection]);

  const selectUserOrGroup = (event: React.MouseEvent<HTMLSpanElement>) => {
    const user = getUserByName(event.currentTarget.innerText);
    setActivUser(user);
    setUserId(currentUser?.id);
  };

  const sendMessage = async () => {
    if (
      connection &&
      connection.state === signalR.HubConnectionState.Connected
    ) {
      try {
        dispatch(
          postMessages({
            senderUserId: userId,
            targetId: activeUser?.id,
            body: message,
            targetType: TargetTypes.USER,
            messsageType: MessageTypes.TEXT,
          })
        );
        console.log("Message sent");
        setMessage(message);
        setMessage("");
      } catch (e) {
        console.error(e);
      }
    } else {
      alert("No connection to server!");
    }
  };
  useEffect(() => {
    //@ts-ignore
    setMessages(
      [...messageDetails].sort((a, b) => {
        const dateA = a.createdDate ? new Date(a.createdDate).getTime() : 0;
        const dateB = b.createdDate ? new Date(b.createdDate).getTime() : 0;
        return dateA - dateB;
      })
    );
  }, [messageDetails]);

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const formatDateHeader = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();

    if (isSameDay(date, today)) {
      return `Today, ${format(date, "MMMM dd")}`;
    } else {
      return format(date, "MMMM dd");
    }
  };

  let lastMessageDate: string | null = null;

  return (
    <div className="flex  flex-col justify-center">
      <p className="text-[#D9D9D9] text-[15px] font-extrabold leading-[18.15px]">
        MCSS Messages
      </p>
      <h2 className="text-black font-extrabold text-[27px] leading-[32.68px] pb-6">
        Messaging
      </h2>
      <div className="flex items-center space-x-[22px]">
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
              onClick={() => setModalOpen(true)}
            />
          </div>
          {modalOpen && (
            <ChatNames
              users={messageUsers}
              closeModal={() => closeModal()}
              getSelectedUserId={getUserById}
              ref={modalRef}
            />
          )}
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
                <span
                  ref={userRef}
                  onClick={selectUserOrGroup}
                  className="text-[13px] font-[600] text-admin-secondary leading-[15.73px] hover:bg-message-hover hover:w-[302px] hover:h-[45px] hover:rounded-[13px] hover:flex hover:items-center hover:pl-[8px]"
                >
                  {user?.firstName} {user?.lastName}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-[828px] h-[840px] rounded-[13px] border-[0.5px] shadow-[0px_0px_7.599999904632568px_0px_#00000012]">
          <div className="flex items-center space-x-7">
            {activeUser?.profilePicture ? (
              <img
                src={activeUser?.profilePicture}
                alt="profile"
                className="w-[65.8px] h-[65.8px] rounded-full relative top-[24px] left-[39px]"
              />
            ) : (
              <img
                src={media.upload}
                alt="profile"
                className="w-[65.8px] h-[65.8px] rounded-full relative top-[24px] left-[39px]"
              />
            )}
            <div className="relative top-[31px] left-[28.2px] flex flex-col">
              <p className="font-[600] text-[22.51px] leading-[27.24px] text-admin-secondary">
                {activeUser?.firstName} {activeUser?.lastName}
              </p>
              {isTyping && (
                <p className="italic text-[13px] font-[400] leading-[15.73px]">
                  Typing
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col w-[806px] h-[659px] bg-messages rounded-[17px] mt-[41px] ml-[11px] overflow-auto">
            {messages
              ?.filter(
                (rec) =>
                  (rec.targetId === currentUser?.id &&
                    rec.senderUserId === activeUser?.id) ||
                  (rec.senderUserId === currentUser?.id &&
                    rec.targetId === activeUser?.id)
              )
              ?.map((message) => {
                const isSentByCurrentUser =
                  message.senderUserId === currentUser?.id;
                const messageDate = message.createdDate || ""; // Make sure createdDate is provided

                const showDateHeader =
                  !lastMessageDate ||
                  !isSameDay(new Date(lastMessageDate), new Date(messageDate));

                lastMessageDate = messageDate; // Update the lastMessageDate

                return (
                  <div key={message.id}>
                    {showDateHeader && (
                      <div className="flex items-center justify-center my-4 text-admin-secondary text-[8px] leading-[9.68px] font-[500]  rounded-[9px]">
                        {formatDateHeader(messageDate)}
                      </div>
                    )}
                    <div
                      className={`flex mt-[40px] space-x-[4px] ${
                        isSentByCurrentUser
                          ? "justify-end mr-[37px]"
                          : "justify-start ml-[37px]"
                      }`}
                    >
                      {!isSentByCurrentUser && (
                        <div>
                          {activeUser?.profilePicture ? (
                            <img
                              src={activeUser?.profilePicture}
                              alt="profile"
                              className="w-[38px] h-[38px] rounded-full"
                            />
                          ) : (
                            <img
                              src={media.upload}
                              alt="profile"
                              className="w-[38px] h-[38px] rounded-full "
                            />
                          )}
                        </div>
                      )}
                      <div className="flex flex-col">
                        <div>
                          {isSentByCurrentUser ? (
                            <div className="flex space-x-[15px]">
                              <span className="text-admin-secondary font-[600] leading-[15.73px] text-[13px] mb-[4px]">
                                {currentUser?.firstName} {currentUser?.lastName}
                              </span>
                              <span className="text-admin-secondary font-[400] text-[9px] leading-[10.89px]">
                                {/**@ts-ignore */}
                                {formatTime(message.createdDate)}
                              </span>
                            </div>
                          ) : (
                            <div className="flex space-x-[15px]">
                              <span className="text-admin-secondary font-[600] leading-[15.73px] text-[13px] mb-[4px]">
                                {currentUser?.firstName} {currentUser?.lastName}
                              </span>
                              <span className="text-admin-secondary font-[400] text-[9px] leading-[10.89px]">
                                {/**@ts-ignore */}
                                {formatTime(message.createdDate)}
                              </span>
                            </div>
                          )}
                        </div>
                        <p
                          className={`text-primary p-3 w-auto ${
                            isSentByCurrentUser
                              ? "bg-admin-secondary rounded-l-[15px] rounded-br-[15px]"
                              : "bg-admin-secondary rounded-r-[15px] rounded-bl-[15px]"
                          } font-[500] text-[11px] leading-[13.31px]`}
                        >
                          {message.body}
                        </p>
                      </div>
                      {isSentByCurrentUser && (
                        <div>
                          {currentUser?.profilePicture ? (
                            <img
                              src={currentUser?.profilePicture}
                              alt="profile"
                              className="w-[38px] h-[38px] rounded-full"
                            />
                          ) : (
                            <img
                              src={media.upload}
                              alt="profile"
                              className="w-[38px] h-[38px] rounded-full "
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="flex items-center space-x-1">
            <input
              className="w-[687px] h-[37.21px] bg-messages rounded-[9.98px] ml-[11px] mt-[16.89px] focus:outline-none text-gray-500 pl-[41px] text-[11px] font-[500] leading-[13.31px]"
              placeholder="Type a message"
              onKeyDown={handleKeyPress}
              value={message}
              onChange={handleMessageChange}
            />
            <div className="flex items-center justify-center space-x-1 mt-3 ml-[6.1px]">
              <img
                src={media.media_upload}
                alt="media upload"
                className="hover:cursor-pointer"
              />
              <img
                src={media.voice_note}
                alt="voice_note"
                className="hover:cursor-pointer"
              />
              <div
                className=" bg-admin-secondary w-[40px] h-[40px] rounded-full flex items-center justify-center hover:cursor-pointer"
                onClick={sendMessage}
              >
                <img
                  src={media.send_message}
                  alt="send message"
                  className=" "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};
