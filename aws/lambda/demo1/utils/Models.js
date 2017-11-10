/**
 * Created by manish on 07/11/17.
 * Copyright Matreh Technology 2017
 */
'use strict';

/**
 * DTO and Model classes used across different files
 */

/**
 * -----------------------------
 * Base classes
 * -----------------------------
 */

class Response {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }
}


/**
 * ---------------------------------------
 * User Data Service
 * ---------------------------------------
 */
class UserData {
    constructor(id, name, data ) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class UserDataRequest {
    constructor(userDataRequest) {
        this.userData = userDataRequest.userData;
    }
}

class UserDataResponse extends Response {
    constructor(userData) {
        super();
        this.userData = userData;
    }
}


module.exports = {
    UserDataRequest: UserDataRequest,
    UserDataResponse: UserDataResponse
}