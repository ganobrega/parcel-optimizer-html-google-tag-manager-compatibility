console.log('Hello world!');

// This is a basic button
const myButton = document.createElement('button');
myButton.classList.add('.my-button');
myButton.innerText = 'Click Here'

myButton.addEventListener('click', () => {
    alert('Button clicked!')
}, false);

document.body.append(myButton);