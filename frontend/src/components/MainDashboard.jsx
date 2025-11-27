import React from "react";
import {SidebarWidth} from "./Sidebar";
import {TopbarHeight} from "./Topbar";
import {Button, Card} from "pixel-retroui";

const MainDashboard = (props) => {
    return (
        <div style={{marginLeft: SidebarWidth}}>
            <div className="text-6xl p-10">{props.children}</div>
            <div
                className="h-40
    flex
    justify-evenly
    items-center"
            >
                <DisBtns label="Misinformation" value="6"/>
                <DisBtns label="Warnings" value="7"/>
                <DisBtns label="False Likelihood" value="56.8%"/>
            </div>

            {/* GRID LAYOUT */}
            <div
                className="grid
    grid-cols-10
    gap-
    space-y-[-10px]
    ">
                <div className="col-span-10">
                    <GradDiv>
                        <div>
                            <h1 className="text-xl font-semibold">KEYWORDS</h1>
                            <h2>
                                NATURAL, TRUTH, MEDICINE, NATURE, THROUGH, VACCINES, FREEDOM
                            </h2>
                            <h1 className="uppercase  text-4xl mt-5"><GradText_2
                                label="7 suspicious claims detected:  "/></h1>
                            <div className="flex flex-wrap gap-2 mt-5 space-y-4 justify-center ">
                                <DisBtns_2 label="miracle cure"/>
                                <DisBtns_2 label="cure cancer"/>
                                <DisBtns_2 label="5G causes covid"/>
                                <DisBtns_2 label="chemtrails"/>
                                <DisBtns_2 label="microchips vaccines"/>
                                <DisBtns_2 label="fake moon landing"/>
                                <DisBtns_2 label="deepstate"/>
                            </div>
                        </div>
                    </GradDiv>
                    <GradDivHalf>
                        <div
                            className="text-5xl mb-6 mt-2 pixel-button">
                            <h1 className="font-bold">Detailed Explainations</h1>
                        </div>
                        <div>
                            <GradText label="Recent Articles with High Misinformation"/>
                            Another Gradient Div

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, voluptatum debitis delectus consequatur
                            aperiam non saepe vitae minus obcaecati ipsam. Inventore, illum? Quidem, modi. Doloribus cumque
                            aperiam amet inventore ipsa.
                            Lorem ipsum dolor sit amet consectetur adipisici
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio quidem reprehenderit ipsa
                            est nemo officiis provident, nulla quam tempore? Consequatur voluptate, excepturi consectetur autem
                            alias impedit porro itaque vitae!

                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, ipsum eius ad a similique
                            repudiandae sequi totam, dolores dolorem earum dolore provident necessitatibus quasi natus,
                            architecto quos! At, amet! Error!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In id aspernatur neque, optio aperiam
                            ipsam, vel placeat obcaecati nesciunt minus repudiandae eaque, corporis facilis rerum omnis tenetur
                            iusto fugiat quos.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolor nam cum praesentium itaque ea
                            nemo inventore dolorem illo recusandae, id reiciendis ipsam, quasi vero debitis impedit alias
                            aliquid. Similique.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, voluptatum debitis delectus consequatur
                            aperiam non saepe vitae minus obcaecati ipsam. Inventore, illum? Quidem, modi. Doloribus cumque
                            aperiam amet inventore ipsa.
                            Lorem ipsum dolor sit amet consectetur adipisici
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio quidem reprehenderit ipsa
                            est nemo officiis provident, nulla quam tempore? Consequatur voluptate, excepturi consectetur autem
                            alias impedit porro itaque vitae!

                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, ipsum eius ad a similique
                            repudiandae sequi totam, dolores dolorem earum dolore provident necessitatibus quasi natus,
                            architecto quos! At, amet! Error!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In id aspernatur neque, optio aperiam
                            ipsam, vel placeat obcaecati nesciunt minus repudiandae eaque, corporis facilis rerum omnis tenetur
                            iusto fugiat quos.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolor nam cum praesentium itaque ea
                            nemo inventore dolorem illo recusandae, id reiciendis ipsam, quasi vero debitis impedit alias
                            aliquid. Similique.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, voluptatum debitis delectus consequatur
                            aperiam non saepe vitae minus obcaecati ipsam. Inventore, illum? Quidem, modi. Doloribus cumque
                            aperiam amet inventore ipsa.
                            Lorem ipsum dolor sit amet consectetur adipisici
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio quidem reprehenderit ipsa
                            est nemo officiis provident, nulla quam tempore? Consequatur voluptate, excepturi consectetur autem
                            alias impedit porro itaque vitae!

                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, ipsum eius ad a similique
                            repudiandae sequi totam, dolores dolorem earum dolore provident necessitatibus quasi natus,
                            architecto quos! At, amet! Error!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In id aspernatur neque, optio aperiam
                            ipsam, vel placeat obcaecati nesciunt minus repudiandae eaque, corporis facilis rerum omnis tenetur
                            iusto fugiat quos.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolor nam cum praesentium itaque ea
                            nemo inventore dolorem illo recusandae, id reiciendis ipsam, quasi vero debitis impedit alias
                            aliquid. Similique.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, voluptatum debitis delectus consequatur
                            aperiam non saepe vitae minus obcaecati ipsam. Inventore, illum? Quidem, modi. Doloribus cumque
                            aperiam amet inventore ipsa.
                            Lorem ipsum dolor sit amet consectetur adipisici
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio quidem reprehenderit ipsa
                            est nemo officiis provident, nulla quam tempore? Consequatur voluptate, excepturi consectetur autem
                            alias impedit porro itaque vitae!

                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, ipsum eius ad a similique
                            repudiandae sequi totam, dolores dolorem earum dolore provident necessitatibus quasi natus,
                            architecto quos! At, amet! Error!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In id aspernatur neque, optio aperiam
                            ipsam, vel placeat obcaecati nesciunt minus repudiandae eaque, corporis facilis rerum omnis tenetur
                            iusto fugiat quos.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolor nam cum praesentium itaque ea
                            nemo inventore dolorem illo recusandae, id reiciendis ipsam, quasi vero debitis impedit alias
                            aliquid. Similique.
                        </div>
                    </GradDivHalf>
                    <GradDivHalf>
                        <div
                            className="text-4xl mb-6"
                        >
                            <h1 className="font-bold text-5xl">Sources</h1>
                            <GradText_2 label="Certified Sources only "/>
                        </div>
                        <div className="text-xl">
                            Another Gradient Div jsajkdhahdkhadkjhadka

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, voluptatum debitis delectus consequatur
                            aperiam non saepe vitae minus obcaecati ipsam. Inventore, illum? Quidem, modi. Doloribus cumque
                            aperiam amet inventore ipsa.
                            Lorem ipsum dolor sit amet consectetur adipisici
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio quidem reprehenderit ipsa
                            est nemo officiis provident, nulla quam tempore? Consequatur voluptate, excepturi consectetur autem
                            alias impedit porro itaque vitae!

                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, ipsum eius ad a similique
                            repudiandae sequi totam, dolores dolorem earum dolore provident necessitatibus quasi natus,
                            architecto quos! At, amet! Error!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In id aspernatur neque, optio aperiam
                            ipsam, vel placeat obcaecati nesciunt minus repudiandae eaque, corporis facilis rerum omnis tenetur
                            iusto fugiat quos.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolor nam cum praesentium itaque ea
                            nemo inventore dolorem illo recusandae, id reiciendis ipsam, quasi vero debitis impedit alias
                            aliquid. Similique.
                        </div>
                    </GradDivHalf>
                </div>
            </div>
        </div>

    );
};


