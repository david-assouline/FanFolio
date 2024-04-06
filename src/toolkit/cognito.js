import { fetchUserAttributes, fetchAuthSession } from 'aws-amplify/auth';

export async function handleFetchUserAttributes() {
    try {
        return await fetchUserAttributes();
    } catch (error) {
        console.log(error);
    }
}

export async function handleFetchAuthSession() {
    try {
        const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
        return { accessToken, idToken };
    } catch (err) {
        console.log(err);
    }
}