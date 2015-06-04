var h1 = document.createElement('h1');
h1.innerHTML = "Top Subreddits";
document.body.appendChild(h1);
var table = document.createElement('table');
document.body.appendChild(table);

var req = new XMLHttpRequest();
req.open('GET', 'http://www.reddit.com/subreddits.json', true);
req.addEventListener('load', function(){
  var object = JSON.parse(req.response);
  for (var i = 0; i < object.data.children.length; i++) {
    if (object.data.children[i].data.header_img.indexOf(".png") >= 0) {
      var image = object.data.children[i].data.header_img;
    }
    else {
      var image = "http://cdn.marketplaceimages.windowsphone.com/v8/images/bf2162e3-2f55-4e27-a639-96be22826faf?imageType=ws_icon_medium";
    };
    var tr = document.createElement('tr');
    tr.innerHTML = "<td><img src='" + image + "' alt='subreddit'></td>" +
    "<td><a href='/callback/show.html?name=" + object.data.children[i].data.display_name + "'>" +
     "<h2>" + object.data.children[i].data.display_name + "</h2></a></td>";
    var table = document.querySelector('table');
    table.appendChild(tr);
  }
});
req.send(null);