// Functions

const DisBtns_Pixels = (props) => {
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
            <Card
                bg="#000000"
                textColor="#fea239"
                borderColor="#df7716"
                shadowColor="#781212"

                className="
        "
            >
                <div
                    className="
          disBtn_Child
            
            "
                >
                    <GradText label={props.label}/>
                </div>
            </Card>
            <p className="gradText">
                {props.value}
            </p>
        </div>
    );
};


const DisBtns_2_Pixels = (props) => {
    return (

        <Card
            bg="#000000"
            textColor="#fea239"
            borderColor="#df7716"
            shadowColor="#781212"

            style={{width: "450px "}}
            className=" text-center
        "
        >
            <div
                className=" text-2xl
           "
            >
                <GradText label={props.label}/>
            </div>
        </Card>
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
                className="text-3xl pixel-button
        "
            >
                <div
                    className="py-2 px-20
            
            "
                >
                    <GradText label={props.label}/>
                </div>
            </div>
            <p className="gradText">
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
                className="
        disBtn_2_Parent
        "
            >
                <div
                    className=" disBtn_2_Child
           "
                >
                    <GradText label={props.label}/>
                </div>
            </div>
        </div>
    );
};

const GradText = (props) => {
    return (
        <p className="gradText">
            {props.label}
        </p>
    );
};

const GradText_2 = (props) => {
    return (
        <p className="gradText_2">
            {props.label}
        </p>
    );
};

const GradDiv = (props) => {
    return (
        <div
            className="gradDiv "
        >
            {props.children}
        </div>
    );
};

const GradDivHalf = (props) => {
    return (
        <div
            className="gradDivHalf pixel-button text-xl leading-[-10]"
        >
            {props.children}
        </div>
    );
};

export default MainDashboard;
