"use client";
import { Button } from "@/components/ui/button";
interface Props {
  isOpen: boolean;
  handleToggle: () => void;
}

const NotificationCard = ({ isOpen, handleToggle }: Props) => {
  const handleClodes = () => {
    handleToggle();
  };
  return (
    <>
      {isOpen ? (
        <main className="fixed z-[999] w-full h-screen flex items-center justify-center ">
          <div className="w-[90%] xl:w-[50%] h-[60%] xl:h-[40%]  border-[4px] border-blue-300 rounded-full overflow-hidden -mt-[20%] shadow-lg shadow-blue-700">
            <div className="flex h-full bg-white justify-end">
              <div className="w-[70%] h-full flex flex-col items-end justify-center gap-y-8">
                <div className="chat chat-end">
                  <div className="chat-bubble chat-bubble-info mb-3">
                    eto~~~
                  </div>
                  <div className="chat-bubble chat-bubble-info">
                    Only anh
                    <span className="font-bold text-xl "> Hải </span>
                    can do this function!!
                  </div>
                </div>
                <Button className="mx-auto" onClick={() => handleClodes()}>
                  All right.
                </Button>
              </div>
              <div
                className="w-[30%] h-full bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url("/images/ganyu.png")` }}
              ></div>
            </div>
          </div>
        </main>
      ) : (
        <></>
      )}
    </>
  );
};

export default NotificationCard;
