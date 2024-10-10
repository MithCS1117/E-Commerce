import { useAppSelector } from "@/redux/hooks";
import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

interface PropsType {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setShowCart }: PropsType) => {
  const cartCount = useAppSelector((state) => state.cartReducer.length);
  return (
    <div className="pt-4 bg-white top-0 sticky">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold ">Logo</div>
          <div className="lg:flex hidden w-full max-w-[500px]">
            <input
              className="border-2 border-accent px-4 py-2 w-full "
              type="text"
              placeholder="Search for Products"
            />
            <div className="bg-accent text-white text-[26px] grid place-items-center px-4">
              <BsSearch />
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 items-center">
            <div className="md:flex hidden gap-3">
              <div className="rounded-full border-2 border-gray-300 text-gray-500 text-[32px] w-[50px] h-[50px] grid place-items-center">
                <AiOutlineUser />
              </div>
              <div>
                <p className="text-gray-500">Hello, Sign in</p>
                <p className="font-medium">Your Account</p>
              </div>
            </div>
            <div
              className="text-gray-500 text-[32px] relative cursor-pointer"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShoppingCart />
              <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">
                {cartCount}
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200 pt-4"/>
      </div>
    </div>
  );
};

export default Navbar;
