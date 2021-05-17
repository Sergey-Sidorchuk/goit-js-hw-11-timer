class Timer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate.getTime();

        this.refs = {
            days: document.querySelector(`${selector} span[data-value="days"]`),
            hours: document.querySelector(`${selector} span[data-value="hours"]`),
            minutes: document.querySelector(`${selector} span[data-value="minutes"]`),
            seconds: document.querySelector(`${selector} span[data-value="seconds"]`),
            timerBox: document.querySelector(`${selector} `),
        };
    }

    start() {
        setInterval(() => {
            const deltaTime = this.targetDate - Date.now();
            this.updateClockface(this.getTimeComponents(deltaTime));
        }, 1000);
    }
    getTimeComponents(time) {
    
    }
}