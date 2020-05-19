import React, {Component} from 'react';

class Clock extends Component{
    constructor(props){
        super(props);
        this.countDownDate = new Date();       //countdown date: today
        this.countDownDate.setHours(23,59,59); //countdown time: 23:59:59

        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.clockId = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.clockId);
    }
    pad(number) {
        let result = "" + number;
        if (result.length < 2) {
            result = "0" + result;
        }
        return result;
    }
    millisToHoursMinutesSeconds(millis) {
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
            {this.millisToHoursMinutesSeconds((this.countDownDate - this.state.date))}
            </span>
        )
    }
}

export default Clock;