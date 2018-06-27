function isOnline() {
    var connectionStatus = document.getElementById('connectionStatus');
    if (navigator.onLine){
      connectionStatus.innerHTML = 'You are currently online!';
      connectionStatus.style = "color:green;";
    }
    else{
      connectionStatus.innerHTML = 'You are currently offline. Any requests made will be queued and synced as soon as you are connected again.';
      connectionStatus.style = "color:red;";
    }
  }
  window.addEventListener('online', isOnline);
  window.addEventListener('offline', isOnline);
  isOnline();