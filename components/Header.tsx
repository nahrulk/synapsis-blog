import Link from "next/link";
import { ReactNode } from "react";

type GlobalHeaderChildren = {
  children: ReactNode;
};

const Header = ({ children }: GlobalHeaderChildren) => {
  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block border-[#6DB5CF] py-8">
          <div className="md:float-left block">
            <Link href="/">
              <span className="cursor-pointer font-bold text-2xl text-black">
                Synapsis GraphQL Blog
              </span>
            </Link>
          </div>
          <div className="hidden md:float-left md:contents">
            <Link href="/">
              <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">
                CRUD Users
              </span>
            </Link>
          </div>
        </div>
      </div>

      {children}
    </>
  );
};

export default Header;
