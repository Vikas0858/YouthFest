import * as firebaseAdmin from "firebase-admin";

import serviceAccount from "../serviceAccountKey.json";

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: serviceAccount.private_key,
      clientEmail: serviceAccount.client_email,
      projectId: serviceAccount.project_id,
    }),
    // databaseURL: 'https://youthfest-2023.asia-south1.firebasedatabase.app',
  });
}

export { firebaseAdmin };
