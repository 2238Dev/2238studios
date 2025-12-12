document.querySelectorAll(".nav").forEach(button => {
    button.addEventListener('click', () => {
        switch (button.textContent) {
            case "Home":
                window.location.href = "/";
                break;
            case "Games":
                window.location.href = "/games";
                break;
            case "About":
                window.location.href = "/about";
                break;
            case "Contact":
                window.location.href = "/contact";
                break;
            case "Links":
                window.location.href = "/links";
                break;
        }
    })
})