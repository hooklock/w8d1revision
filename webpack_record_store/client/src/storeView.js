var StoreView = function(store){
  this.store = store;
};

StoreView.prototype = {
  render: function(){

    var invList = document.getElementById("inventory");

    var recList = this.store.listInventory();

    console.log(recList);

    for(var record of recList){
      var invListItem = document.createElement("li");
      invList.appendChild(invListItem);
      invListItem.innerText = "Artist: " + this.record.artist;
    }

    var displayStore = document.getElementById("record-store");
    displayStore.innerText = "Store: " + this.store.getName() + " of " + this.store.getCity();
  }
};

module.exports = StoreView;
