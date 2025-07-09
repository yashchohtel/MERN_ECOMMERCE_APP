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
        const keyword = this.queryStr.keyword
            ? {
                name: {
                    $regex: this.queryStr.keyword, // regex for searching
                    $options: "i", // case insensitive search
                },
            }
            : {};

        this.query = this.query.find({ ...keyword }); // applying search to the query

        return this; // returning the instance for method chaining
    }

    // filter feature for filtering products
    filter() {

        let queryCopy = { ...this.queryStr }; // copying the query string

        // removing fields from the query string that are not needed for filtering
        const removeFields = ["keyword", "page", "limit"];

        removeFields.forEach((key) => delete queryCopy[key]); // deleting the fields from the query copy

        let queryStr = JSON.stringify(queryCopy); // converting the query copy to string

        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`); // replacing gt, gte, lt, lte with $gt, $gte, $lt, $lte

        queryCopy = JSON.parse(queryStr); // parsing the string back to object

        this.query = this.query.find(queryCopy); // applying the filter to the query

        return this; // returning the instance for method chaining
    }

    // pagination feature for pagination of products
    pagination(resultsPerPage) {

        // getting the current page from the query string or defaulting to 1
        const currentPage = Number(this.queryStr.page) || 1; 

        const skip = resultsPerPage * (currentPage - 1); // calculating the number of documents to skip

        this.query = this.query.skip(skip).limit(resultsPerPage); // applying pagination to the query
        
        return this; // returning the instance for method chaining

    }

}

export default ApiFeatures; // exporting apiFeatures class
