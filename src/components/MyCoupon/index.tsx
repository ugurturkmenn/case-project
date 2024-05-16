import { BasketContext } from "../../context";
import { useContext, useState } from "react";
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import { IoIosSave } from "@react-icons/all-files/io/IoIosSave";
import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";

const MyCoupon = () => {
  const {
    basket,
    removeMatchFromBasket,
    calculateBasket,
    amountOfCoupon,
    setMinPrice,
    minPrice,
  } = useContext(BasketContext);

  const [isOpenBasket, setIsOpenBasket] = useState<boolean>(false);

  const handleAmount = (value) => {
    setMinPrice(value);
  };

  return (
    <>
      <div
        className={`w-[100%] lg:w-[28%] h-auto cursor-pointer select-none duration-500 flex justify-end fixed z-50 overflow-y-auto right-0 bottom-0 ${isOpenBasket && " h-full lg:h-auto lg:max-h-[60%]"}`}
      >
        <div className="w-full h-auto bg-[#0E2520] rounded-t-md text-[#fff] shadow-md">
          <div
            onClick={() => setIsOpenBasket(!isOpenBasket)}
            className={`w-full h-16 flex justify-center items-center relative border-b-[1px] border-[#151515]`}
          >
            {basket.length > 0 && (
              <span className="absolute left-4 bg-[#1F493F] rounded-md w-8 h-8 text-white flex justify-center items-center text-sm">
                {basket.length}
              </span>
            )}

            {!isOpenBasket ? (
              <FaArrowUp className="absolute right-4" />
            ) : (
              <FaArrowDown className="absolute right-4" />
            )}
            <span className=" font-extralight text-xl">Kuponum</span>
          </div>

          {isOpenBasket && (
            <div className="w-full   flex justify-end  items-center ">
              <div className="w-full bg-[#1F493F]  text-[#eee]">
                <div className="w-full h-26 overflow-y-auto mb-56 ">
                  {basket.length ? (
                    basket.map(({ betName, teams, odds, side, id }, key) => {
                      return (
                        <div
                          className="w-full h-16 text-sm flex justify-between items-center p-4 "
                          key={key}
                        >
                          <div className="flex justify-start items-center w-2/3 gap-3">
                            <FaRegTrashAlt
                              className=" text-yellow-300"
                              onClick={() => removeMatchFromBasket(id)}
                            />
                            <div className="flex flex-col">
                              <span>{teams}</span>
                              <span>
                                {betName} : {side}
                              </span>
                            </div>
                          </div>
                          <div>
                            <span>Oran: {odds}</span>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div
                      data-testid="basket-empty"
                      className="w-full h-24 flex justify-center items-center"
                    >
                      Kuponunuz henüz boş
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full lg:w-[28%] p-4 h-56  bg-[#0E2520] text-[#eee] text-sm shadow-lg  fixed bottom-0 flex items-center flex-col">
                <div className="w-full h-auto flex justify-between p-2">
                  <label>Kupon Bedeli:</label>
                  <select
                    onChange={(e) => handleAmount(e.target.value)}
                    className="w-1/3 text-center bg-black p-2"
                    name="amount"
                    id="amount"
                    value={minPrice}
                  >
                    {amountOfCoupon.map((item) => (
                      <option key={item} value={item}>
                        {item} TL
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full h-auto flex justify-between p-2">
                  <label>Toplam Oran:</label>
                  <span>{calculateBasket.multipliedOdds?.toFixed(2)}</span>
                </div>
                <div className="w-full h-auto flex justify-between p-2">
                  <label>Maksimum Kazanç</label>
                  <span>{calculateBasket.maxBetWin?.toFixed(2)} TL</span>
                </div>

                <div className="w-full h-auto flex justify-end cursor-pointer mt-5 ">
                  <span className="cursor-pointer w-auto py-1 px-5 rounded-md bg-[#14532D] text-white text-xl mr-2 flex justify-center items-center hover:bg-[#1a4d2f]">
                    <IoIosSave />
                  </span>

                  <button
                    disabled={
                      basket.length < Number(basket[0]?.mbs) || !basket.length
                    }
                    className="w-auto cursor-pointer py-2 px-6 rounded-md bg-yellow-300 text-[#070707] font-extralight hover:bg-yellow-200 disabled:bg-[#4a4a4a]"
                  >
                    Hemen Oyna
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyCoupon;
