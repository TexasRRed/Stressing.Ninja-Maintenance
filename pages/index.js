import StarrySky from "@/components/starSky";
import Link from "next/link";
import { LuConstruction } from "react-icons/lu";

const Home = () => {
    return (
        <>
            <StarrySky />
            <div className="text-white space-y-7 container mx-auto h-[80vh] flex flex-col justify-center items-center">
                <div>
                    <LuConstruction className="text-9xl text-center text-[#CA1551]" />
                </div>
                <div className="text-xl md:text-3xl text-center md:w-1/2">
                    We are currently under maintenance. You can reach us by
                    clicking on below button.
                </div>
                <div>
                    <Link
                        href="#"
                        className="bg-[#CA1551] py-4 px-10 rounded-xl shadow-lg"
                    >
                        CONNECT
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;
