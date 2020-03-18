function query(input) {
    return document.querySelector(input);
}

function findItemAbundant(array) {
    let maxCount = 0;
    let maxIndex = [];
    for (let i = 0; i < array.length; i++) {
        let currentValue = array[i];
        let count = 1;
        for (let j = array.length; j > i; j--) {
            if (currentValue === array[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            maxIndex[0] = currentValue;
        }
        if (count === maxCount) {
            const filterMatchedResult = maxIndex.find(function(element) {
                return (element == currentValue);
            })

            if (!filterMatchedResult) {
                maxIndex.push(currentValue);
            }
        }
    }
    const result = `${maxIndex} (${maxCount})`
    return result;
}

function handleRequest() {
    document.getElementById('submit').addEventListener('click', function() {
        const input = query('#inputArray').value;
        input.trim();
        if (input === '') {
            return;
        }
        const array = input.slice().split(',');
        query('#inputDisplay').innerHTML = `Your input: [${array}]`;
        query('#result').innerHTML = `Your result: ${findItemAbundant(array)}`;
    })
}
handleRequest();
