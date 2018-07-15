'use strict';
const { getPage, parsePage, saveRatingsToDB } = require('./utils');

module.exports.scrape = (event, context, callback) => {

    // 1. Fetch yelp page:
    getPage(event)
        // 2. Save rattings data to db
        .then(page => parsePage(page))
        // 3. Save data to our db
        .then(yelpData => saveRatingsToDB(yelpData, event))
        .then(() => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'Go Serverless v1.0! Your function executed successfully!',
                    input: event,
                })
            });
        })

    // const response = {
    //     statusCode: 200,
    //     body: JSON.stringify({
    //         message: 'Go Serverless v1.0! Your function executed successfully!',
    //         input: event,
    //     }),
    // };



    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};