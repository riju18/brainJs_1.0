$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "rgb.json",
        data: "data",
        dataType: "json",
        success: function (data) {
            var allData = JSON.parse(JSON.stringify(data));
            console.log(allData);
            var net = new brain.NeuralNetwork();
            net.train(allData);
            var output = net.run({ r: .7, g: 0.1, b: .9 });
            var res = '';
            var inArr = _.toArray(output);
            var keys = _.keys(output);
            for (let i = 0; i < 2; i++) {
                res += keys[i] + ' => ' + inArr[i] * 100 + ' % ' + '<br>';
            }
            $('#result').html(res);
        }
    });
});