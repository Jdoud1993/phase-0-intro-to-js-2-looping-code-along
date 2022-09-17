const cardMessage = []
    
    function writeCards(names, eventName) {
        for (let i = 0; i < names.length; i++) {
            cardMessage.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`) 
        }
        return cardMessage
        debugger;
    }

    function countDown(num) {
        let i = num;
        while (i >= 0) {
            console.log(i--)
        }
    }

    