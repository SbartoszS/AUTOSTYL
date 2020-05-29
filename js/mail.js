(function () {
    const form = document.querySelector("#contactForm");
    form.addEventListener("submit", sendEmail);

    function sendEmail(event) {
        event.preventDefault();
        const messageContainer = document.querySelector("#reqMessage");
        const reCapcha = form.querySelector("#g-recaptcha-response").value;
        if (reCapcha.length === 0) {
            messageContainer.classList.add("errorSubmit");
            setTimeout(function () {
                messageContainer.classList.remove("errorSubmit");
            }, 3000);
            messageContainer.innerHTML = "Zaznacz recaptcha";
        } else {
            const name = form.querySelector("input[name='name']").value;
            const email = form.querySelector("input[name='email']").value;
            const message = form.querySelector("textarea[name='message']").value;

            if (name && email && message) {
                const emailData = {
                    name: name,
                    email: email,
                    message: message
                };
                axios.post('php/action.php', emailData)
                    .then(function (responseData) {
                        return responseData.data;
                    })
                    .then(function (data) {
                        grecaptcha.reset();
                        const success = data.success;
                        // const messageContainer = document.querySelector("#reqMessage");
                        messageContainer.innerHTML = "";
                        //TODO: ADD CLASS
                        messageContainer.classList.add("successSubmit");
                        setTimeout(function () {
                            messageContainer.classList.remove("successSubmit")
                        }, 3000);
                        messageContainer.innerHTML = success;
                    })
                    .catch(function (data) {
                        grecaptcha.reset();
                        messageContainer.innerHTML = "";
                        const responseError = data.response.data;
                        if (responseError.error) {

                            //TODO: ADD CLASS
                            messageContainer.classList.add("errorSubmit");
                            setTimeout(function () {
                                messageContainer.classList.remove("errorSubmit");
                            }, 3000);
                            if (typeof data.error === "string") {
                                messageContainer.innerHTML = responseError.error;
                            } else {
                                const errorName = responseError.error.name ? responseError.error.name :
                                    "";
                                const errorEmail = responseError.error.email ? responseError.error
                                    .email : "";
                                const errorMessage = responseError.error.message ? responseError.error
                                    .message : "";
                                if (errorName) {
                                    messageContainer.innerHTML += errorName + "<br>";
                                }

                                if (errorEmail) {
                                    messageContainer.innerHTML += errorEmail + "<br>";
                                }

                                if (errorMessage) {
                                    messageContainer.innerHTML += errorMessage + "<br>";
                                }
                            }
                        }
                        console.log("error: " + responseError);
                    });
            } else {
                //TODO: gdy formularz jest pusty
                console.log("brak danych");
            }
        }
    }
})();