import createAuth0Client from "@auth0/auth0-spa-js";
import { user, isAuthenticated, popupOpen } from "./../stores/auth"

const createClient = async () => {
  let auth0Client = await createAuth0Client({
    domain: import.meta.env.VITE_DOMAIN,
    client_id: import.meta.env.VITE_CLIENT_ID,
  });

  return auth0Client;
}
const loginWithPopup = async (client, options) => {
  popupOpen.set(true);
  try {
    await client.loginWithPopup(options);

    user.set(await client.getUser());
    isAuthenticated.set(true);
    popupOpen.set(false);
    return true;
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
    return false;
  } finally {
    popupOpen.set(false);
  }
}

const logout = async (client) => {
  try {
    await client.logout();
    user.set(null);
    isAuthenticated.set(false);
    popupOpen.set(false);
    return true;
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
  } finally {
    popupOpen.set(false);
  }
}

const auth = {
  createClient,
  loginWithPopup,
  logout
};

export default auth;