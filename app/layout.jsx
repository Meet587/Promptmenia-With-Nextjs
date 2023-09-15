import Nav from "@components/Nav";
import "../styles/globals.css";

export const meatdata = {
  title: "Promptopia",
  description: "discover and share AI propmts",
};

const RootLayout = ({children}) => {
  return (
    <>
      <html lang="en">
        <body>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}</main>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
