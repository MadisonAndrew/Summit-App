const createAlert = (payload, onFinish) => {
    const api = 'https://us-central1-summit-app-6f288.cloudfunctions.net/createAlert';
    fetch(api, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    }).then((res) => {
        if(res.status === 200) {
            onFinish(true);
        }
    });
}

export { createAlert };
