import React from 'react';
import Feed from "../components/Feed";

const Home = () => {
    return <section className={"w-full flex-center flex-col"}>
        <h1 className={"head_text text-center"}>
                <span className={"orange_gradient text-center mb-2"}>
            AI Prompts {" "}
        </span>
            <br className={"max-md:hidden"}/>
            Discover & Share
        </h1>
        <p className={"desc text-center"}>
            It is a open AI prompting tool for modern world to discover,
            create and share prompts.
        </p>

    {/*Components*/}
        <Feed/>
    </section>
}

export default Home;