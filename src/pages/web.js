import React, { useState } from "react";
import { navigate } from "gatsby";
import Typist from "react-typist";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TerminalInput from "../components/terminal-input/terminal-input";

import styles from "./web.module.scss";

//JTM "Terminal" display
// - add links on the right side for explanation, everything else?

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

function submitToggleCommand(ref, onNo, onYes) {
    if (ref.current.value.toLowerCase() === "n") {
        onNo(true);
        ref.current.blur();
    } else if (ref.current.value.toLowerCase() === "y") {
        onYes();
    }
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
            <div className={styles.terminalContainer}>
                Maybe you'd like to...
                <br />
                <Typist
                    {...typistConfig}
                    onTypingDone={() => autofocusInput(hireMeInput)}
                    startDelay={350}
                >
                    Hire Me? (y|n)
                </Typist>
                <TerminalInput
                    id="hireMeInput"
                    maxLength={1}
                    name="hireMeInput"
                    onEnterKeyUp={() =>
                        submitToggleCommand(
                            hireMeInput,
                            toggleShowSeeStuff,
                            () => navigate("/contact"),
                        )
                    }
                    ref={hireMeInput}
                />
                {shouldShowSeeStuff && (
                    <div>
                        <Typist
                            {...typistConfig}
                            onTypingDone={() => autofocusInput(seeWebInput)}
                        >
                            See my stuff? (y|n)
                        </Typist>
                        <TerminalInput
                            id="seeWebInput"
                            maxLength={1}
                            name="seeWebInput"
                            onEnterKeyUp={() =>
                                submitToggleCommand(
                                    seeWebInput,
                                    toggleShowTheater,
                                    () => navigate("/web/portfolio"),
                                )
                            }
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
                            Discover newfound interest in theater? (y|n)
                        </Typist>
                        <TerminalInput
                            id="seeTheaterInput"
                            maxLength={1}
                            name="seeTheaterInput"
                            onEnterKeyUp={() =>
                                submitToggleCommand(
                                    seeTheaterInput,
                                    toggleShowThankYou,
                                    () => navigate("/theater"),
                                )
                            }
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
