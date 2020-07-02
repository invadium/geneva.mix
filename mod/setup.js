function setup() {
    // show status
    mod.status.lab.status.hidden = !mod.status.lab.status.hidden

    env.totalTime = lib.calcTotalTime()
    env.timeLeft = env.totalTime
    env.statusInfo = {
        totalTime: env.totalTime,
    }
}
