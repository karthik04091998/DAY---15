function firstTask(callback) {
    setTimeout(() => {
        const taskone = document.querySelector('.countdown');
        taskone.innerHTML = '10';
        callback();
    }, 1000);
  
}

function secondTask(callback) {
    setTimeout(() => {
        const taskone = document.querySelector('.countdown');
        taskone.innerHTML = '9';
        callback();
    }, 1000);
}

function thirdTask(callback) {
    setTimeout(() => {
        const taskone = document.querySelector('.countdown');
        taskone.innerHTML = '8';
        callback();
    }, 1000);

}

function fourthTask(callback) {
    setTimeout(() => {
        const taskone = document.querySelector('.countdown');
        taskone.innerHTML = '7';
        callback();
    }, 1000);
}

function fifthTask(callback) {
    setTimeout(() => {
        const taskone = document.querySelector('.countdown');
        taskone.innerHTML = '6';
        callback();
    }, 1000);
}

function sixthTask(callback) {
    setTimeout(() => {
        const taskone = document.querySelector('.countdown');
        taskone.innerHTML = '5';
        callback();
    }, 1000);
}

function seventhTask(callback) {
    setTimeout(() => {
        const taskone = document.querySelector('.countdown');
        taskone.innerHTML = '4';
        callback();
    }, 1000);
}

function eighthTask(callback) {
    setTimeout(() => {
        const taskone = document.querySelector('.countdown');
        taskone.innerHTML = '3';
        callback();
    }, 1000);
}

function ninthTask(callback) {
    setTimeout(() => {
        const taskone = document.querySelector('.countdown');
        taskone.innerHTML = '2';
        callback();
    }, 1000);
}

function tenthTask(callback) {
    setTimeout(() => {
        const taskone = document.querySelector('.countdown');
        taskone.innerHTML = '1';
        callback();
    }, 1000);
}

function eleventhTask(callback) {
    setTimeout(() => {
        const taskone = document.querySelector('.countdown');
        taskone.innerHTML = ' ';
        callback();
    }, 1000);
}
firstTask(function() {
    secondTask(function() {
        thirdTask(function() {
            fourthTask(function() {
                fifthTask(function() {
                    sixthTask(function() {
                        seventhTask(function() {
                            eighthTask(function() {
                                ninthTask(function() {
                                    tenthTask(function() {
                                        eleventhTask(function() {
                                            const taskone = document.querySelector('.countdown');
                                            taskone.innerHTML = 'Happy Independence Day!';
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})