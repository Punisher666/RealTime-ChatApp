import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const DEFAULT_AVATAR = "/avatar.png";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) {
    return <SidebarSkeleton />;
  }

  const getAvatarSrc = (user) => user.profilePic || DEFAULT_AVATAR;
  const isUserOnline = (user) => onlineUsers.includes(user._id);
  const handleSelectUser = (user) => setSelectedUser(user);

  const renderHeader = () => (
    <div className="border-b border-base-300 w-full p-5">
      <div className="flex items-center gap-2">
        <Users className="size-6" />
        <span className="font-medium hidden lg:block">Contacts</span>
      </div>
      {renderFilterToggle()}
    </div>
  );

  const renderFilterToggle = () => (
    <div className="mt-3 hidden lg:flex items-center gap-2">
      <label className="cursor-pointer flex items-center gap-2">
        <input
          type="checkbox"
          checked={showOnlineOnly}
          onChange={(e) => setShowOnlineOnly(e.target.checked)}
          className="checkbox checkbox-sm"
        />
        <span className="text-sm">Show online only</span>
      </label>
      <span className="text-xs text-zinc-500">({onlineUsers.length - 1} online)</span>
    </div>
  );

  const renderUserButton = (user) => (
    <button
      key={user._id}
      onClick={() => handleSelectUser(user)}
      className={`
        w-full p-3 flex items-center gap-3
        hover:bg-base-300 transition-colors
        ${selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""}
      `}
    >
      <div className="relative mx-auto lg:mx-0">
        <img
          src={getAvatarSrc(user)}
          alt={user.fullName}
          className="size-12 object-cover rounded-full"
        />
        {isUserOnline(user) && (
          <span
            className="absolute bottom-0 right-0 size-3 bg-green-500 
            rounded-full ring-2 ring-zinc-900"
          />
        )}
      </div>

      <div className="hidden lg:block text-left min-w-0">
        <div className="font-medium truncate">{user.fullName}</div>
        <div className="text-sm text-zinc-400">
          {isUserOnline(user) ? "Online" : "Offline"}
        </div>
      </div>
    </button>
  );

  const renderUsersList = () => (
    <div className="overflow-y-auto w-full py-3">
      {filteredUsers.map(renderUserButton)}
      {filteredUsers.length === 0 && renderNoUsers()}
    </div>
  );

  const renderNoUsers = () => (
    <div className="text-center text-zinc-500 py-4">No users found</div>
  );

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
      {renderHeader()}
      {renderUsersList()}
    </aside>
  );
};

export default Sidebar;
