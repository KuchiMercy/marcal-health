import {BiSearchAlt2} from "react-icons/bi";
import {MdWindow} from "react-icons/md"

const ExploreDept = () => {
  return (
    <div>
      {/* General Div */}
      <main className=" my-4 mx-4">
        <div className="my-10 mx-5">
          <h1 className="text-2xl font-bold">Explore Our Doctors</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia.
          </p>
        </div>

        {/* Nav */}
        <nav className="flex my-3 mx-5 p-4 box-border bg-white shadow-md justify-between md:items-center flex-wrap py-2 px-5 ">
            <div className="hidden bg-secondary rounded px-3 text-sm md:inline-block">All</div>
            <div className="flex items-center">
                <div className="flex items-center p-2">
                    <input className="border-2 border-secondary outline-none rounded-lg" type="text" />
                     <button className="text-white bg-secondary rounded px-4 py-1 -translate-x-12"><BiSearchAlt2 /></button>
                </div>
                 <div className="hidden text-secondary text-xl md:inline-block">< MdWindow /></div>
            </div>
            
        </nav>
      </main>
    </div>
  );
};

export default ExploreDept;
