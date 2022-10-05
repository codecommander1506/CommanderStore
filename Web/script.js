function init(version)
{
    var baseUrl = '../Stores/AndroidStore/v' + version + '/CommanderStore';
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
            processData(baseUrl, xhttp);
    };
    xhttp.open('GET', baseUrl + '/App.xml', false);
    xhttp.send();
}

function processData(baseUrl, xhttp)
{
    parser = new DOMParser();
    doc = parser.parseFromString(xhttp.responseText, "text/xml");
    app = doc.getElementsByTagName('App')[0];
    releases = doc.getElementsByTagName('Release');
    release = releases[releases.length - 1];
    
    var logo = document.getElementById('logo');
    logo.src = baseUrl + '/' + elementText(app.getElementsByTagName('Icon')[0]);
    
    var link = document.getElementById('download');
    link.href = baseUrl + '/' + elementText(release.getElementsByTagName('File')[0]);
    
    var versionText = document.createTextNode(elementText(release.getElementsByTagName('Version')[0]));
    var version = document.getElementById('version');
    version.appendChild(versionText);
    
    var typeText = document.createTextNode(release.getAttribute('type'));
    var type = document.getElementById('type');
    type.appendChild(typeText);
}

function elementText(e)
{
    return e.childNodes[0].nodeValue;
}
