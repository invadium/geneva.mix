function setupEnv() {
    env.totalTime = lib.calcTotalTime()
    env.timeLeft = env.totalTime
    env.statusInfo = {
        totalTime: env.totalTime,
    }

    // show status
    mod.status.lab.status.hidden = !mod.status.lab.status.hidden
}
setupEnv.Z = 1
