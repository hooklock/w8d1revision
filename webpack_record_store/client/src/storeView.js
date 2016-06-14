var StoreView = function(store){
  this.store = store;
};

StoreView.prototype = {
  render: function(){

    var invList = document.getElementById("inventory");

    for(var record of this.store.records){
      var invListItem = document.createElement("li");
      invListItem.innerText = record.artist + " - " + record.title + ", £" + record.price;
      invList.appendChild(invListItem);
    }

    // var recList = this.store.listInventory();

    // console.log(recList);

    // for(var record of recList){
    //   var invListItem = document.createElement("li");
    //   invList.appendChild(invListItem);
    //   invListItem.innerText = "Artist: " + this.record.artist;
    // }

    var displayStore = document.getElementById("record-store");
    displayStore.innerText = "Store: " + this.store.getName() + " of " + this.store.getCity();
  }
};

module.exports = StoreView;
