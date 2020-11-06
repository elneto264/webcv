$(document).ready(infogen);

$("#refresh").click(function() {
    infogen();
    console.log("refresca la info");
});

$(".sarrow").click(function() {
    $('.refrescar').toggleClass('sarrow-active');
});


function sale() {
    $("#unover").show();
}

function esconde() {
    $("#unover").hide();
}


function sale2() {
    $("#unover2").show();
}


function esconde2() {
    $("#unover2").hide();
}



function infogen() {

    cambio();
    $("#ciudades").change(cambio);

    function cambio() {

        city = $("#ciudades").val();




        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?id=" + city + "&lang=sp&units=metric&APPID=6967c0545bc9b2c52b54e1fd9e453d42",
            datatype: "json",
            type: "GET",
            success: function(result) {
                /* seccion variables */


                var icono = result.weather[0].icon;
                var iurl = "http://openweathermap.org/img/wn/" + icono + "@2x.png";
                var ciudad = result.name;
                var dateUni = result.dt;
                var dateString = moment.unix(dateUni).format("DD/MM/YYYY");
                var dia = moment.unix(dateUni).format('dddd');
                var dateNorm = new Date(dateUni * 1000);
                var d1 = (dateNorm.getDay());
                var day1 = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

                /* seccion variables */
                $("#date").html(day1[(d1) % 7] + "<style>#date {font-size: 4vh};</style>");


                /* lluvia */
                if (result.rain == undefined || result.rain["3h"] != null) {

                    $("#rain").html("0 mm");

                } else {
                    $("#rain").html(result.rain["1h"]);
                }

                /* nieve*/
                if (result.snow == undefined || result.snow["3h"] != null) {

                    $("#snow").html("0 mm");

                } else {
                    $("#snow").html(result.snow["1h"]);
                }



                /* seccion de imprimir en html*/
                console.log(result);
                $("#name").html(ciudad + " <style>#name {font-size: 5vh};</style>");
                $("#oc").attr("value", result.id);
                $("#mainTemp").html(Math.round(result.main.temp) + "<style>#mainTemp {font-size: 7vh};</style> ºC");
                $("#maxMin").html(Math.round(result.main.temp_max) + " ºC" + " / " + Math.round(result.main.temp_min) + " ºC");
                $("#wind").html(result.wind.speed + " m/s");
                $("#cloud").html(result.clouds.all + " %");
                $("#imgcurrent").attr("src", iurl);
                $("#day").html(dateString + "<style>#day {font-size: 4vh};</style>");
                /*$("#date").html(dia + "<style>#date {font-size: 4vh};</style>"); */
                $("#tipodia").html(result.weather[0].description);

            },
            error: function() {
                // console.log("ERROR: de este lado");
            }











        });

        /* 2ndo ajax */
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/forecast?id=" + city + "&lang=sp&APPID=6967c0545bc9b2c52b54e1fd9e453d42&units=metric",
            datatype: "json",
            type: "GET",
            success: function(forecast) {
                var icono1 = forecast.list[7].weather[0].icon;
                var icono2 = forecast.list[15].weather[0].icon;
                var icono3 = forecast.list[23].weather[0].icon;
                var icono4 = forecast.list[31].weather[0].icon;
                var icono5 = forecast.list[39].weather[0].icon;

                var dateUni = forecast.list[0].dt;
                var dateNorm = new Date(dateUni * 1000);
                var d = (dateNorm.getDay());

                var days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

                $("#imgdias1").attr("src", "http://openweathermap.org/img/wn/" + icono1 + "@2x.png");
                $("#imgdias2").attr("src", "http://openweathermap.org/img/wn/" + icono2 + "@2x.png");
                $("#imgdias3").attr("src", "http://openweathermap.org/img/wn/" + icono3 + "@2x.png");
                $("#imgdias4").attr("src", "http://openweathermap.org/img/wn/" + icono4 + "@2x.png");
                $("#imgdias5").attr("src", "http://openweathermap.org/img/wn/" + icono5 + "@2x.png");

                $("#forecastDay1").html(days[(d + 1) % 7]);
                $("#forecastDay2").html(days[(d + 2) % 7]);
                $("#forecastDay3").html(days[(d + 3) % 7]);
                $("#forecastDay4").html(days[(d + 4) % 7]);
                $("#forecastDay5").html(days[(d + 5) % 7]);



                currentDate = new Date();
                currentDate.setHours(0, 0, 0, 0);

                var minAux1 = 100;
                var maxAux1 = -100;

                var minAux2 = 100;
                var maxAux2 = -100;

                var minAux3 = 100;
                var maxAux3 = -100;

                var minAux4 = 100;
                var maxAux4 = -100;

                var minAux5 = 100;
                var maxAux5 = -100;

                $.each(forecast.list, function(index, value) {

                    apiDay = new Date(value.dt_txt);
                    apiDay.setHours(0, 0, 0, 0);
                    var diff = (apiDay - currentDate)
                    diff = diff / (1000 * 3600 * 24);

                    if (diff == 1) {
                        arr1 = value.main.temp_max;
                        if (arr1 > maxAux1) {
                            maxAux1 = arr1;
                        }
                        if (arr1 < minAux1) {
                            minAux1 = arr1;
                        }

                        $("#maxMinDia1").html("Máx. " + Math.round(maxAux1) + "ºC / Min. " + Math.round(minAux1) + "ºC");
                    };
                    if (diff == 2) {
                        arr2 = value.main.temp_max;
                        if (arr2 > maxAux2) {
                            maxAux2 = arr2;
                        }
                        if (arr2 < minAux2) {
                            minAux2 = arr2;
                        }

                        $("#maxMinDia2").html("Máx. " + Math.round(maxAux2) + "ºC / Min. " + Math.round(minAux2) + "ºC");
                    };
                    if (diff == 3) {
                        arr3 = value.main.temp_max;
                        if (arr3 > maxAux3) {
                            maxAux3 = arr3;
                        }
                        if (arr3 < minAux3) {
                            minAux3 = arr3;
                        }

                        $("#maxMinDia3").html("Máx. " + Math.round(maxAux3) + "ºC / Min. " + Math.round(minAux3) + "ºC");
                    };
                    if (diff == 4) {
                        arr4 = value.main.temp_max;
                        if (arr4 > maxAux4) {
                            maxAux4 = arr4;
                        }
                        if (arr4 < minAux4) {
                            minAux4 = arr4;
                        }

                        $("#maxMinDia4").html("Máx. " + Math.round(maxAux4) + "ºC / Min. " + Math.round(minAux4) + "ºC");
                    };
                    if (diff == 5) {
                        arr5 = value.main.temp_max;
                        if (arr5 > maxAux5) {
                            maxAux5 = arr5;
                        }
                        if (arr5 < minAux5) {
                            minAux5 = arr5;
                        }

                        $("#maxMinDia5").html("Máx. " + Math.round(maxAux5) + "ºC / Min. " + Math.round(minAux5) + "ºC");
                    };

                });
                console.log(forecast);

            },
            error: function() {
                // console.log("ERROR:");
            }

        });
    }
}