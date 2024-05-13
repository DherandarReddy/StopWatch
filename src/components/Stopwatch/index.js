import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    timerSec: 0,
  }

  ShowTimeFormat = () => {
    const {timerSec} = this.state
    const minutes = Math.floor(timerSec / 60)
    const seconds = Math.floor(timerSec % 60)
    const stringMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringMinutes}:${stringSeconds}`
  }

  StartTimer = () => {
    this.timerId = setInterval(this.inc, 1000)
  }

  StopTimer = () => {
    clearInterval(this.timerId)
  }

  ResetTimer = () => {
    this.setState({timerSec: 0})
    clearInterval(this.timerId)
  }

  inc = () => {
    this.setState(Prev => ({timerSec: Prev.timerSec + 1}))
  }

  render() {
    return (
      <div className="Whole">
        <div className="MainCont">
          <div className="SubCont">
            <h1 className="head">Stopwatch</h1>
            <div className="StopWatchCont">
              <div className="topPart">
                <img
                  className="img1"
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="stopwatch"
                />
                <p>Timer</p>
              </div>
              <h1 className="TimeShown">{this.ShowTimeFormat()}</h1>
              <div>
                <button
                  className="btn1"
                  type="button"
                  onClick={this.StartTimer}
                >
                  Start
                </button>
                <button className="btn2" type="button" onClick={this.StopTimer}>
                  Stop
                </button>
                <button
                  className="btn3"
                  type="button"
                  onClick={this.ResetTimer}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch

/*import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="timer-buttons">
              <button
                type="button"
                className="start-button button"
                onClick={this.onStartTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
*/
