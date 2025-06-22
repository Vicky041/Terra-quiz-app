import Navbar from "../components/Navbar";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Navbar links={[
          { to: "/home", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/features", label: "Features" },
        ]}
        isUser={false}
      />
      <Hero/>
    </>
  )
}

export default Home