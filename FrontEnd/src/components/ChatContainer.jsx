import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const DEFAULT_AVATAR = "/avatar.png";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const renderLoading = () => (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      <MessageSkeleton />
      <MessageInput />
    </div>
  );

  const getAvatarSrc = (isOwn) =>
    isOwn ? authUser.profilePic || DEFAULT_AVATAR : selectedUser.profilePic || DEFAULT_AVATAR;

  const renderAvatar = (avatarSrc) => (
    <div className="chat-image avatar">
      <div className="size-10 rounded-full border">
        <img src={avatarSrc} alt="profile pic" />
      </div>
    </div>
  );

  const renderTime = (createdAt) => (
    <div className="chat-header mb-1">
      <time className="text-xs opacity-50 ml-1">
        {formatMessageTime(createdAt)}
      </time>
    </div>
  );

  const renderMessageBody = (message) => (
    <div className="chat-bubble flex flex-col">
      {message.image && (
        <img
          src={message.image}
          alt="Attachment"
          className="sm:max-w-[200px] rounded-md mb-2"
        />
      )}
      {message.text && <p>{message.text}</p>}
    </div>
  );

  const renderMessage = (message) => {
    const isOwn = message.senderId === authUser._id;
    const avatarSrc = getAvatarSrc(isOwn);

    return (
      <div
        key={message._id}
        className={`chat ${isOwn ? "chat-end" : "chat-start"}`}
        ref={messageEndRef}
      >
        {renderAvatar(avatarSrc)}
        {renderTime(message.createdAt)}
        {renderMessageBody(message)}
      </div>
    );
  };

  const renderMessagesList = () => (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map(renderMessage)}
    </div>
  );

  return isMessagesLoading ? (
    renderLoading()
  ) : (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      {renderMessagesList()}
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
