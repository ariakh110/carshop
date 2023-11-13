import Image from "next/image";
import Link from "next/link";

import CustomButton from "./CustomButton";
function Navbar() {
  function handleSignInClick() {
    console.log("sign in click ");
    
  }
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          
        </Link>
        <CustomButton
            type="button"
            name="home nav btn signin"
            title="Sign In"
            isActive={true}
            // onClick={handleSignInClick}
            classStyle="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-2 px-4 rounded-full"
          /> 
      </nav>
    </header>
  );
}

export default Navbar;
