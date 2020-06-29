import React, {Component} from 'react';

interface ClockState {
    date: Date
}

/* Use the ClockState but not using the ClockProps */
class Clock extends Component<{}, ClockState>{

    /* Use Class field instead of using a contructor */
    clockId = 0;
    countDownDate = new Date();       //countdown date: today
    state = {date: new Date()};

    // constructor(){
    //     super();
    //     this.countDownDate = new Date();       //countdown date: today
    //     this.countDownDate.setHours(23,59,59); //countdown time: 23:59:59
    //     this.state = {date: new Date()};
    // }

    componentDidMount() {
        this.countDownDate.setHours(23,59,59); //countdown time: 23:59:59
        this.clockId = window.setInterval(  //window.setInterval will return a type number (setInterval will return a type NodeJS.Timeout)
            () => this.tick(), 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.clockId);
    }
    pad(number: number) {
        let result = "" + number;
        if (result.length < 2) {
            result = "0" + result;
        }
        return result;
    }
    millisToHoursMinutesSeconds(millis: number) {
        let totalSeconds = Math.floor(millis / 1000);
        let totalMinutes = Math.floor(totalSeconds / 60);
        let hours = Math.floor(totalMinutes / 60);
        let seconds = totalSeconds - totalMinutes * 60;
        let minutes = totalMinutes - hours * 60;
        return this.pad(hours) + ":" + this.pad(minutes) + ":" + this.pad(seconds);
    }
    tick() {
        this.setState({
          date: new Date()
        });
      }
    render(){
        return (
            <span className="countdown-clock">
            {this.millisToHoursMinutesSeconds((this.countDownDate.getTime() - this.state.date.getTime()))}
            </span>
        )
    }
}

export default Clock;