import React, { useState } from "react";
import Typist from "react-typist";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TerminalInput from "../components/terminal-input/terminal-input";

import styles from "./web.module.scss";

//JTM "Terminal" display
// - style a hidden text area for the last line and allow for
//     Enter + 'Y' to programmatically navigate to Contact page
//     Enter + 'N' to display a second command
// - remove "onClick" away
// - add an easy link on the right side for "see my stuff"

const typistConfig = {
    avgTypingDelay: 45,
    className: styles.typistContainer,
    cursor: {
        hideWhenDone: true,
        hideWhenDoneDelay: 0,
    },
};

function autofocusInput(ref) {
    ref.current.focus();
}

const WebPage = () => {
    const [shouldShowSeeStuff, toggleShowSeeStuff] = useState(false);
    const [shouldShowTheater, toggleShowTheater] = useState(false);
    const [shouldShowThankYou, toggleShowThankYou] = useState(false);
    const hireMeInput = React.createRef();
    const seeWebInput = React.createRef();
    const seeTheaterInput = React.createRef();

    return (
        <Layout>
            <SEO title="Web" keywords={["gatsby", "application", "react"]} />
            <div class={styles.terminalContainer}>
                Maybe you'd like to...
                <br />
                <Typist
                    {...typistConfig}
                    onTypingDone={() => autofocusInput(hireMeInput)}
                    startDelay={350}
                >
                    <span onClick={toggleShowSeeStuff}>Hire Me? (y|n)</span>
                </Typist>
                <TerminalInput
                    id="hireMeInput"
                    maxLength={1}
                    name="hireMeInput"
                    ref={hireMeInput}
                />
                {shouldShowSeeStuff && (
                    <div>
                        <Typist
                            {...typistConfig}
                            onTypingDone={() => autofocusInput(seeWebInput)}
                        >
                            <span onClick={toggleShowTheater}>
                                See my stuff? (y|n)
                            </span>
                        </Typist>
                        <TerminalInput
                            id="seeWebInput"
                            maxLength={1}
                            name="seeWebInput"
                            ref={seeWebInput}
                        />
                    </div>
                )}
                {shouldShowTheater && (
                    <div>
                        <Typist
                            {...typistConfig}
                            onTypingDone={() => autofocusInput(seeTheaterInput)}
                        >
                            <span onClick={toggleShowThankYou}>
                                Discover newfound interest in theater? (y|n)
                            </span>
                        </Typist>
                        <TerminalInput
                            id="seeTheaterInput"
                            maxLength={1}
                            name="seeTheaterInput"
                            ref={seeTheaterInput}
                        />
                    </div>
                )}
                {shouldShowThankYou && (
                    <Typist {...typistConfig}>Thanks for visiting! :)</Typist>
                )}
            </div>
        </Layout>
    );
};

export default WebPage;
