xlsxj = require("./index");
  xlsxj({
    sourceInfo:[{
      input: "sample/languages.csv",
      objectLevel: 3
    },{
      input: "sample/errorCode.csv",
      objectLevel: 2
    }],
    outputdir: "sample",
    numberOfLanguages: 4,
    allowDuplicateValues: true
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      //console.log("Resource JSON files created successfully.");
    }
  });