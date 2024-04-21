import { Navbar, Header, Features, BuildCommunity, Footer } from "./components";

export default function App() {
  return (
    <>
      <div className="banner">
        <Navbar />
        <Header />
      </div>
      <main>
        <Features />
        <BuildCommunity />
      </main>
      <Footer />
    </>
  );
}
