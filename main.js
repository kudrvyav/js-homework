const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
    let firstCountA = 0;
    let secondCountA = 0;
    for (let index = 0; index < firstRow.length; index++) {
       if (firstRow.charAt(index) == "а") {
           firstCountA++
       }
    }

    for (let index = 0; index < secondRow.length; index++) {
        if (secondRow.charAt(index) == "а") {
            secondCountA++
        }
    }

    if (firstCountA > secondCountA) {
        return firstRow;
    } else {
        return secondRow;
    }


}


console.log(getRow(firstRow, secondRow));
