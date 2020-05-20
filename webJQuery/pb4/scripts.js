function OrderBy(a,b,isNum) {
    if (isNum) return b-a;
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
//doar header orizontal
$('th').click(function() {
    var $th = $(this);
    $th.toggleClass('selected');
    var isSelected = $th.hasClass('selected');
    var column = $th.index();
    var $table = $th.closest('table');
    var isNum= $table.find('tbody tr').children('td').eq(column).hasClass('num');
    var rows = $table.find('tbody tr:gt(0)').get();
    rows.sort(function(rowA,rowB) {
            var keyA = $(rowA).children('td').eq(column).text().toUpperCase();
            var keyB = $(rowB).children('td').eq(column).text().toUpperCase();
        if (isSelected) return OrderBy(keyB,keyA,isNum);
        return OrderBy(keyA,keyB,isNum);
    });
    $.each(rows, function(index,row) {
        $table.children('tbody').append(row);
    });
    return false;
});