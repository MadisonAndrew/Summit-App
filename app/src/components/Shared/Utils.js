var queryBuilder = (function () {
    function queryBuilder(baseUrl) {
        if (!(this instanceof queryBuilder)) return new queryBuilder(baseUrl);
        this.url = baseUrl;
    }

    queryBuilder.prototype = {};

    queryBuilder.prototype.param = function(paramName) {
        this.url = this.url + paramName + '=';
        return new queryBuilder(this.url);
    };
    
    queryBuilder.prototype.val = function(paramVal) {
        this.url = this.url + paramVal + '&';
        return new queryBuilder(this.url);
    };

    queryBuilder.prototype.getUrl = function() {
        return this.url.substring(0, this.url.length - 1);
    };

    return queryBuilder;
}());

export {queryBuilder};
