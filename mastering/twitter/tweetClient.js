window.onload = function(){
    let list = document.getElementById('list');
    let evtSource = new EventSource('http://localhost:8080/events');

    evtSource.onmessage = function (event) {
        let newElement = document.createElement('li');
        newElement.innerHTML = event.data;
        list.appendChild(newElement);
    }
}