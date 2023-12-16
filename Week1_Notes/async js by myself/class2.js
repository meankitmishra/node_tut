function changeText(){
    document.querySelector('h1').textContent = "hello from callback"
}

const timerId = setTimeout(changeText,5000)

document.querySelector('#cancel').addEventListener('click', () => {
    console.log(timerId);
    clearTimeout(timerId)
    console.log("timer cancelled");
})