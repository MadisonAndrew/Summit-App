import { queryBuilder } from '../Shared/Utils.js';

function getClients(setNewClients) {
    const api = 'https://us-central1-summit-app-6f288.cloudfunctions.net/getAllUserNames?';
    const query = queryBuilder(api).getUrl();

    try {
        fetch(query).then((res) => {
            // set clients if response is 200
            if(res.status === 200) {
                res.json().then((clients) => {
                    setNewClients(clients);

                    // return after set new clients
                    return;
                });
            }

            // if status is not 200 set clients to null
            setNewClients(null);
            return;
        });
    } catch(e) {
        setNewClients(null);
    }

    return null;
}

export { getClients };
