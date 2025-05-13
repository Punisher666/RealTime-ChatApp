import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const DEFAULT_AVATAR = "/avatar.png";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const getAvatarSrc = () => selectedUser.profilePic || DEFAULT_AVATAR;
  const isOnline = () => onlineUsers.includes(selectedUser._id);
  const renderAvatar = () => (
    <div className="avatar">
      <div className="size-10 rounded-full relative">
        <img src={getAvatarSrc()} alt={selectedUser.fullName} />
      </div>
    </div>
  );

  const renderUserInfo = () => (
    <div>
      <h3 className="font-medium">{selectedUser.fullName}</h3>
      <p className="text-sm text-base-content/70">
        {isOnline() ? "Online" : "Offline"}
      </p>
    </div>
  );

  const renderCloseButton = () => (
    <button onClick={() => setSelectedUser(null)}>
      <X />
    </button>
  );

  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {renderAvatar()}
          {renderUserInfo()}
        </div>
        {renderCloseButton()}
      </div>
    </div>
  );
};

export default ChatHeader;
