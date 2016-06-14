var RecordStore = require("./record-store/record_store.js");
var sampleRecords = require("./sample.json");
var Record = require("./record-store/record.js");
var Collector = require("./record-store/record_collector.js");
var StoreView = require("./storeView.js");

window.onload = function(){
  console.log("Sample Records", sampleRecords);


var store = new RecordStore("Mack's", "Glasgow");

for(recordData of sampleRecords){
  store.addRecord(new Record(recordData));
}

var store1View = new StoreView(store);
store1View.render();

console.log("Store created ", store);

};
