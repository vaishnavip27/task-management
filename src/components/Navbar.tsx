import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search bar */}
      <div className="hidden md:flex">
        <Image src="/search.png" alt="" height={14} width={14} />
        <input type="text" placeholder="Search" />
      </div>
      {/* Icons and User */}
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/announcement.png" alt="" width={20} height={20} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Vaishnavi Patil</span>
          <span className="text-[10px] text-gray-500">FrontendDev</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
