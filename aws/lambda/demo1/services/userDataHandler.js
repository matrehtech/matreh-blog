/**
 * Created by manish on 07/11/17.
 * Copyright Matreh Technology 2017
 */

'use strict';
var AWS = require('aws-sdk');
var Models = require('../utils/Models');
var constants = require('../utils/constants');
const uuidv1 = require('uuid/v1');

exports.userDataService = (event, context, callback) => {

    // Parse Request data in corresponding Model
    var userDataRequest = new Models.UserDataRequest(event);

    // Get data from request
    var userData = userDataRequest.userData;

    // Generate a unique id and set in response
    userData.id = uuidv1();

    // Prepare Response
    var userDataResponse = new Models.UserDataResponse(userData);

    userDataResponse.message = "success";
    userDataResponse.status = 0; // indicating success

    callback(null, userDataResponse);

}