import Image from "next/image";
import bg from '../../public/background/home-background.png'
import RenderModel from "./components/RenderModel";
import AppleII from "./components/models/apple_ii";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between m-0 font-mono">
      <div className="w-full h-[90vh]">
        <RenderModel>
          <AppleII/>
        </RenderModel>
        <div className="bg-black relative bottom-8 w-fit">
          <h1>
            Apple II
          </h1>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
      

    </main>
  );
}
