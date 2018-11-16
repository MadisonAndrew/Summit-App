import { queryBuilder } from '../Shared/Utils.js';

function addClients(payload, callback){

    // Paramters
    const first_name = payload.firstName;
    const last_name = payload.lastName;
    const date_of_birth = payload.dob;

    const apiAddUser = 'https://us-central1-summit-app-6f288.cloudfunctions.net/addUser?';
    const query = queryBuilder(apiAddUser)
                    .param('first_name').val(first_name)
                    .param('last_name').val(last_name)
                    .param('dob').val(date_of_birth)
                    .getUrl();

    // query
    try {
        fetch(query).then(res => {
            // return true upon successful call
            if(res.status === 200) {
                payload.authenticated = true;
            }
            callback({error: "none"})
           // callback({});
        }).catch(error => {
            callback({error: "DBFail"});
        });
    } catch (e) {
        callback({error: "QueryFail"});
    }
}

export default addClients;
