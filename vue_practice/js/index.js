$(document).ready(function () {
    var line_num = $("#num").val();
    var stage_inputs = $("#stage_inputs");
    for(var i=0; i<Number(line_num);i++) {
        var element = $("<br/><div class='stage_input' align='center'><input class='start' type=\"number\" step=\"1000\"/><span > to </span><input class='end' type=\"number\" step=\"1000\"/></div><br/>");
        element.attr('id',"stage_input_"+i);
        stage_inputs.append(element);
    }
})

$("#num").change(function () {
    var line_num = $("#num").val();
    if(Number(line_num)>12){
        line_num = 12;
        $("#num").val(12)
    }
    if(Number(line_num)<=0){
        line_num = 1;
        $("#num").val(1)
    }
    var stage_inputs = $("#stage_inputs");
    stage_inputs.empty();
    for(var i=0; i<Number(line_num);i++) {
        var element = $("<br/><div class='stage_input' align='center'><input class='start' type=\"number\" step=\"1000\"/><span > to </span><input class='end' type=\"number\" step=\"1000\"/></div><br/>");
        element.attr('id',"stage_input_"+i);
        stage_inputs.append(element);
    }
})

$("input[name='prepaid']").change(function () {
    var a = $("input[name='prepaid']:checked").val();
    if (a == "True") {
        $("input#amount").val(3)
    } else {
        $("input#amount").val(12)
    }
})