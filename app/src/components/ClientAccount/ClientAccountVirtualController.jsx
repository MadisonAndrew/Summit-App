import { queryBuilder } from '../Shared/Utils.js';

async function getUserInfo(payload, callback) {
    // split name by space
    const splitedName = payload.name.split(' ');
    if(!(splitedName.length === 2)) {
        return false;
    }
    // date of birth
    const date_of_birth = payload.dob;

    // construct query
    const api = 'https://us-central1-summit-app-6f288.cloudfunctions.net/getUserInfo?';
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
            }
            callback(payload);
        }).catch(error => {
            callback(payload);
        });
    } catch (e) {
        callback(payload);
    }
}

export {
    getUserInfo
}
