import styles from "./homepage.module.css";

export function HomePage() {
    return (
        <main className={styles.main}>
            <div className={styles.window_wrap}>
                <div className={styles.window}>
                    <div className={styles.top_bar}>
                        <span className={styles.dot}/>
                        <span className={styles.dot}/>
                        <span className={styles.dot}/>
                    </div>
                    <div className={styles.content}>
                        {/* Intro header */}
                        <h1>hi, i'm jasmine</h1>

                        <hr></hr>

                        {/* Intro paragraph*/}
                        <p>I'm a first-year student studying <b>CS + Stats</b> at the <b>University of Toronto</b>. 
                            I'm interested in exploring all that the field of tech has to offer, especially software development and data science!
                            Outside of school, I'm a restaurant enthusiast, crochet hobbyist, reader, and proud cat parent ✧/ᐠ-ꞈ-ᐟ\.
                            Feel free to reach out if you have any questions or want to chat!
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact */}
            <section className={styles.contact}>
                <h2 className={styles.contactHeading}>get in touch!</h2>
                <div className={styles.contactBody}>
                    <svg fill="#364fa7" height="8.75rem" width="8.75rem" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 465 465">
                        <g>
                            <path d="M221.5,372.089c4.142,0,7.5-3.357,7.5-7.5V197.5h33.5c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5H229v-55h181v55H292.5c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5H410v167.089c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5V120c0-4.143-3.358-7.5-7.5-7.5h-196c-4.142,0-7.5,3.357-7.5,7.5v244.589C214,368.731,217.358,372.089,221.5,372.089z"/>
                            <path d="M377.5,222.5h-115c-4.142,0-7.5,3.357-7.5,7.5v76.225c0,4.143,3.358,7.5,7.5,7.5h115c4.142,0,7.5-3.357,7.5-7.5V230C385,225.857,381.642,222.5,377.5,222.5z M370,298.725H270V237.5h100V298.725z"/>
                            <path d="M370.5,0h-276C42.393,0,0,42.393,0,94.5v300.089V457.5c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-55.411h159V457.5c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-55.411h261V457.5c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-62.911V94.5C465,42.393,422.607,0,370.5,0z M370.5,15c43.836,0,79.5,35.663,79.5,79.5v292.589H189V94.5c0-33.322-17.337-62.669-43.463-79.5H370.5z M15,94.5C15,50.663,50.664,15,94.5,15S174,50.663,174,94.5v292.589H15V94.5z"/>
                            <path d="M278.001,256.001l37.5,28.112c1.333,0.999,2.916,1.499,4.499,1.499s3.166-0.5,4.499-1.499l37.5-28.112c3.314-2.484,3.987-7.186,1.502-10.5c-2.485-3.313-7.187-3.986-10.5-1.502L320,268.739l-33.001-24.74c-3.314-2.486-8.015-1.812-10.5,1.502C274.015,248.815,274.687,253.517,278.001,256.001z"/>
                        </g>
                    </svg>
                <div className={styles.contactBox}>
                    <div className={styles.contactLinks}>
                        <a href="mailto:jasmine.hy.chen10@gmail.com" className={styles.contactLink}>
                            <svg width="1.75rem" height="1.75rem" viewBox="0 0 24 24" stroke="#605f5f" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2"/>
                            <path d="M2 7l8.97 5.7a1.94 1.94 0 0 0 2.06 0L22 7"/>
                            </svg>
                            jasmine.hy.chen10@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/jasmine-chen-474275398/" className={styles.contactLink}>
                            <svg style={{ flexShrink: 0, minWidth: "1.75rem", minHeight: "1.75rem" }} height="1.75rem" width="1.75rem" viewBox="0 0 382 382" fill="#0077B5" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
                            C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
                            H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
                            c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
                            s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
                            c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
                            c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
                            c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
                            L341.91,330.654L341.91,330.654z"/>
                            </svg>
                            linkedin.com/in/jasmine-chen-474275398/
                        </a>
                        <a href="https://github.com/J4sm1neC" className={styles.contactLink}>
                            <svg width="1.75rem" height="1.75rem" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                            github.com/J4sm1neC
                        </a>
                    </div>
                </div>
                </div>
            </section>
        </main>
    );
}