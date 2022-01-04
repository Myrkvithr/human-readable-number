module.exports = function toReadable(number) {
    const arrSingleDigit = ['one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];
    const arrSecDozen = ['ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];
    const arrNextDozen = ['twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];
    let hdd = 'hundred';
    let readableNum = '';

    if (Math.floor(number / 100) > 0) {
        readableNum += arrSingleDigit[Math.floor(number / 100) - 1] + ' ' + hdd;
    };

    if ((number % 100) && (Math.floor(number / 100) > 0)) {
        readableNum += ' ';
    }

    if (number % 100 >= 20) {
        readableNum += arrNextDozen[Math.floor((number % 100) / 10) - 2];
    };

    if ((number % 100 >= 20) && (number % 10 > 0)) {
        readableNum += ' ';
    }

    if ((number % 100 < 20) && (number % 100 >= 10)) {
        readableNum += arrSecDozen[(number % 10)];
    } else if (number % 10) {
        readableNum += arrSingleDigit[(number % 10) - 1];
    };

    if (!number) {
        readableNum = 'zero'
    };

    return readableNum;
}
