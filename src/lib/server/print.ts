import { fork } from 'child_process'
/**
 * section:\
 * 1 : agent \
 * 2 : nasabah
 */
let logQueue: Array<Array<string>> = []
const childLocation = './server/child.print.js'
const childProcess = fork(childLocation)
const timeouts = 10000

setInterval(() => {
    if (logQueue.length > 0) {
        childProcess.send(logQueue)
        logQueue = []
    }
}, timeouts)

export const clor = (message: string, colorCode: string) => {
    try {
        const isTerminal = process.stdout.isTTY
        if (isTerminal) {
            return `\x1b[${colorCode}m${message}\x1b[0m`
        } else {
            return message
        }
    } catch (_) {
        return message
    }
}

export function cout(title: string) {
    const printedDate = new Date().toISOString()
    const simplyDate = `${printedDate.split('.')[0].split('T')[0]} ${
        printedDate.split('.')[0].split('T')[1]
    }`

    const colorize = (message: string, colorCode: string) => {
        try {
            const isTerminal = process.stdout.isTTY
            if (isTerminal) {
                return `\x1b[${colorCode}m${message}\x1b[0m`
            } else {
                return message
            }
        } catch (_) {
            return message
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (data: any) => {
        const info = () => {
            logQueue.push([
                `${simplyDate} ${colorize('? [INFO] ', '36')} ${title}`,
                data,
            ])
        }

        const error = () => {
            logQueue.push([
                `${simplyDate} ${colorize('✕ [ERROR]', '31')} ${title}`,
                data,
            ])
        }

        const warn = () => {
            logQueue.push([
                `${simplyDate} ${colorize('▲ [WARN] ', '33')} ${title}`,
                data,
            ])
        }

        const debug = () => {
            logQueue.push([
                `${simplyDate} ${colorize('! [DEBUG]', '32')} ${title}`,
                data,
            ])
        }

        return {
            info,
            error,
            warn,
            debug,
        }
    }
}
