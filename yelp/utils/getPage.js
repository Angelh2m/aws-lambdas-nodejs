const request = require('request-promise');

module.exports = (businessName) => {
    // https://www.yelp.com/biz/the-last-bookstore-los-angeles
    // const url = `https://www.yelp.com/biz/${businessName}`;
    const url = `https://www.bloomberg.com/`;

    return request({ method: 'GET', url: url })

}