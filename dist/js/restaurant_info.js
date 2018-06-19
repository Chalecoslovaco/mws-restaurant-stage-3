"use strict";var map,restaurant=void 0;window.initMap=function(){fetchRestaurantFromURL(function(e,n){e?console.error(e):(self.map=new google.maps.Map(document.getElementById("map"),{zoom:16,center:n.latlng,scrollwheel:!1}),fillBreadcrumb(),DBHelper.mapMarkerForRestaurant(self.restaurant,self.map))})},fetchRestaurantFromURL=function(t){if(self.restaurant)t(null,self.restaurant);else{var e=getParameterByName("id");e?DBHelper.fetchRestaurantById(e,function(e,n){(self.restaurant=n)?(fillRestaurantHTML(),t(null,n)):console.error(e)}):(error="No restaurant id in URL",t(error,null))}},fillRestaurantHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurant,n=document.getElementById("restaurant-name");n.innerHTML=e.name,n.tabIndex=0;var t=document.getElementById("restaurant-address");t.innerHTML=e.address,t.tabIndex=0;var a="small",r=a,d=document.getElementById("restaurant-img");window.matchMedia("screen and (min-width: 1000px)")?r="medium":window.matchMedia("screen and (min-width: 600px)")&&(r=a),d.className="restaurant-img lazyload",d.setAttribute("data-src",DBHelper.imageUrlForRestaurant(e,r)),d.alt=e.name+" resturant picture";var i=document.getElementById("restaurant-cuisine");i.innerHTML=e.cuisine_type,i.tabIndex=0,e.operating_hours&&fillRestaurantHoursHTML(),fillReviewsHTML()},fillRestaurantHoursHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurant.operating_hours,n=document.getElementById("restaurant-hours");for(var t in e){var a=document.createElement("tr");a.tabIndex=0;var r=document.createElement("td");r.innerHTML=t,a.appendChild(r);var d=document.createElement("td");d.innerHTML=e[t],a.appendChild(d),n.appendChild(a)}},fillReviewsHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurant.reviews,n=document.getElementById("reviews-container"),t=document.createElement("h3");if(t.innerHTML="Reviews",t.tabIndex=0,n.appendChild(t),!e){var a=document.createElement("p");return a.innerHTML="No reviews yet!",void n.appendChild(a)}var r=document.getElementById("reviews-list");e.forEach(function(e){r.appendChild(createReviewHTML(e))}),n.appendChild(r)},createReviewHTML=function(e){var n=document.createElement("li"),t=document.createElement("p");t.innerHTML=e.name,t.tabIndex=0,n.appendChild(t);var a=document.createElement("p");a.innerHTML=e.date,a.tabIndex=0,n.appendChild(a);var r=document.createElement("p");r.innerHTML="Rating: "+e.rating,r.tabIndex=0,n.appendChild(r);var d=document.createElement("p");return d.innerHTML=e.comments,d.tabIndex=0,n.appendChild(d),n},fillBreadcrumb=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurant,n=document.getElementById("breadcrumb"),t=document.createElement("li");t.innerHTML=e.name,n.appendChild(t)},getParameterByName=function(e,n){n||(n=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var t=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(n);return t?t[2]?decodeURIComponent(t[2].replace(/\+/g," ")):"":null},addReview=function(){alert(document.querySelector("#name").value)};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RhdXJhbnRfaW5mby5qcyJdLCJuYW1lcyI6WyJtYXAiLCJyZXN0YXVyYW50Iiwid2luZG93IiwiaW5pdE1hcCIsImZldGNoUmVzdGF1cmFudEZyb21VUkwiLCJlcnJvciIsInNlbGYiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJjZW50ZXIiLCJsYXRsbmciLCJzY3JvbGx3aGVlbCIsImNhbGxiYWNrIiwiaWQiLCJnZXRQYXJhbWV0ZXJCeU5hbWUiLCJEQkhlbHBlciIsImZldGNoUmVzdGF1cmFudEJ5SWQiLCJmaWxsUmVzdGF1cmFudEhUTUwiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJuYW1lIiwiaW5uZXJIVE1MIiwidGFiSW5kZXgiLCJhZGRyZXNzIiwiaW1hZ2UiLCJtYXRjaE1lZGlhIiwic2l6ZSIsInNtYWxsIiwiYmlnIiwiaW1hZ2VVcmxGb3JSZXN0YXVyYW50IiwiYWx0IiwiY3Vpc2luZSIsImNsYXNzTmFtZSIsImN1aXNpbmVfdHlwZSIsIm9wZXJhdGluZ19ob3VycyIsImZpbGxSZXN0YXVyYW50SG91cnNIVE1MIiwiZmlsbFJldmlld3NIVE1MIiwiaG91cnMiLCJrZXkiLCJvcGVyYXRpbmdIb3VycyIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJkYXkiLCJhcHBlbmRDaGlsZCIsInRpbWUiLCJyZXZpZXdzIiwidGl0bGUiLCJjb250YWluZXIiLCJub1Jldmlld3MiLCJyZXZpZXciLCJ1bCIsImNyZWF0ZVJldmlld0hUTUwiLCJmb3JFYWNoIiwibGkiLCJkYXRlIiwicmF0aW5nIiwiY29tbWVudHMiLCJicmVhZGNydW1iIiwiZmlsbEJyZWFkY3J1bWIiLCJ1cmwiLCJsb2NhdGlvbiIsImhyZWYiLCJyZXN1bHRzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsImFkZFJldmlldyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiYUFBQSxJQUNJQSxJQURB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Zm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgcmVzdGF1cmFudDtcbnZhciBtYXA7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBHb29nbGUgbWFwLCBjYWxsZWQgZnJvbSBIVE1MLlxuICovXG53aW5kb3cuaW5pdE1hcCA9ICgpID0+IHtcbiAgZmV0Y2hSZXN0YXVyYW50RnJvbVVSTCgoZXJyb3IsIHJlc3RhdXJhbnQpID0+IHtcbiAgICBpZiAoZXJyb3IpIHsgLy8gR290IGFuIGVycm9yIVxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcbiAgICAgICAgem9vbTogMTYsXG4gICAgICAgIGNlbnRlcjogcmVzdGF1cmFudC5sYXRsbmcsXG4gICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBmaWxsQnJlYWRjcnVtYigpO1xuICAgICAgREJIZWxwZXIubWFwTWFya2VyRm9yUmVzdGF1cmFudChzZWxmLnJlc3RhdXJhbnQsIHNlbGYubWFwKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBHZXQgY3VycmVudCByZXN0YXVyYW50IGZyb20gcGFnZSBVUkwuXG4gKi9cbmZldGNoUmVzdGF1cmFudEZyb21VUkwgPSAoY2FsbGJhY2spID0+IHtcbiAgaWYgKHNlbGYucmVzdGF1cmFudCkgeyAvLyByZXN0YXVyYW50IGFscmVhZHkgZmV0Y2hlZCFcbiAgICBjYWxsYmFjayhudWxsLCBzZWxmLnJlc3RhdXJhbnQpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBpZCA9IGdldFBhcmFtZXRlckJ5TmFtZSgnaWQnKTtcbiAgaWYgKCFpZCkgeyAvLyBubyBpZCBmb3VuZCBpbiBVUkxcbiAgICBlcnJvciA9ICdObyByZXN0YXVyYW50IGlkIGluIFVSTCc7XG4gICAgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xuICB9IGVsc2Uge1xuICAgIERCSGVscGVyLmZldGNoUmVzdGF1cmFudEJ5SWQoaWQsIChlcnJvciwgcmVzdGF1cmFudCkgPT4ge1xuICAgICAgc2VsZi5yZXN0YXVyYW50ID0gcmVzdGF1cmFudDtcbiAgICAgIGlmICghcmVzdGF1cmFudCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZmlsbFJlc3RhdXJhbnRIVE1MKCk7XG4gICAgICBjYWxsYmFjayhudWxsLCByZXN0YXVyYW50KTtcbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBDcmVhdGUgcmVzdGF1cmFudCBIVE1MIGFuZCBhZGQgaXQgdG8gdGhlIHdlYnBhZ2VcbiAqL1xuZmlsbFJlc3RhdXJhbnRIVE1MID0gKHJlc3RhdXJhbnQgPSBzZWxmLnJlc3RhdXJhbnQpID0+IHtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXVyYW50LW5hbWUnKTtcbiAgbmFtZS5pbm5lckhUTUwgPSByZXN0YXVyYW50Lm5hbWU7XG4gIG5hbWUudGFiSW5kZXggPSAwO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGF1cmFudC1hZGRyZXNzJyk7XG4gIGFkZHJlc3MuaW5uZXJIVE1MID0gcmVzdGF1cmFudC5hZGRyZXNzO1xuICBhZGRyZXNzLnRhYkluZGV4ID0gMDtcblxuICBjb25zdCBzbWFsbCA9ICdzbWFsbCcsIG1lZGl1bSA9ICdtZWRpdW0nLCBiaWcgPSAnYmlnJztcbiAgbGV0IHNpemUgPSBzbWFsbDtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGF1cmFudC1pbWcnKTtcblxuICBpZih3aW5kb3cubWF0Y2hNZWRpYSgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpJykpXG4gICAgc2l6ZSA9IG1lZGl1bTtcbiAgZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpJykpXG4gICAgc2l6ZSA9IHNtYWxsO1xuICAgIFxuICBpbWFnZS5jbGFzc05hbWUgPSAncmVzdGF1cmFudC1pbWcgbGF6eWxvYWQnO1xuICAvL2ltYWdlLnNyYyA9ICcnO1xuICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJywgREJIZWxwZXIuaW1hZ2VVcmxGb3JSZXN0YXVyYW50KHJlc3RhdXJhbnQsIHNpemUpKTtcbiAgaW1hZ2UuYWx0ID0gcmVzdGF1cmFudC5uYW1lICsgJyByZXN0dXJhbnQgcGljdHVyZSc7XG5cbiAgY29uc3QgY3Vpc2luZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXVyYW50LWN1aXNpbmUnKTtcbiAgY3Vpc2luZS5pbm5lckhUTUwgPSByZXN0YXVyYW50LmN1aXNpbmVfdHlwZTtcbiAgY3Vpc2luZS50YWJJbmRleCA9IDA7XG5cbiAgLy8gZmlsbCBvcGVyYXRpbmcgaG91cnNcbiAgaWYgKHJlc3RhdXJhbnQub3BlcmF0aW5nX2hvdXJzKSB7XG4gICAgZmlsbFJlc3RhdXJhbnRIb3Vyc0hUTUwoKTtcbiAgfVxuICAvLyBmaWxsIHJldmlld3NcbiAgZmlsbFJldmlld3NIVE1MKCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSByZXN0YXVyYW50IG9wZXJhdGluZyBob3VycyBIVE1MIHRhYmxlIGFuZCBhZGQgaXQgdG8gdGhlIHdlYnBhZ2UuXG4gKi9cbmZpbGxSZXN0YXVyYW50SG91cnNIVE1MID0gKG9wZXJhdGluZ0hvdXJzID0gc2VsZi5yZXN0YXVyYW50Lm9wZXJhdGluZ19ob3VycykgPT4ge1xuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXVyYW50LWhvdXJzJyk7XG4gIGZvciAobGV0IGtleSBpbiBvcGVyYXRpbmdIb3Vycykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgcm93LnRhYkluZGV4ID0gMDsgXG5cbiAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGRheS5pbm5lckhUTUwgPSBrZXk7XG4gICAgcm93LmFwcGVuZENoaWxkKGRheSk7XG5cbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICB0aW1lLmlubmVySFRNTCA9IG9wZXJhdGluZ0hvdXJzW2tleV07XG4gICAgcm93LmFwcGVuZENoaWxkKHRpbWUpO1xuXG4gICAgaG91cnMuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufTtcblxuLyoqXG4gKiBDcmVhdGUgYWxsIHJldmlld3MgSFRNTCBhbmQgYWRkIHRoZW0gdG8gdGhlIHdlYnBhZ2UuXG4gKi9cbmZpbGxSZXZpZXdzSFRNTCA9IChyZXZpZXdzID0gc2VsZi5yZXN0YXVyYW50LnJldmlld3MpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jldmlld3MtY29udGFpbmVyJyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgdGl0bGUuaW5uZXJIVE1MID0gJ1Jldmlld3MnO1xuICB0aXRsZS50YWJJbmRleCA9IDA7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgaWYgKCFyZXZpZXdzKSB7XG4gICAgY29uc3Qgbm9SZXZpZXdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5vUmV2aWV3cy5pbm5lckhUTUwgPSAnTm8gcmV2aWV3cyB5ZXQhJztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm9SZXZpZXdzKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmV2aWV3cy1saXN0Jyk7XG4gIHJldmlld3MuZm9yRWFjaChyZXZpZXcgPT4ge1xuICAgIHVsLmFwcGVuZENoaWxkKGNyZWF0ZVJldmlld0hUTUwocmV2aWV3KSk7XG4gIH0pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodWwpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgcmV2aWV3IEhUTUwgYW5kIGFkZCBpdCB0byB0aGUgd2VicGFnZS5cbiAqL1xuY3JlYXRlUmV2aWV3SFRNTCA9IChyZXZpZXcpID0+IHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBuYW1lLmlubmVySFRNTCA9IHJldmlldy5uYW1lO1xuICBuYW1lLnRhYkluZGV4ID0gMDtcbiAgbGkuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGF0ZS5pbm5lckhUTUwgPSByZXZpZXcuZGF0ZTtcbiAgZGF0ZS50YWJJbmRleCA9IDA7XG4gIGxpLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gIGNvbnN0IHJhdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcmF0aW5nLmlubmVySFRNTCA9IGBSYXRpbmc6ICR7cmV2aWV3LnJhdGluZ31gO1xuICByYXRpbmcudGFiSW5kZXggPSAwO1xuICBsaS5hcHBlbmRDaGlsZChyYXRpbmcpO1xuXG4gIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb21tZW50cy5pbm5lckhUTUwgPSByZXZpZXcuY29tbWVudHM7XG4gIGNvbW1lbnRzLnRhYkluZGV4ID0gMDtcbiAgbGkuYXBwZW5kQ2hpbGQoY29tbWVudHMpO1xuXG4gIHJldHVybiBsaTtcbn07XG5cbi8qKlxuICogQWRkIHJlc3RhdXJhbnQgbmFtZSB0byB0aGUgYnJlYWRjcnVtYiBuYXZpZ2F0aW9uIG1lbnVcbiAqL1xuZmlsbEJyZWFkY3J1bWIgPSAocmVzdGF1cmFudD1zZWxmLnJlc3RhdXJhbnQpID0+IHtcbiAgY29uc3QgYnJlYWRjcnVtYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicmVhZGNydW1iJyk7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGkuaW5uZXJIVE1MID0gcmVzdGF1cmFudC5uYW1lO1xuICBicmVhZGNydW1iLmFwcGVuZENoaWxkKGxpKTtcbn07XG5cbi8qKlxuICogR2V0IGEgcGFyYW1ldGVyIGJ5IG5hbWUgZnJvbSBwYWdlIFVSTC5cbiAqL1xuZ2V0UGFyYW1ldGVyQnlOYW1lID0gKG5hbWUsIHVybCkgPT4ge1xuICBpZiAoIXVybClcbiAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgJ1xcXFwkJicpO1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYFs/Jl0ke25hbWV9KD0oW14mI10qKXwmfCN8JClgKSxcbiAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xuICBpZiAoIXJlc3VsdHMpXG4gICAgcmV0dXJuIG51bGw7XG4gIGlmICghcmVzdWx0c1syXSlcbiAgICByZXR1cm4gJyc7XG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XG59O1xuXG5hZGRSZXZpZXcgPSAgKCkgPT4ge1xuICBhbGVydChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlKTtcbn1cbiJdfQ==
