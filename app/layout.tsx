import '@styles/global.css';
import Nav from "../components/Nav";

export const metadata = {
    title: "Prompts Web",
    description: "Discover and share the AI Prompts"
}
const Layout = ({children}) => {
    return         <html lang="en">
    <body>
    <div className={"main"}>
        <div className={"gradient"}/>
    </div>

    <main className={"app"}>
        <Nav/>
        {children}
    </main>
    </body>
    </html>
}

export default Layout;