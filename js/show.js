var query = parseQuery(document.location.search);
var h1 = document.createElement('h1');
h1.innerHTML = "<a href='../index.html' class='top'>Top Subreddits - " + query["name"] + "</a>";
document.body.appendChild(h1);
var table = document.createElement('table');
document.body.appendChild(table);

var req = new XMLHttpRequest();
req.open('GET', 'http://www.reddit.com/r/' + query["name"] + '/.json');
req.addEventListener('load', function(){
  console.log(JSON.parse(req.response));
  var object = JSON.parse(req.response);
  for (var i = 1; i < object.data.children.length; i++) {
    if (object.data.children[i].data.thumbnail.indexOf(".jpg") >= 0) {
      console.log(object.data.children[i].data.thumbnail.indexOf(".jpg") >= 0);
      var image = object.data.children[i].data.thumbnail;
    }
    else {
      var image = "http://cdn.marketplaceimages.windowsphone.com/v8/images/bf2162e3-2f55-4e27-a639-96be22826faf?imageType=ws_icon_medium";
    };
    var tr = document.createElement('tr');
    tr.innerHTML = "<td><img src='" + image + "' alt='no image'></td>" +
    "<td><a href='" + object.data.children[i].data.url + "'>" + "<h2>" + object.data.children[i].data.title + "</h2></a></td>";
    var table = document.querySelector('table');
    table.appendChild(tr);
  }
});
req.send();
