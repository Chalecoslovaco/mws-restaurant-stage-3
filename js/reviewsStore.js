var reviewsStore = {
    db: null,
   
    init: function() {
      if (reviewsStore.db) { return Promise.resolve(reviewsStore.db); }
      return idb.open('revs', 1, function(upgradeDb) {
        upgradeDb.createObjectStore('pending', { autoIncrement : true, keyPath: 'id' });
      }).then(function(db) {
        return reviewsStore.db = db;
      });
    },
   
    pending: function(mode) {
      return reviewsStore.init().then(function(db) {
        return db.transaction('pending', mode).objectStore('pending');
      })
    }
  }