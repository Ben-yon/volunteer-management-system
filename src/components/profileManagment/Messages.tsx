/* eslint-disable @typescript-eslint/no-unused-vars */
import { media } from "../../assets";
import { useEffect, useState, KeyboardEvent, useCallback } from "react";

import * as signalR from "@microsoft/signalr";
import { ChatMessage } from "../../interfaces/ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { users } from "../../features/users/userActions";
import { UserDetails } from "../../interfaces/AuthInterface";
import { toast } from "react-toastify";

export const Messages = () => {
  const [connection, setConnection] = useState<signalR.HubConnection | null>(
    null
  );

  const { loading, success, userInfo, error } = useSelector(
    (state: RootState) => state.usersSlice
  );
  const [messageUsers, setMessageUsers] = useState<Array<UserDetails>>();

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const fetchUsers = useCallback(() => {
    dispatch(users());
  }, [dispatch]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    if (success) {
      //@ts-expect-error
      setMessageUsers(userInfo);
    }
    if (loading){
      toast.loading("Message Users Loading")
    }
    if (error) {
      toast.error("User fetch was not successful");
    }
  }, [userInfo, success, error]);

  const [, setMessages] = useState<ChatMessage[]>([]);
  const [message, setMessage] = useState<string>("");
  const [userId] = useState<string>("");
  const [recipientId] = useState<string>("");

  const connectionURL = import.meta.env.VITE_BACKEND_SERVER_BASE_URL;

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${connectionURL}/HubMessages`)
      .withAutomaticReconnect()
      .build();
    setConnection(newConnection);
  }, [connectionURL]);

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
                userId,
                recipientId: " ",
                message,
                timestamp: new Date().toISOString(),
              },
            ]);
          });
        })
        .catch((e) => console.log("Connection failed: ", e));
    }
  }, [connection]);

  const sendMessage = async () => {
    if (
      connection &&
      connection.state === signalR.HubConnectionState.Connected
    ) {
      try {
        await connection.send("SendMessage", userId, recipientId, message);
        setMessages((messages) => [
          ...messages,
          { userId, recipientId, message, timestamp: new Date().toISOString() },
        ]);
        setMessage(" ");
      } catch (e) {
        console.error(e);
      }
    } else {
      alert("No connection to server!");
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

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
              type="search"
              className="w-[261px] h-[45px] rounded-[13px] bg-message-hover font-[600] text-[15px] leading-[18.15px] pl-[54px] relative top-[32px] ml-[33px] text-[#78000080] placeholder-[#78000080]"
              placeholder="Search"
            />
            <img
              src={media.compose}
              className="w-[38px] h-[38px] relative top-[37px] ml-[34px]"
            />
          </div>
          <div className="flex flex-col items-start space-y-[16px] ml-[33px] overflow-auto">
            {messageUsers?.map((user) => (
              <div className="flex items-center justify-center space-x-[15px] hover:cursor-pointer hover:bg-message-hover">
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
                <span className="text-[13px] font-[600] text-admin-secondary leading-[15.73px]">{user?.firstName} {user?.lastName}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-[828px] h-[840px] rounded-[13px] border-[0.5px] shadow-[0px_0px_7.599999904632568px_0px_#00000012]">
          <div className="flex items-center space-x-7">
            <img
              src=""
              alt="user-image"
              className="w-[65.8px] h-[65.8px] rounded-full relative top-[24px] left-[39px]"
            />
            <div className="relative top-[31px] left-[28.2px] flex flex-col">
              <p className="font-[600] text-[22.51px] leading-[27.24px] text-admin-secondary">
                User or Group Name
              </p>
              <span className="italic text-[13px] font-[400] leading-[15.73px]">
                Typing
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center w-[806px] h-[659px] bg-messages rounded-[17px] mt-[41px] ml-[11px]"></div>
          <div className="flex items-center space-x-1">
            <input
              className="w-[687px] h-[37.21px] bg-messages rounded-[9.98px] ml-[11px] mt-[16.89px] focus:outline-none text-gray-500 pl-[41px] text-[11px] font-[500] leading-[13.31px]"
              placeholder="Type a message"
              onKeyDown={handleKeyPress}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
    </div>
  );
};
