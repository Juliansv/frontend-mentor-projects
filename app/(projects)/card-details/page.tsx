import Image from "next/image";
import cardFront from "./images/bg-card-front.png";
import cardBack from "./images/bg-card-back.png";
import cardLogo from "./images/card-logo.svg";

const CardDetails = () => {
  return (
    <div className="h-[45rem]">
      <div className="h-2/6" id="cards-section">
        <div className="relative">
          <Image
            src={cardBack}
            alt="card-back"
            className="w-72 absolute right-0 mr-4 mt-6"
            width={300}
            height={300}
          />
          <span className="absolute z-10 top-[94px] right-[50px] text-white text-xs">
            000
          </span>
        </div>
        <div className="relative">
          <Image
            src={cardFront}
            alt="card-front"
            className="w-72 absolute top-28 left-4"
            width={300}
            height={300}
          />
          <Image
            src={cardLogo}
            alt="card-logo"
            className="absolute w-14 top-[123px] left-[35px]"
            height={300}
            width={300}
          />
          <span className="absolute z-10 top-[190px] left-[35px] text-white text-lg font-bold tracking-widest">
            0000 0000 0000 0000
          </span>
          <span className="absolute z-10 top-[230px] left-[35px] text-white text-[10px] font-medium tracking-widest">
            JANE APPLESEED
          </span>
          <span className="absolute z-10 top-[230px] left-[245px] text-white text-[10px] font-medium tracking-widest">
            00/00
          </span>
        </div>
      </div>

      <form
        action=""
        className="h-4/6 flex flex-col px-6 pt-20 pb-5 justify-around"
      >
        <div>
          <div className="w-44">
            <label
              id="cardholder-name"
              className="text-[#1F1A20] text-xs font-medium tracking-widest"
            >
              CARDHOLDER NAME
            </label>
          </div>
          <input
            type="text"
            id="cardholder-name"
            name="cardholder-name"
            placeholder="e.g. Jane Appleseed"
            className="border-[1px] border-[#dedddf] w-full rounded-md px-4 h-11 mt-1 font-medium text-[#8e8593]"
          />
        </div>
        <div>
          <label
            id="card-number"
            className="text-[#1F1A20] text-xs font-medium tracking-widest"
          >
            CARD NUMBER
          </label>
          <input
            type="text"
            id="card-number"
            name="card-number"
            placeholder="e.g. 1234 5678 9123 0000"
            className="border-[1px] border-[#dedddf] w-full rounded-md px-4 h-11 mt-1 font-medium text-[#8e8593]"
          />
        </div>
        <div className="flex flex-col xxs:flex-row gap-2">
          <div className="w-1/2">
            <label
              id="expiry-date"
              className="text-[#1F1A20] text-xs font-medium tracking-widest"
            >
              EXP. DATE (MM/YY)
            </label>
            <div className="flex gap-y-2 justify-between">
              <input
                type="text"
                id="expiry-date-mm"
                name="expiry-date-mm"
                placeholder="MM"
                className="border-[1px] border-[#dedddf] w-[78px] rounded-md px-4 h-11 mt-1 font-medium text-[#8e8593]"
              />
              <input
                type="text"
                id="expiry-date-yy"
                name="expiry-date-yy"
                placeholder="YY"
                className="border-[1px] border-[#dedddf] w-[78px] rounded-md px-4 h-11 mt-1 font-medium text-[#8e8593]"
              />
            </div>
          </div>
          <div className="w-1/2">
            <label
              id="cvc"
              className="text-[#1F1A20] text-xs font-medium tracking-widest"
            >
              CVC
            </label>
            <input
              type="text"
              id="cvc"
              name="cvc"
              placeholder="e.g. 123"
              className="border-[1px] border-[#dedddf] w-full rounded-md px-4 h-11 mt-1 font-medium text-[#8e8593]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#21092f] mt-4 rounded-md text-white font-bold h-11"
        >
          Confirm
        </button>
      </form>
      <div />
    </div>
  );
};

export default CardDetails;
