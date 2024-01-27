import Logo from "../assets/Logo";
import Person from "../assets/Person";

export default function GlobalHeader() {
  return (
    <div className="w-full h-[50px] flex justify-between items-center">
      <Logo />
      <div className="flex items-center justify-center w-8 h-8 rounded-[50%] hover:bg-gray-100">
        <Person />
      </div>
    </div>
  );
}
