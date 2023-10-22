import { useDeferredValue, useState } from "react";
import UpdateListComponent from "./UpdatesList";
import IllustrationDesktop from "./IllustrationDesktop";
import useScreenSize from "../hooks/useScreenSize";
import IllustrtionMobile from "./IllustrationMobile";
import IconSucces from "./IconSucess";

const NewsLetter = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);

  const [email, setEmail] = useState("@");
  let isEmailValid = true;

  const defferedEmailValue = useDeferredValue(email);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  if (!defferedEmailValue.includes("@")) {
    isEmailValid = false;
  }

  const screenSize = useScreenSize();

  return (
    //Container
    <div className="relative w-screen min-h-screen flex overflow-hidden sm:items-center sm:justify-center bg-slate-700">
      {/* Card-Container */}
      <div className="w-full flex flex-col-reverse items-center justify-center bg-white rounded-xl shadow-lg overflow-hidden sm:p-2 sm:w-max sm:min-h-max sm:flex-row sm:gap-4">
        <section className="w-full max-w-md h-max flex flex-col gap-3 p-5 sm:p-10 sm:w-max">
          <h2 className="text-[50px] text-[#252541] text-justify font-bold">
            Stay updated!
          </h2>
          <p className="text-base text-[#36384e] font-semibold">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <section className="flex flex-col gap-2 mt-3">
            <UpdateListComponent
              content={"Product discovery and building what matters"}
            />
            <UpdateListComponent
              content={"Measuring to ensure updates are a success"}
            />
            <UpdateListComponent content={"And much more!"} />
          </section>

          <section className="flex flex-col gap-5 w-full mt-4">
            <section className="flex flex-col gap-2">
              <span className="flex justify-between items-center">
                <p className="text-sm text-[#252541] font-bold">
                  Email address
                </p>
                <p
                  className={`text-sm text-[#ff6257] ${
                    !isEmailValid ? "visible" : "hidden"
                  }`}
                >
                  Valid email required
                </p>
              </span>
              <input
                type="email"
                required
                className={`outline outline-slate-200 p-3 rounded-md  ${
                  !isEmailValid
                    ? "bg-[#ffa6a0] placeholder:text-[#ff6257]"
                    : "placeholder:text-slate-200"
                }`}
                placeholder="email@company.com"
                value={email}
                onChange={handleEmailChange}
              />
            </section>
            <button
              className="p-3 flex items-center justify-center rounded-md bg-[#252541] text-white text-lg hover:bg-gradient-to-r hover:from-[#ff6257] hover:to-[#ffa500] hover:delay-75 hover:shadow-lg hover:shadow-inherit"
              onClick={() => setOpenModal(true)}
            >
              Subscribe to monthly newsletter
            </button>
          </section>
        </section>
        <section className="w-full h-max rounded-b-xl sm:w-max sm:m-2">
          {screenSize.width <= 375 ? (
            <IllustrtionMobile />
          ) : (
            <IllustrationDesktop />
          )}
        </section>
      </div>
      <ThanksModal
        open={openModal}
        handleCloseModal={handleCloseModal}
        email={email}
      />
    </div>
  );
};

const ThanksModal = ({ open, email, handleCloseModal }) => {
  return (
    // Wrapper
    <div
      className={`absolute z-10 w-screen h-screen bg-slate-700 flex items-center justify-center ${
        open ? "visible" : "hidden"
      }`}
      onClick={handleCloseModal}
    >
      <div className="w-full h-full bg-white flex flex-col justify-between  gap-3 p-8 sm:max-w-[400px] sm:rounded-3xl sm:h-max">
        <section className="flex flex-col gap-3">
          <IconSucces />
          <h3 className="text-5xl text-[#252541] font-bold">
            Thanks for subscribing!
          </h3>
          <p className="text-base text-[#36384e]">
            A confirmation email has been sent to 
            <span className="font-bold"> {email}</span>. Please open it and click
            the button inside to confirm your subscription.
          </p>
        </section>

        <button
          className="p-3 flex items-center justify-center rounded-md bg-[#252541] text-white text-lg hover:bg-gradient-to-r hover:from-[#ff6257] hover:to-[#ffa500] hover:delay-75 hover:shadow-lg hover:shadow-inherit"
          onClick={handleCloseModal}
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
