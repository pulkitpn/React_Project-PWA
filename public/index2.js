if ('serviceWorker' in navigator){
    navigator.serviceWorker.register("sw.js", registration => {
        console.log("Reg");
    }).catch(error => {
        console.log("failed");
    })
}