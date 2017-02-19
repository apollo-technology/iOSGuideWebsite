var apps = [];
var tutorials;
function getData(block) {
    var TutorialsClass = Parse.Object.extend("tutorials");
    var query = new Parse.Query(TutorialsClass);
    query.ascending("app");
    query.ascending("title");
    query.first({
        success: function(object) {
            
        },
        error: function(error) {
            if (block) {
                block();
            }
        }
    });
}
