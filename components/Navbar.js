import { BsMoon } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="bg-[#ffffff] text-[#111517] py-6 px-8 flex justify-between">
      <h1 className="font-extrabold">Where in the world?</h1>
      <div className="flex gap-2 items-center">
        <div>
          <BsMoon style={{ display: "inline" }} />
        </div>
        <div>Dark Mode</div>
      </div>
    </nav>
  );
}

export default Navbar;
