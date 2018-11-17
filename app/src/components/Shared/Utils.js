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

var printDate = function(date) {
    if(date === null)
        return "";
    // +1 because month is 0 indexed
    return String((date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear());
}

var verifyName = function(name) {
    if(name === null)
        return "";
    else{
        //Remove Trailing and Leading whitespace from name
        var result = name.trim();
        //Check for invalid chars
        var lettersAndSpacesOnly = /^[A-Za-z\s]+$/; 
        if(lettersAndSpacesOnly.test(result)){
            return result;
        }
        else{
            //alert('Found invalid chars')
            return "";
        }
    }
        
}

export {
    queryBuilder, verifyName, printDate,
};
