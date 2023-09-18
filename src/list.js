
const items = require('../src/data/users').items

// list.getItems
module.exports.getItems = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify(items),
    };
}