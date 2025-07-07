// api features class to handle query operations
class ApiFeatures {

    // constructor to initialize the query and queryStr
    constructor(query, queryStr) {
        this.query = query; // mongoose query object
        this.queryStr = queryStr; // query string from the request
    }

    // search feature for searching products
    search() {

        // checking if keyword is present in the query string
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword, // regex for searching
                $options: "i", // case insensitive search
            },
        } : {};

        this.query = this.query.find({ ...keyword }); // applying search to the query

        return this; // returning the instance for method chaining
    }

    // filter feature for filtering products
    filter() {
        
        const queryCopy = { ...this.queryStr }; // copying the query string

        // removing fields from the query string that are not needed for filtering
        const removeFields = ["keyword", "page", "limit"]; 

        removeFields.forEach((key) => delete queryCopy[key]); // deleting the fields from the query copy

        this.query = this.query.find(queryCopy); // applying the filter to the query

        return this; // returning the instance for method chaining 

    }
}

export default ApiFeatures; // exporting apiFeatures class
