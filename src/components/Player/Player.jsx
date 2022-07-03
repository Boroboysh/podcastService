import React from "react";
import styles from './player.module.css'

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Play"
        }
        this.playPause = this.playPause.bind(this)
    }

    playPause() {
        if (this.state.text === "Play") {
            this.setState({text: "Pause"})
        } else {
            this.setState({text: "Play"})
        }
    }

    render() {
        return (
            <div className={styles.wrap}>
                <div className={styles.player_wrap}>
                    <section className={styles.player}>
                        <div ref={this.prevRef} className={styles.player_skip_previous}>
                            Back
                        </div>
                        <div onClick={this.playPause} className={styles.player_play_pause}>
                            {this.state.text}
                        </div>
                        <div ref={this.nextRef} className={styles.player_skip_next}>
                            Next
                        </div>
                    </section>
                </div>
                <div className={styles.progress_area_wrap}>
                    <section className={styles.progress_area}>
                        <div className={styles.progress_bar}></div>
                        <div className={styles.timer}>
                            <span className={styles.current}>0:20</span>
                            <span className={styles.current}>3:34</span>
                        </div>
                        {/*    <audio src="../../media/song1.mp3" controls></audio>*/}
                    </section>
                </div>
            </div>
        )
    }
}

export default Player