// initializer
function nilaToastrInit() {
    const body = document.querySelector("#root").parentNode;
    const rootElement = document.querySelector("#root");

    const toast = document.createElement("div");
    toast.setAttribute("id", "nila-toastr");
    body.insertBefore(toast, rootElement);
}

// Show Toastr
function nilaToastrMessage(message, status) {
    const alert = document.createElement("div");
    const alertIcon = document.createElement("div");
    const alertContent = document.createElement("div");
    const alertMessage = document.createElement("div");
    const alertDismiss = document.createElement("div");

    const delay = 100;
    // alert
    alert.className = "alert";
    setTimeout(function () {
        alert.classList.add("alert-active");
        alert.classList.add(`alert-${status}`);
    }, delay);

    // content
    alertContent.className = "alert-content";

    // message
    alertMessage.className = "alert-message";
    alertMessage.textContent = message;

    // icon
    alertIcon.className = "alert-icon";

    // dismiss
    alertDismiss.className = "alert-dismiss";

    // append
    alertContent.appendChild(alertIcon);
    alertContent.appendChild(alertMessage);
    alert.appendChild(alertContent);
    alert.appendChild(alertDismiss);

    // add to dom
    const toast = document.getElementById("nila-toastr");
    toast.prepend(alert);

    // auto closing
   setTimeout(function () {
       alert.classList.remove("alert-active");
       alert.classList.add("alert-closing");
  
       // remove element from dom
       setTimeout(function () {
           alert.remove();
       }, 500);
   }, 3000 + delay);

    // remove by clicking
    function dismissAlert(event) {
        if (event.target.parentElement.classList.contains("alert")) {
            console.log("true");
            const alert = event.target.parentElement;
            alert.classList.remove("alert-active");
            alert.classList.add("alert-closing");
            setTimeout(function () {
                alert.remove();
            }, 500);
        }
    }

    document.addEventListener("click", dismissAlert);
}


// just need call this method
nilaToastrInit()


