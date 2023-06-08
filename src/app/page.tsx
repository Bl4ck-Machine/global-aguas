
import Logo from "./components/Logo";
import Footer from "./dashboard/components/footer/Footer";
import Login from "./dashboard/components/login/Login";

export default function Home() {

  return (
    <>
      <div className="flex flex-col ">
        <div className="flex-1 text-zinc-100 ">
          <div className="text-center pb-72 pt-24 bg-[url('../../public/images/login.png')] bg-no-repeat bg-cover bg-bottom">
            <div className="font-extrabold text-5xl">
              Global Águas
            </div>
            <div className="font-extrabold text-xl">
              _______
              <p>Portal Administrativo</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex text-zinc-500 justify-center -mt-72 p-12 ">
          <div className="pb-48 p-10 mt-0 rounded-lg bg-white w-96 me-4 ms-4 shadow-lg">
            <div className="">
              <Logo />
            </div>
            <div>
              <Login />
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}
