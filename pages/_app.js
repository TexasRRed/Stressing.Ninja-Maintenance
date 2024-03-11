import Footer from "@/components/footer";
import Nav from "@/components/nav";
import "@/styles/globals.css";
// import AOS from "aos";
// import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         AOS.init();
    //     }

    //     if (typeof window !== "undefined") {
    //         AOS.refresh();
    //     }
    // }, []);

    return (
        <>
            <div className="flex flex-col min-h-screen bg-[#191919]">
                <Nav />
                <main className="flex-grow">
                    <Component {...pageProps} />
                </main>
                <Footer className="mt-auto" />
            </div>
        </>
    );
}
