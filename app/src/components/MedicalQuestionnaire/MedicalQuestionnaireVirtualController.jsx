import { queryBuilder } from '../Shared/Utils';

function getUserId(
    {
        firstName,
        lastName,
        dob,
    },
    onFinish
){
    let api = 'https://us-central1-summit-app-6f288.cloudfunctions.net/getUserId?';
    api = queryBuilder(api)
            .param('first_name').val(firstName)
            .param('last_name').val(lastName)
            .param('dob').val(dob)
            .getUrl();

    // return response
    return fetch(api).then((res) => res);
}

function setMedicalQuestionnaire(payload, onFinish) {
    const api = 'https://us-central1-summit-app-6f288.cloudfunctions.net/setMedInfo';

    // delete unused state props
    delete payload['isSubmitted'];

    getUserId(payload)
        .then((res) => {
            if(res.status === 200) {
                // convert to json
                res = res.json();

                // set med info
                res.then(({ id }) => {
                    // post data
                    const data = {};
                    data['user_id'] = id;
                    data['val'] = payload;

                    console.log(data);

                    fetch(api, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    }).then((res) => {
                        if(res.status === 200) {
                            onFinish(true);
                        } else {
                            onFinish(false);
                        }
                    })
                });
            }
            // if user does not exist
            else {
                onFinish(false);
            }
        });
};

export { setMedicalQuestionnaire };
