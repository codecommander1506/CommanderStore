function init(version)
{
    var baseUrl = 'Stores/AndroidStore/v' + version + '/CommanderStore';
    
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
    alert(xhttp.responseText);
    alert(baseUrl);
    
    var logo = document.getElementById('logo');
    logo.src = baseUrl + '/';
    
    var link = document.getElementById('download');
    link.href = baseUrl + '/';
}
