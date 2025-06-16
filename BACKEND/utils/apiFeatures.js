// api features class to handle query operations
class ApiFeatures {

    // constructor to initialize the query and queryStr
    constructor(query, queryStr) {

        this.query = query; // mongoose query object
        this.queryStr = queryStr; // query string from the request

    };


    // search feature for searching products
    search() {

        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword, // regex for searching
                $options: "i" // case insensitive search
            }
        } : {}

        this.query = this.query.find({ ...keyword }); // applying search to the query

        return this; // returning the instance for method chaining
    }

    // filter feature for filtering products
    filter() {

        const queryCopy = { ...this.queryStr }; // copying the query string

        // removing fields from the query string that are not needed for filtering
        const removeFields = ["keyword", "page", "limit"];
        removeFields.forEach((key) => delete queryCopy[key]);

        // converting the query string to a string
        let queryStr = JSON.stringify(queryCopy);

        // replacing gt, gte, lt, lte with their MongoDB equivalents
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

        // applying the filter to the query
        this.query = this.query.find(JSON.parse(queryStr));

        return this; // returning the instance for method chaining

    }

};

export default ApiFeatures; // exporting apiFeatures class 
