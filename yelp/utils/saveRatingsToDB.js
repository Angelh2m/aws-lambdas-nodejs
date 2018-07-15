const uuid = require("uuid");
const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (yelpData, businessName) => {
    console.log("Check", process.env.DYNAMO_TABLE);
    date = JSON.stringify(new Date());

    const params = {
        TableName: process.env.DYNAMO_TABLE,
        Item: {
            id: uuid.v1(),
            businessName: businessName,
            reviewCount: yelpData.reviewCount,
            raiting: yelpData.raiting,
            scrapedAt: date
        }
    };
    console.log("PARAMS", params);

    dynamoDb.put(params, error => {
        if (error) {
            console.error('Error saving data into DynamoDb', JSON.stringify(error));
            return Promise.reject('Error saving data into DynamoDb ')
        }
        console.log(params.item);

        return Promise.resolve(params.item);
    })

};