/*function callbackFunc(data) {
    console.log(data);
    console.log('lefutott a callback');
}

function ajaxReq(method, url) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open(method, url, true);
    xhttp.send();
}

ajaxReq('GET', '/js/players.json');
*/

function getData(url, callbackFunc) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function successAjax(xhttp) {
    // itt a json content, benne a data változóban
    var userDatas = JSON.parse(xhttp.responseText);
    console.log(userDatas);


    console.log(userDatas);
    var headData = ["Name", "Biography", "Photo", "Speciality", "Position", "Number", "Caps",
        "Goals", "Club", "Ligue", "Birthdate", "M1", "M2", "M3"
    ];

    var dataProp = ["name", "bio", "photo_done?", "special player?", "position", "number", "caps",
        "goals", "club", "league", "birthdate", "rating_match1", "rating_match2", "rating_match3"
    ];

    createTable(userDatas, headData, dataProp);
}



function generateHead(headData) {
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    headData.forEach(function (element) {
        var th = document.createElement('th');
        th.textContent = element;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    return thead;
}

function generateRow(objElement, arrElement) {
    var td = document.createElement('td');
    var element = objElement[arrElement];
    td.textContent = element;
    return td;
}

function createTable(data, head, props) {
    var table = document.createElement('table');
    table.classList.add("table", "table-striped", "table-hover");
    var tbody = document.createElement('tbody');
    table.appendChild(generateHead(head));
    for (var i = 0; i < data.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < props.length; j++) {
            tr.appendChild(generateRow(data[i], props[j]));
            tbody.appendChild(tr);
        }
    }
    table.appendChild(tbody);
    document.getElementsByTagName('body')[0].appendChild(table);
}



getData('/js/players.json', successAjax);