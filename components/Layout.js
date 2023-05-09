import Navbar from "./Navbar";
import Image from 'next/image'
// import Footer from "./Footer";

export default function Layout({ props, children }) {
    return (
        <div className="w-full min-h-screen">
            <div className="w-full h-full bg-black/60 -z-10 fixed">
            </div>

            <div className="min-h-screen flex flex-col md:px-[10%] lg:px-[15%] 2xl:px-[20%] 4xl:px-[25%]">
                <Navbar page={props.navPage} />
                <main className="flex-grow p-8 md:px-0">
                    {children}
                </main>
            </div>
            {/* <Footer custom={'border-t-2'}/> */}
        </div>
    );
}
