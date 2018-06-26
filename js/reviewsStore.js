var reviewsStore = {
    db: null,
   
    init: function() {
      if (reviewsStore.db) { return Promise.resolve(reviewsStore.db); }
      return idb.open('revs', 1, function(UpgradeDb) {
        UpgradeDb.createObjectStore('revs', { autoIncrement : true, keyPath: 'id' });
      }).then(function(db) {
        return reviewsStore.db = db;
      });
    },
   
    revs: function(mode) {
      return reviewsStore.init().then(function(db) {
        return db.transaction('revs', mode).objectStore('revs');
      })
    }
  }