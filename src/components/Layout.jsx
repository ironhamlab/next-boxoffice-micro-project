import Footer from "./Footer";
import Header from "./Header";
import "@/app/globals.css"

export default function Layout({children}) {
    return (
        <>
            <div className="content-row">
                <Header />
                {children}
                <Footer/>
            </div>
        </>
    )
}