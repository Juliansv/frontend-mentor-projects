import Image from "next/image";
import IconMemory from "./images/icon-memory.svg";
import IconReaction from "./images/icon-reaction.svg";
import IconVerbal from "./images/icon-verbal.svg";
import IconVisual from "./images/icon-visual.svg";

const ResultsComponent = () => {
  return (
    <div className="bg-[#ecf2fd] xs:flex xs:relative xs:overflow-hidden xs:rounded-3xl xs:shadow-md xs:max-w-xl xs:m-auto xs:mt-32">
      <div className="bg-gradient-to-b from-[#7857ff] to-[#2e2be9] rounded-b-3xl text-center px-12 py-4 h-72 flex flex-col justify-between xs:h-auto xs:w-2/4 xs:rounded-3xl xs:justify-around">
        <h2 className="font-bold text-[#cccbfb]">Your Result</h2>
        <div className="rounded-full bg-gradient-to-b from-[#4e21ca] to-[#2421ca]/0 h-28 w-28 mx-auto flex xs:h-36 xs:w-36">
          <div className="m-auto">
            <div className="font-bold text-5xl text-gray-100 my-1">76</div>
            <div className="text-xs text-slate-400 font-semibold">of 100</div>
          </div>
        </div>
        <div className="mb-2">
          <h3 className="font-bold text-gray-100 mb-1 text-xl">Great</h3>
          <p className="text-[#cccbfb] font-medium text-xs">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <div className="p-6 xs:w-2/4">
        <h2 className="font-bold text-[#303b5a]">Summary</h2>
        <ul className="mb-4 mt-6 h-56 flex flex-col justify-between">
          <li className="flex justify-between p-4 bg-gray-200 rounded-md text-sm h-11 items-center">
            <span className="flex font-bold text-[#ff5757]">
              <Image
                width={20}
                height={20}
                src={IconReaction}
                alt="Reaction"
                className="mr-2"
              />
              Reaction
            </span>
            <span className="text-gray-500/70 flex w-14 justify-around font-bold text-sm">
              <span className="text-[#303b5a]">80</span>
              <span>/</span>100
            </span>
          </li>
          <li className="flex justify-between p-4 bg-gray-200 rounded-md text-sm h-11 items-center">
            <span className="flex font-bold text-[#ffb01f]">
              <Image
                width={20}
                height={20}
                src={IconMemory}
                alt="Memory"
                className="mr-2"
              />
              Memory
            </span>
            <span className="text-gray-500/70 flex w-14 justify-around font-bold text-sm">
              <span className="text-[#303b5a]">92</span>
              <span>/</span>100
            </span>
          </li>
          <li className="flex justify-between p-4 bg-gray-200 rounded-md text-sm h-11 items-center">
            <span className="flex font-bold text-[#00bd91]">
              <Image
                width={20}
                height={20}
                src={IconVerbal}
                alt="Verbal"
                className="mr-2"
              />
              Verbal
            </span>
            <span className="text-gray-500/70 flex w-14 justify-around font-bold text-sm">
              <span className="text-[#303b5a]">61</span>
              <span>/</span>100
            </span>
          </li>
          <li className="flex justify-between p-4 bg-gray-200 rounded-md text-sm h-11 items-center">
            <span className="flex font-bold text-[#1125d4]">
              <Image
                width={20}
                height={20}
                src={IconVisual}
                alt="Visual"
                className="mr-2"
              />
              Visual
            </span>
            <span className="text-gray-500/70 flex w-14 justify-around font-bold text-sm">
              <span className="text-[#303b5a]">72</span>
              <span>/</span>100
            </span>
          </li>
        </ul>
        <button className="bg-[#303b5a] text-white font-bold w-full rounded-full mt-2 h-10 hover:bg-gradient-to-b from-[#7857ff] to-[#2e2be9]">
          Continue
        </button>
      </div>
    </div>
  );
};

export default ResultsComponent;
