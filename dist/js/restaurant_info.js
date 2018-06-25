"use strict";var map,restaurant=void 0;window.initMap=function(){fetchRestaurantFromURL(function(e,t){e?console.error(e):(self.map=new google.maps.Map(document.getElementById("map"),{zoom:16,center:t.latlng,scrollwheel:!1}),fillBreadcrumb(),DBHelper.mapMarkerForRestaurant(self.restaurant,self.map))})},fetchRestaurantFromURL=function(n){if(self.restaurant)n(null,self.restaurant);else{var e=getParameterByName("id");e?DBHelper.fetchRestaurantById(e,function(e,t){(self.restaurant=t)?(fillRestaurantHTML(),n(null,t)):console.error(e)}):(error="No restaurant id in URL",n(error,null))}},fillRestaurantHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurant,t=document.getElementById("restaurant-name");t.innerHTML=e.name,t.tabIndex=0;var n=document.getElementById("restaurant-address");n.innerHTML=e.address,n.tabIndex=0;var r="small",a=r,d=document.getElementById("restaurant-img");window.matchMedia("screen and (min-width: 1000px)")?a="medium":window.matchMedia("screen and (min-width: 600px)")&&(a=r),d.className="restaurant-img lazyload",d.setAttribute("data-src",DBHelper.imageUrlForRestaurant(e,a)),d.alt=e.name+" resturant picture";var l=document.getElementById("restaurant-cuisine");l.innerHTML=e.cuisine_type,l.tabIndex=0,e.operating_hours&&fillRestaurantHoursHTML(),DBHelper.fetchReviews(e.id)},fillRestaurantHoursHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurant.operating_hours,t=document.getElementById("restaurant-hours");for(var n in e){var r=document.createElement("tr");r.tabIndex=0;var a=document.createElement("td");a.innerHTML=n,r.appendChild(a);var d=document.createElement("td");d.innerHTML=e[n],r.appendChild(d),t.appendChild(r)}},fillReviewsHTML=function(e){var t=document.getElementById("reviews-container"),n=document.createElement("h3");if(n.innerHTML="Reviews",n.tabIndex=0,t.appendChild(n),!e){var r=document.createElement("p");return r.innerHTML="No reviews yet!",void t.appendChild(r)}var a=document.getElementById("reviews-list");e.forEach(function(e){a.appendChild(createReviewHTML(e))}),t.appendChild(a)},createReviewHTML=function(e){var t=document.createElement("li"),n=document.createElement("p");n.innerHTML=e.name,n.tabIndex=0,t.appendChild(n);var r=document.createElement("p");r.innerHTML=e.createdAt,r.tabIndex=0,t.appendChild(r);var a=document.createElement("p");a.innerHTML="Rating: "+e.rating,a.tabIndex=0,t.appendChild(a);var d=document.createElement("p");return d.innerHTML=e.comments,d.tabIndex=0,t.appendChild(d),t},fillBreadcrumb=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurant,t=document.getElementById("breadcrumb"),n=document.createElement("li");n.innerHTML=e.name,t.appendChild(n)},getParameterByName=function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},clearForm=function(){document.querySelector("#name").value="",document.querySelector("#rate").value="",document.querySelector("#comment").value=""};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RhdXJhbnRfaW5mby5qcyJdLCJuYW1lcyI6WyJtYXAiLCJyZXN0YXVyYW50Iiwid2luZG93IiwiaW5pdE1hcCIsImZldGNoUmVzdGF1cmFudEZyb21VUkwiLCJlcnJvciIsInNlbGYiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJjZW50ZXIiLCJsYXRsbmciLCJzY3JvbGx3aGVlbCIsImNhbGxiYWNrIiwiaWQiLCJnZXRQYXJhbWV0ZXJCeU5hbWUiLCJEQkhlbHBlciIsImZldGNoUmVzdGF1cmFudEJ5SWQiLCJmaWxsUmVzdGF1cmFudEhUTUwiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJuYW1lIiwiaW5uZXJIVE1MIiwidGFiSW5kZXgiLCJhZGRyZXNzIiwiaW1hZ2UiLCJtYXRjaE1lZGlhIiwic2l6ZSIsInNtYWxsIiwiYmlnIiwiaW1hZ2VVcmxGb3JSZXN0YXVyYW50IiwiYWx0IiwiY3Vpc2luZSIsImNsYXNzTmFtZSIsImN1aXNpbmVfdHlwZSIsIm9wZXJhdGluZ19ob3VycyIsImZpbGxSZXN0YXVyYW50SG91cnNIVE1MIiwiZmV0Y2hSZXZpZXdzIiwiaG91cnMiLCJrZXkiLCJvcGVyYXRpbmdIb3VycyIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJkYXkiLCJhcHBlbmRDaGlsZCIsInRpbWUiLCJmaWxsUmV2aWV3c0hUTUwiLCJyZXZpZXdzIiwidGl0bGUiLCJjb250YWluZXIiLCJub1Jldmlld3MiLCJmb3JFYWNoIiwicmV2aWV3IiwidWwiLCJjcmVhdGVSZXZpZXdIVE1MIiwibGkiLCJkYXRlIiwiY3JlYXRlZEF0IiwicmF0aW5nIiwiY29tbWVudHMiLCJicmVhZGNydW1iIiwidXJsIiwicmVwbGFjZSIsInJlc3VsdHMiLCJleGVjIiwiY2xlYXJGb3JtIiwicmVnZXgiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6ImFBQUEsSUFDSUEsSUFEQUMsZ0JBQUFBLEVBTUpD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bnRfaW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCByZXN0YXVyYW50O1xudmFyIG1hcDtcblxuLyoqXG4gKiBJbml0aWFsaXplIEdvb2dsZSBtYXAsIGNhbGxlZCBmcm9tIEhUTUwuXG4gKi9cbndpbmRvdy5pbml0TWFwID0gKCkgPT4ge1xuICBmZXRjaFJlc3RhdXJhbnRGcm9tVVJMKChlcnJvciwgcmVzdGF1cmFudCkgPT4ge1xuICAgIGlmIChlcnJvcikgeyAvLyBHb3QgYW4gZXJyb3IhXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xuICAgICAgICB6b29tOiAxNixcbiAgICAgICAgY2VudGVyOiByZXN0YXVyYW50LmxhdGxuZyxcbiAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIGZpbGxCcmVhZGNydW1iKCk7XG4gICAgICBEQkhlbHBlci5tYXBNYXJrZXJGb3JSZXN0YXVyYW50KHNlbGYucmVzdGF1cmFudCwgc2VsZi5tYXApO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIEdldCBjdXJyZW50IHJlc3RhdXJhbnQgZnJvbSBwYWdlIFVSTC5cbiAqL1xuZmV0Y2hSZXN0YXVyYW50RnJvbVVSTCA9IChjYWxsYmFjaykgPT4ge1xuICBpZiAoc2VsZi5yZXN0YXVyYW50KSB7IC8vIHJlc3RhdXJhbnQgYWxyZWFkeSBmZXRjaGVkIVxuICAgIGNhbGxiYWNrKG51bGwsIHNlbGYucmVzdGF1cmFudCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGlkID0gZ2V0UGFyYW1ldGVyQnlOYW1lKCdpZCcpO1xuICBpZiAoIWlkKSB7IC8vIG5vIGlkIGZvdW5kIGluIFVSTFxuICAgIGVycm9yID0gJ05vIHJlc3RhdXJhbnQgaWQgaW4gVVJMJztcbiAgICBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG4gIH0gZWxzZSB7XG4gICAgREJIZWxwZXIuZmV0Y2hSZXN0YXVyYW50QnlJZChpZCwgKGVycm9yLCByZXN0YXVyYW50KSA9PiB7XG4gICAgICBzZWxmLnJlc3RhdXJhbnQgPSByZXN0YXVyYW50O1xuICAgICAgaWYgKCFyZXN0YXVyYW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmaWxsUmVzdGF1cmFudEhUTUwoKTtcbiAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3RhdXJhbnQpO1xuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIENyZWF0ZSByZXN0YXVyYW50IEhUTUwgYW5kIGFkZCBpdCB0byB0aGUgd2VicGFnZVxuICovXG5maWxsUmVzdGF1cmFudEhUTUwgPSAocmVzdGF1cmFudCA9IHNlbGYucmVzdGF1cmFudCkgPT4ge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhdXJhbnQtbmFtZScpO1xuICBuYW1lLmlubmVySFRNTCA9IHJlc3RhdXJhbnQubmFtZTtcbiAgbmFtZS50YWJJbmRleCA9IDA7XG5cbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXVyYW50LWFkZHJlc3MnKTtcbiAgYWRkcmVzcy5pbm5lckhUTUwgPSByZXN0YXVyYW50LmFkZHJlc3M7XG4gIGFkZHJlc3MudGFiSW5kZXggPSAwO1xuXG4gIGNvbnN0IHNtYWxsID0gJ3NtYWxsJywgbWVkaXVtID0gJ21lZGl1bScsIGJpZyA9ICdiaWcnO1xuICBsZXQgc2l6ZSA9IHNtYWxsO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXVyYW50LWltZycpO1xuXG4gIGlmKHdpbmRvdy5tYXRjaE1lZGlhKCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCknKSlcbiAgICBzaXplID0gbWVkaXVtO1xuICBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCknKSlcbiAgICBzaXplID0gc21hbGw7XG4gICAgXG4gIGltYWdlLmNsYXNzTmFtZSA9ICdyZXN0YXVyYW50LWltZyBsYXp5bG9hZCc7XG4gIC8vaW1hZ2Uuc3JjID0gJyc7XG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmMnLCBEQkhlbHBlci5pbWFnZVVybEZvclJlc3RhdXJhbnQocmVzdGF1cmFudCwgc2l6ZSkpO1xuICBpbWFnZS5hbHQgPSByZXN0YXVyYW50Lm5hbWUgKyAnIHJlc3R1cmFudCBwaWN0dXJlJztcblxuICBjb25zdCBjdWlzaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhdXJhbnQtY3Vpc2luZScpO1xuICBjdWlzaW5lLmlubmVySFRNTCA9IHJlc3RhdXJhbnQuY3Vpc2luZV90eXBlO1xuICBjdWlzaW5lLnRhYkluZGV4ID0gMDtcblxuICAvLyBmaWxsIG9wZXJhdGluZyBob3Vyc1xuICBpZiAocmVzdGF1cmFudC5vcGVyYXRpbmdfaG91cnMpIHtcbiAgICBmaWxsUmVzdGF1cmFudEhvdXJzSFRNTCgpO1xuICB9XG4gIC8vIGZpbGwgcmV2aWV3c1xuICBEQkhlbHBlci5mZXRjaFJldmlld3MocmVzdGF1cmFudC5pZCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSByZXN0YXVyYW50IG9wZXJhdGluZyBob3VycyBIVE1MIHRhYmxlIGFuZCBhZGQgaXQgdG8gdGhlIHdlYnBhZ2UuXG4gKi9cbmZpbGxSZXN0YXVyYW50SG91cnNIVE1MID0gKG9wZXJhdGluZ0hvdXJzID0gc2VsZi5yZXN0YXVyYW50Lm9wZXJhdGluZ19ob3VycykgPT4ge1xuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXVyYW50LWhvdXJzJyk7XG4gIGZvciAobGV0IGtleSBpbiBvcGVyYXRpbmdIb3Vycykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgcm93LnRhYkluZGV4ID0gMDsgXG5cbiAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGRheS5pbm5lckhUTUwgPSBrZXk7XG4gICAgcm93LmFwcGVuZENoaWxkKGRheSk7XG5cbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICB0aW1lLmlubmVySFRNTCA9IG9wZXJhdGluZ0hvdXJzW2tleV07XG4gICAgcm93LmFwcGVuZENoaWxkKHRpbWUpO1xuXG4gICAgaG91cnMuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufTtcblxuLyoqXG4gKiBDcmVhdGUgYWxsIHJldmlld3MgSFRNTCBhbmQgYWRkIHRoZW0gdG8gdGhlIHdlYnBhZ2UuXG4gKi9cbmZpbGxSZXZpZXdzSFRNTCA9IChyZXZpZXdzKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXZpZXdzLWNvbnRhaW5lcicpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHRpdGxlLmlubmVySFRNTCA9ICdSZXZpZXdzJztcbiAgdGl0bGUudGFiSW5kZXggPSAwO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGlmICghcmV2aWV3cykge1xuICAgIGNvbnN0IG5vUmV2aWV3cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBub1Jldmlld3MuaW5uZXJIVE1MID0gJ05vIHJldmlld3MgeWV0ISc7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vUmV2aWV3cyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jldmlld3MtbGlzdCcpO1xuICByZXZpZXdzLmZvckVhY2gocmV2aWV3ID0+IHtcbiAgICB1bC5hcHBlbmRDaGlsZChjcmVhdGVSZXZpZXdIVE1MKHJldmlldykpO1xuICB9KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHVsKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHJldmlldyBIVE1MIGFuZCBhZGQgaXQgdG8gdGhlIHdlYnBhZ2UuXG4gKi9cbmNyZWF0ZVJldmlld0hUTUwgPSAocmV2aWV3KSA9PiB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmFtZS5pbm5lckhUTUwgPSByZXZpZXcubmFtZTtcbiAgbmFtZS50YWJJbmRleCA9IDA7XG4gIGxpLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRhdGUuaW5uZXJIVE1MID0gcmV2aWV3LmNyZWF0ZWRBdDtcbiAgZGF0ZS50YWJJbmRleCA9IDA7XG4gIGxpLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gIGNvbnN0IHJhdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcmF0aW5nLmlubmVySFRNTCA9IGBSYXRpbmc6ICR7cmV2aWV3LnJhdGluZ31gO1xuICByYXRpbmcudGFiSW5kZXggPSAwO1xuICBsaS5hcHBlbmRDaGlsZChyYXRpbmcpO1xuXG4gIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb21tZW50cy5pbm5lckhUTUwgPSByZXZpZXcuY29tbWVudHM7XG4gIGNvbW1lbnRzLnRhYkluZGV4ID0gMDtcbiAgbGkuYXBwZW5kQ2hpbGQoY29tbWVudHMpO1xuXG4gIHJldHVybiBsaTtcbn07XG5cbi8qKlxuICogQWRkIHJlc3RhdXJhbnQgbmFtZSB0byB0aGUgYnJlYWRjcnVtYiBuYXZpZ2F0aW9uIG1lbnVcbiAqL1xuZmlsbEJyZWFkY3J1bWIgPSAocmVzdGF1cmFudD1zZWxmLnJlc3RhdXJhbnQpID0+IHtcbiAgY29uc3QgYnJlYWRjcnVtYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicmVhZGNydW1iJyk7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGkuaW5uZXJIVE1MID0gcmVzdGF1cmFudC5uYW1lO1xuICBicmVhZGNydW1iLmFwcGVuZENoaWxkKGxpKTtcbn07XG5cbi8qKlxuICogR2V0IGEgcGFyYW1ldGVyIGJ5IG5hbWUgZnJvbSBwYWdlIFVSTC5cbiAqL1xuZ2V0UGFyYW1ldGVyQnlOYW1lID0gKG5hbWUsIHVybCkgPT4ge1xuICBpZiAoIXVybClcbiAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgJ1xcXFwkJicpO1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYFs/Jl0ke25hbWV9KD0oW14mI10qKXwmfCN8JClgKSxcbiAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xuICBpZiAoIXJlc3VsdHMpXG4gICAgcmV0dXJuIG51bGw7XG4gIGlmICghcmVzdWx0c1syXSlcbiAgICByZXR1cm4gJyc7XG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XG59O1xuXG5jbGVhckZvcm0gPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWUgPSAnJztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhdGUnKS52YWx1ZSA9ICcnO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudCcpLnZhbHVlID0gJyc7XG59XG4iXX0=
