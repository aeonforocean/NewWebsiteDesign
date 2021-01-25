$(document).ready(function(){
  // get the url
  _url = window.location.pathname;
  // split the url
  _url = _url.split("/");
  // target section if exist
  var target = null;
  // check if url has a section
  if (_url.length == 3){
    target = _url[2];
  }

  // scroll view to the selected target
  targetScroll(target);

  // draw chart on canvas element
  drawPieChart();
  // draw mixed line and bar chart
  mixedChart();
});


// execute scroll to the click option
function targetScroll(t=null){
  // sections declaration
  var sections = {
    about: "section1",
    journey: "section2"
  };
  
  if (t){
    scroll(t);
  }
  
  // on click event
  $(".btn-0").click(function(e){
    // stop redirect
    e.preventDefault();
    // get id of the clicked button
    var target = $(this).prop("id");
    // scroll to selected section
    scroll(target);
  });
  
  // scroll to selected section
  function scroll(target){
    // target coordinates
    var coordinates = $(`#${sections[target]}`).position().top - $("#mainNav").outerHeight();
    // scroll to selected section
    $('html, body').animate({
      scrollTop: (coordinates)
    }, 1000, "swing");
    return false;
  }
}

// draw chart on canvas element
function drawPieChart(){
  // get th element
  var tableHeaders = $("#table-1").find("tbody").find("th");
  // storage
  var labels = [];
  // insert labels from table into storage
  $.each(tableHeaders, function(index, th){
    labels.push($(th).html());
  });
  // get td element
  var tableData = $("#table-1").find("tbody").find("tr");
  // storage
  var data = [];
  $.each(tableData, function(index, td){
    var cell = $(td).find("td").last();
    data.push($(cell).html());
  });
  // initially chart configurations
  let chartOptions = {
    displayLegend: function () {
                    if ($(window).width() < 768){
                    return false;
                  }
                  // show for other devices
                  else{
                    return true;
                  }
    },
    aspectRatio: function(){
                  if ($(window).width() < 768){
                    return 1;
                  }
                  // show for other devices
                  else{
                    return 2;
                  }
    },
    legendPosition: function(){
                  if ($(window).width() < 1200){
                    return "top";
                  }
                  // show for other devices
                  else{
                    return "right";
                  }
    }
    
  };
  // get canvas object for instantiation
  var ctx = document.getElementById('chart').getContext('2d');
  // initiate chart
  var chart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [{
        label: "Presentation",
        data: data,
        backgroundColor: [
                "#71c016", "#8caaff", "#248afd", "#f5a623", "#ff4747", "#ffeb3b", "#03a9f4", "#6a1b9a", "#00bcd4"],
        borderWidth: 1,
      }]
    },
    options: {
      responsive: true,
      onResize: adjustRender,
      maintainAspectRatio: false,
      aspectRatio: chartOptions.aspectRatio(),
      segmentShowStroke: false,
      cutoutPercentage: 50,
      elements: {
          arc: {
              borderWidth: 4
          }
      },      
      legend: {
          display: chartOptions.displayLegend(),
          position: "right",
          fullWidth: false
      },
      tooltips: {
          enabled: true
      },
    }
  });

  // reconfigure chart if resize occur
  function adjustRender(chart, size){
    // if cellphone device
    if ($(window).width() < 768) {
      // hide legend
      chart.options.legend.display = false;
      // change aspect ratio
      chart.options.aspectRatio = chartOptions.aspectRatio();
      // get color options for rows
      let colors = chart.data.datasets[0].backgroundColor;
      // get th element
      var tableHeaders = $("#table-1").find("tbody").find("th");
      // storage
      // insert labels from table into storage
      $.each(tableHeaders, function(index, th){
        $(th).css("color", colors[index]);
      });
    }
    // other devices
    else {
      // show legend
      chart.options.legend.display = true;
      // change aspect ratio
      chart.options.aspectRatio = chartOptions.aspectRatio();
    }
  }
}

// draw mixed line and bar chart
function mixedChart(){
  // get labels
  let headers = $('#table-2').find("tbody").find("th");
  // storage
  let labels = [];
  // push names into labels
  $.each(headers, function(id, th){
    labels.push($(th).html());
  });
  // get data
  let trows = $('#table-2').find("tbody").find("tr");
  // storage
  let td2018 = []
  let td2019 = []
  let total = [];
  // push data into each storage
  $.each(trows, function(id, tr){
    // push to 2018
    let a = $(tr).find("td")[0];
    td2018.push($(a).html());
    // push to 2019
    let b = $(tr).find("td")[1];
    td2019.push($(b).html());
    // push to total
    let c = $(tr).find("td")[2];
    total.push($(c).html());
  });
  // get canvas element
  let ctx = document.getElementById("chart2").getContext("2d");
  // initiate chart
  let mixedChart = new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: [{
        label: '2018',
        data: td2018,
        backgroundColor: "#388afd",
        hoverBorderColor: "#fff",
        hoverBorderWidth: 2,
      }, {
        label: '2019',
        type: 'bar',
        data: td2019,
        backgroundColor: "#f54747",
        hoverBorderColor: "#fff",
        hoverBorderWidth: 2,
      }, {
        label: 'Time Line',
        type: 'line',
        data: total,
        borderColor: "#71c015",
        borderWidth: 6,
        backgroundColor: "transparent",
        pointRadius: 5,
        lineTension: 0,
        fill: "2"
      }],
      labels: labels,
    },
    // chart options
    options: {
      plugins: {
        filler: {
          propagate: true,
        }
      }
    }
  });
}