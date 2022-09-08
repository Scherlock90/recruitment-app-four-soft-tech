import { v4 as uuidv4 } from 'uuid';

import MockAdapter from 'axios-mock-adapter/types';

import { APP_DETAILS_ENDPOINT } from 'src/api/constants';

/**
 * @description This function return details mock.
 * @function getDetails
 */
export const getDetails = (mock: MockAdapter, isThrowError: boolean): void => {
  const DETAILS = {
    admin: {
      email: "mhulatt6@wikia.com",
      first_name: "Maison",
      last_name: "Hulatt"
    },
    company: "Dynava",
    id: uuidv4().slice(0, 5),
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAC4SURBVCjPdZFbDsIgEEWnrsMm7oGGfZrohxvU+Iq1TyjU60Bf1pac4Yc5YS4ZAtGWBMk/drQBOVwJlZrWYkLhsB8UV9K0BUrPGy9cWbng2CtEEUmLGppPjRwpbixUKHBiZRS0p+ZGhvs4irNEvWD8heHpbsyDXznPhYFOyTjJc13olIqzZCHBouE0FRMUjA+s1gTjaRgVFpqRwC8mfoXPPEVPS7LbRaJL2y7bOifRCTEli3U7BMWgLzKlW/CuebZPAAAAAElFTkSuQmCC",
    name: "Subin",
    number_of_active_users: 5070,
    number_of_users: 9210,
    server_address: "91.117.175.140"
  };

  const URL = new RegExp(`${APP_DETAILS_ENDPOINT}/*`)

  const GET_DETAILS = mock.onGet(URL);
  isThrowError ? GET_DETAILS.networkError() : GET_DETAILS.reply(200, DETAILS);
};
