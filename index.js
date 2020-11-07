const admin = require('firebase-admin');

/**
 * Firebase Admin Credentials
 */
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "DATABASE_URL"
});

/**
 * Delete user
 */
function deleteUser(uid) {
    admin.auth().deleteUser(uid)
        .then(function() {
            console.log('Successfully deleted user', uid);
        })
        .catch(function(error) {
            console.log('Error deleting user:', error);
        });
}

/**
 * Limits for creating and deleting accounts: 10 accounts/second
 */
function getAllUsers(nextPageToken) {
    admin.auth().listUsers(10, nextPageToken)
        .then(function(listUsersResult) {
            listUsersResult.users.forEach(function(userRecord) {
                uid = userRecord.toJSON().uid;
                deleteUser(uid);
            });
            if (listUsersResult.pageToken) {

                setTimeout(()=> {
                    console.log("LIMIT \n")
                    getAllUsers(listUsersResult.pageToken);
                }, 1000)

            } else {
                console.log('No users to delete')
                return process.exit(1)
            }

        })
        .catch(function(error) {
            console.log('Error listing users:', error);
        });
}

getAllUsers();
