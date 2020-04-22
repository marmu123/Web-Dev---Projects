function sortTable(tableID,columnNumber,sortingOrder="asc",headDirection="horizontal") {
    var table;
    table = document.getElementById(tableID);
    console.log(columnNumber);
    var rows, swap, x, y, shouldSwitch, order, switchcount = 0;
    swap = true;
    order = sortingOrder;
    while (swap) {
        swap = false;
        rows = table.getElementsByTagName("tr");

        if (headDirection==='horizontal') {
            var i;
            for (i = 1; i < rows.length - 1; i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[columnNumber];
                y = rows[i + 1].getElementsByTagName("TD")[columnNumber];
                if (order === "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (order === "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }
        else{
            //todo
            //aproximativ aceeasi abordare doar ca acum
            // columnNumber devine rowNumber
            //ar trebui interschimbate coloane mai jos
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);//swap intre 2 randuri vecine
            swap = true;
            switchcount++;
        } else {
            if (switchcount === 0 && order === "asc") {
                //daca nu am interschimbat nimic inseamana
                // ca e deja sortat crescator si trebui sa il sortez descrescator
                order = "desc";
                swap = true;
            }
        }
    }
}

headers=document.getElementsByTagName("th");
for(var i =0;i<headers.length;i++) {
    headers[i].addEventListener("click", function () {
        sortTable("table",[].indexOf.call(this.parentNode.children,this));
    });
}