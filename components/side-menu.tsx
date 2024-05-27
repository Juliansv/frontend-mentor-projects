import Link from "next/link";

const SideMenu = () => {
  return (
    <section className="w-1/5 border-r-2">
      <div className="flex flex-col gap-4 py-6">
        <nav>
          <ul className="flex flex-col gap-2">
            <Link href="/project-1" className="h-20 flex px-4 bg-slate-200 group dark:bg-black">
              <span className="h-fit my-auto text-xl group-hover:scale-105">Project 1</span>
            </Link>
            <li className="h-20 border-2">
              <a href="/projects/2">Project 2</a>
            </li>
            <li className="h-20 border-2">
              <a href="/projects/3">Project 3</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default SideMenu;
