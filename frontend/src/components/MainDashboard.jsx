import React from "react";
import { SidebarWidth } from "./Sidebar";
import { TopbarHeight } from "./Topbar";

const MainDashboard = (props) => {
  return (
    <div style={{ marginLeft: SidebarWidth }}>
      <div className="text-6xl p-10">{props.children}</div>

      <div
        className="h-40
    flex
    justify-evenly
    items-center"
      >
        <DisBtns label="Misinformation" value="6" />
        <DisBtns label="Warnings" value="7" />
        <DisBtns label="False Likelihood" value="56.8%" />
      </div>

      <div
        className="grid
    grid-cols-10
    gap-
    space-y-[-10px]
    "
      >
        <div className="col-span-10">
          <GradDiv>
            <div>
              <h1 className="text-xl font-semibold">KEYWORDS</h1>
              <h2>
                NATURAL, TRUTH, MEDICINE, NATURE, THROUGH, VACCINES, FREEDOM
              </h2>
              <h1 className="uppercase  text-4xl mt-5"><GradText_2 label="7 suspicious claims detected:  " /></h1>
              <div className="flex flex-wrap mt-5 space-y-4 ">
                <DisBtns_2 label="miracle cure" />
                <DisBtns_2 label="cure cancer" />
                <DisBtns_2 label="5G causes covid" />
                <DisBtns_2 label="chemtrails" />
                <DisBtns_2 label="microchips vaccines" />
                <DisBtns_2 label="fake moon landing" />
                <DisBtns_2 label="deepstate" />
              </div>
            </div>
          </GradDiv>
        </div>
        <div className="col-span-6 ml-6">
          <GradDivHalf>
            <div
              className="
            text-5xl mb-6
            
            "
            >
              <h1 className="font-bold">Detailed Explainations</h1>
              
            </div>
            <div>
              <GradText label="Recent Articles with High Misinformation" />
              Another Gradient Div
            </div>
          </GradDivHalf>
        </div>
        <div className="col-span-4 mr-6">
          <GradDivHalf>
            <div
              className="
            text-4xl mb-6
            
            "
            >
              <h1 className="font-bold text-5xl">Sources</h1>
              <GradText_2  label="Certified Sources only " />
            </div>
            <div>Another Gradient Div</div>
          </GradDivHalf>
        </div>
      </div>
    </div>
  );
};

const DisBtns = (props) => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        text-6xl
        space-y-4
        "
    >
      <div
        className="flex
        mr-4
        bg-gradient-to-r from-orange-400 to-amber-950/80
        text-transparent
        p-1
        px-1
        rounded-full

        "
      >
        <div
          className="
            p-4
            text-center
            w-90
            bg-black
            rounded-full
            text-2xl
            font-bold
            "
        >
          <GradText label={props.label} />
        </div>
      </div>
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 font-bold">
        {props.value}
      </p>
    </div>
  );
};

const DisBtns_2 = (props) => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        text-6xl
        space-y-4
        "
    >
      <div
        className="flex
        mr-4
       bg-gradient-to-r from-orange-800/80 to-yellow-600
        text-transparent
        p-1
        px-1
        rounded-full

        "
      >
        <div
          className="
            p-3
            text-center
            w-83
            bg-black
            rounded-full
           bg-black
           font-semibold
            text-2xl"
        >
          <GradText label={props.label} />
        </div>
      </div>
    </div>
  );
};

const GradText = (props) => {
  return (
    <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
      {props.label}
    </p>
  );
};

const GradText_2 = (props) => {
  return (
    <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-900 font-bold">
      {props.label}
    </p>
  );
};

const GradDiv = (props) => {
  return (
    <div
      className="flex
        bg-amber-900/20
        rounded-xl
        p-8
        px-15
        m-6
        "
    >
      {props.children}
    </div>
  );
};

const GradDivHalf = (props) => {
  return (
    <div
      className="
        bg-gradient-to-r from-orange-800/10 to-amber-600/50
        rounded-xl
        p-8
        px-15
        
        "
    >
      {props.children}
    </div>
  );
};

export default MainDashboard;
