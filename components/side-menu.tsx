import Link from "next/link";

const SideMenu = () => {
  return (
    <section className="w-1/5 border-r-2">
      <div className="flex flex-col gap-4 py-6">
        <nav>
          <Link href="/" className="text-2xl font-bold flex justify-center pb-4 hover:scale-105 hover:text-slate-700">HOME</Link>
          <ul className="flex flex-col gap-2">
            <Link href="/card-details" className="h-20 flex px-4 bg-slate-200 group dark:bg-black">
              <span className="h-fit my-auto text-xl group-hover:scale-105">Card Details</span>
            </Link>
            <Link href="/results-component" className="h-20 flex px-4 bg-slate-200 group dark:bg-black">
              <span className="h-fit my-auto text-xl group-hover:scale-105">Results Component</span>
            </Link>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default SideMenu;
