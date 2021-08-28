/*
    Repeat

    ***description
*/

function repeat(
    handler: Function, 
    interval: number, 
    condition: () => true | false) {
    
    function helper(timeout: number) {
        const timeStart = new Date().getTime();

        if(condition() === true)
            setTimeout(function () {
                handler()
                
                const timePassed = new Date().getTime() - timeStart
                const amountOfTimeToFix = timePassed - interval
                const fixedTime = timeout - amountOfTimeToFix
                
                helper(fixedTime)
            }, timeout)
    }

    helper(interval)
}

export default repeat