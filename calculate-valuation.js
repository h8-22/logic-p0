function calculateValuation(startUp) {
    // Your code here
    // let result = [min, max];
    // let a = 0;
    let min = (startUp[1][0] + startUp[1][1] + startUp[1][2] + startUp[1][3])/4
    let max = 0;
    for(let i = 1; i < startUp.length; i++){
        let tempTotal = 0; 
        for(let j = 0; j < startUp.length -1; j++){
            tempTotal += startUp[i][j]
            // console.log(tempTotal);
        }
        let average = tempTotal / 4;
        if(average > max){
            max = average
        } else if(average < min){
            min = average
        }
    }
    let result = [min, max]
    return result
  }
  
  let unicorn = [
    ["Q1", "Q2", "Q3", "Q4", "Start-Up"],
    [14970, 14950, 14985, 15004, "Bikilipik"],
    [14860, 14769, 14890, 15050, "Tikipidia"],
    [14780, 15010, 15002, 14630, "Triviliki"],
    [14880, 14940, 14780, 15085, "Gijik"],
  ];
  
  let centaurs = [
    ["Q1", "Q2", "Q3", "Q4", "Start-Up"],
    [1400, 1450, 1461, 1477, "'BleBle.cim"],
    [1860, 1880, 1670, 1550, "Hilidic"],
    [1780, 1610, 1702, 1630, "Lizidi"],
    [1880, 1940, 1780, 1885, "Shipii"],
  ];
  
  let ponies = [
    ["Q1", "Q2", "Q3", "Q4", "Start-Up"],
    [150, 151, 160, 300, "TikingSiyir"],
    [400, 359, 339, 440, "Siyirbix"],
    [145, 141, 150, 170, "Klikdiktir"],
    [540, 659, 879, 700, "Bhinniki"],
  ];
  
  console.log(calculateValuation(unicorn));
  // [ 14855.5, 14977.25 ]
  
  console.log(calculateValuation(centaurs));
  // [ 1447, 1871.25 ]
  
  console.log(calculateValuation(ponies));
  // [ 151.5, 694.5 ]