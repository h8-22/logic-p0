function getPoints(history) {
    let itemPoint = {
      'Moonlight': 120,
      'Goldqueen': 550,
      'Beras Parist': 1200,
      'Minyak Fatma': 2500
    }
    // write your code here
    let obj = {
        totalPoint: 0,
        belanjaanReport: {}
    }

    for (let i = 0; i < history.length; i++) {
        if(obj.belanjaanReport[history[i]]){
            obj.belanjaanReport[history[i]] ++;
        } else {
            obj.belanjaanReport[history[i]] = 1;
        }
        obj["totalPoint"] += itemPoint[history[i]]
    }
    return obj
  }


  
  const history = [
    'Minyak Fatma',
    'Moonlight',
    'Beras Parist',
    'Minyak Fatma',
    'Goldqueen',
    'Beras Parist',
    'Moonlight',
    'Moonlight',
    'Moonlight',
    'Minyak Fatma',
    'Goldqueen',
    'Goldqueen',
    'Minyak Fatma',
    'Beras Parist',
    'Beras Parist',
    'Moonlight',
    'Moonlight',
    'Minyak Fatma',
    'Minyak Fatma'
  ]
//   console.log(getPoints(history))

  function getPrizes(point) {
    let listPrize = [
      [2000, 'Voucher 10k', 'Sticker', 'Penggaris' ],
      [5000, 'Voucher 25k', 'Kinderboy', 'Tissue', 'Piring'],
      [10000, 'Payung', 'Panci']
    ]
    let yours = []
    // write your code here
    for (let i = 0; i < listPrize.length; i++) {
        for(let j =1; j < listPrize[i].length; j++){
            if(point > listPrize[i][0]){
                yours.push(listPrize[i][j]);
                point -= listPrize[i][0]
            }
        }
    }
    return yours;
  }
  
//   console.log(getPrizes(22000)) // [ 'Voucher 10k', 'Sticker', 'Penggaris', 'Voucher 25k', 'Kinderboy', 'Tissue' ]

  function betamart(pembeli) {
    // write your code here
    if(pembeli === false){
        return "Tidak ada pembeli yang belanja"
    }
    getPts = getPoints(pembeli.histories);
    point = getPts.totalPoint;
    console.log(point);
    let result = {
        name: pembeli.name,
        belanjaanReport: getPts.belanjaanReport,
        prizes: getPrizes(point)
    }
    return result
  }
  
  console.log(
    betamart({
      name: 'Ilham',
      histories: [
        'Moonlight',
        'Goldqueen',
        'Beras Parist',
        'Moonlight',
        'Goldqueen',
        'Beras Parist',
        'Minyak Fatma',
        'Minyak Fatma',
        'Minyak Fatma',
        'Moonlight',
        'Goldqueen',
        'Goldqueen',
        'Moonlight',
        'Beras Parist',
        'Beras Parist',
        'Minyak Fatma',
        'Minyak Fatma',
        'Moonlight',
        'Moonlight'
      ]
    })
  )
  /**
  {
    name: 'Ilham',
    belanjaanReport: { Moonlight: 6, Goldqueen: 4, 'Beras Parist': 4, 'Minyak Fatma': 5 },
    prizes: [ 'Voucher 10k', 'Sticker', 'Penggaris', 'Voucher 25k', 'Kinderboy' ]
  }
  */