export function loggingEnabled() {
    for (let i = 0; i < process.argv.length; i++) {
        if (process.argv[i] === "-v")
            return true;
    }
    return false;
}
