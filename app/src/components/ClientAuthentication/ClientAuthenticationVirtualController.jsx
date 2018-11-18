import { queryBuilder } from '../Shared/Utils.js';

async function authUser(payload, callback) {
    // split name by space
    const splitedName = payload.name.split(' ');
    if(!(splitedName.length === 2)) {
        return false;
    }
    // date of birth
    const date_of_birth = payload.dob;

    // construct query
    const api = 'https://us-central1-summit-app-6f288.cloudfunctions.net/authUser?';
    const query = queryBuilder(api)
                    .param('first_name').val(splitedName[0])
                    .param('last_name').val(splitedName[1])
                    .param('dob').val(date_of_birth)
                    .getUrl();

    // query
    try {
        fetch(query).then(res => {
            // return true upon successful call
            if(res.status === 200) {
                payload.authenticated = true;

                res.json().then(({ id }) => {
                    payload['userId'] = id;
                    // callback
                    callback(payload);
                });
            }
        }).catch(error => {
            callback(payload);
        });
    } catch (e) {
        callback(payload);
    }
}

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

export {
    getClients,
    authUser
}
