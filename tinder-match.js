/**
 * ============
 * Tinder match
 * ============
 *
 *
 * Buatlah sebuah fungsi yang akan menerima input array of object sebagai berikut
 * [
 *  { name: 'Andre', gender: 'Men', traits: ['Dewasa', 'Tampan'], expectation: ['Cantik', 'Jujur', 'Kaya']},
 *  { name: 'Marsya', gender: 'Women', traits: ['Cantik', 'Kaya'], expectation: ['Kaya', 'Olahragawan'] },
 *  { name: 'Dimas', gender: 'Men', traits: ['Pintar', 'Kaya'], expectation: ['Cantik', 'Pintar'] },
 *  { name: 'Bella', gender: 'Women', traits: ['Cantik', 'Pintar'], expectation: ['Pintar', 'Jujur'] },
 *  { name: 'Derpina', gender: 'Women', traits: ['Cantik', 'Sederhana', 'Rajin'], expectation: ['Pintar', 'Jujur', 'Baik'] }
 * ]
 *
 * Dan fungsi ini akan mengeluarkan output sebuah object match yang didapatkan oleh setiap orang.
 *
 * {
 *  Andre: {
 *    match: []
 *  },
 *  Marsya: {
 *     match: [ 'Dimas' ]
 *  },
 *  Dimas: {
 *     match: [ 'Marsya', 'Bella', 'Derpina' ]
 *  },
 *  Bella: {
 *     match: [ 'Dimas' ]
 *  },
 *  Derpina: {
 *    match: [ 'Dimas' ]
 *  }
 * }
 *
 * Match didapatkan dengan mencocokan expectation dari setiap orangnya dengan trait orang lain
 * Contoh Marsya match dengan Dimas karena
 * Marsya memiliki Expectation Kaya dan Olahragawan
 * dan Dimas memiliki Traits Pintar dan kaya
 * 
 * Karena Dimas memiliki traits Kaya dan Marsya Expectations nya juga kaya mereka adalah pasangan yang match
 *
 * Asumsi
 * =====
 *
 * Setiap orang dianggap match ketika setidaknya memilki satu kesamaan antara expectations dan trait
 *
 */
function tinderMatch(people) {
    let obj ={};

    // loop per user
    for (let i = 0; i < people.length; i++) {
        const user = people[i];
        obj[user.name] = {
            match: []
        }
        // console.log(userExpectation);
        let user1Expectation = user.expectation;
        let user1Traits = user.traits

        // loop potential match
        console.log(user.name+"--------------");
        for (let j = 0; j < people.length; j++) {
            let user2 = people[j];
            if (j === i) {
                continue;
            }
            console.log(user2.name);

            let user2Expectation = user2.expectation;
            let user2Traits = user2.traits

            let match1 = false;
            let match2 = false;
            for (let k = 0; k < user1Expectation.length; k++) {
                for (let l = 0; l < user2Traits.length; l++) {
                    if (user1Expectation[k] === user2Traits[k]) {
                        match1 = true;
                        break;
                    }
                }

            }
            for (let m = 0; m < user2Expectation.length; m++) {
                for (let n = 0; n < user1Traits.length; n++) {
                    if (user2Expectation[m] === user1Traits[n]) {
                        match2 = true;
                        break;
                    }
                }
            }

            console.log(match1, match2);
            //check is it match or not
            if (match1 && match2) {
                obj[user.name]["match"].push(user2.name);
            }
        }
    }
    return obj;
}




console.log(tinderMatch([
    { name: 'Andre', gender: 'Men', traits: ['Dewasa', 'Tampan'], expectation: ['Cantik', 'Jujur', 'Kaya'] },
    { name: 'Marsya', gender: 'Women', traits: ['Cantik', 'Kaya'], expectation: ['Kaya', 'Olahragawan'] },
    { name: 'Dimas', gender: 'Men', traits: ['Pintar', 'Kaya'], expectation: ['Cantik', 'Pintar'] },
    { name: 'Bella', gender: 'Women', traits: ['Cantik', 'Pintar'], expectation: ['Pintar', 'Jujur'] },
    { name: 'Derpina', gender: 'Women', traits: ['Cantik', 'Sederhana', 'Rajin'], expectation: ['Pintar', 'Jujur', 'Baik'] },
    // { name: 'Hitler', gender: 'Man', traits: ['Tampan', 'Kaya'], expectation: ['Cantik'] }
]))
/**
 * {
 *  Andre: {
 *    match: []
 *  },
 *  Marsya: {
 *     match: [ 'Dimas' ]
 *  },
 *  Dimas: {
 *     match: [ 'Marsya', 'Bella', 'Derpina' ]
 *  },
 *  Bella: {
 *     match: [ 'Dimas' ]
 *  },
 *  Derpina: {
 *    match: [ 'Dimas' ]
 *  }
 * }
 */