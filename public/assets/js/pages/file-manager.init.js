var options={series:[76],chart:{height:150,type:"radialBar",sparkline:{enabled:!0}},colors:["#556ee6"],plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",margin:5},hollow:{size:"60%"},dataLabels:{name:{show:!1},value:{offsetY:-2,fontSize:"16px"}}}},grid:{padding:{top:-10}},stroke:{dashArray:3},labels:["Storage"]},chart=new ApexCharts(document.querySelector("#radial-chart"),options);chart.render();