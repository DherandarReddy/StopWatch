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
