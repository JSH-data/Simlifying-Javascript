/*const city = [
    'Seoul C',
    'Busan C',
    'Seoul E',
    'Daejeon A',
    'gwangju B',
];

function usingMatch(city) {
    const seouls = city.filter(member => member.match(/Seo/));

    console.log(seouls);
}

usingMatch(city);

const scores = [30, 50, 70, 60, 80, 59];

function scoreBoard(scores) {
    const passScores = scores.filter(score => score > 59);

    console.log(passScores);
}

scoreBoard(scores); */

const instructors = [
    {
        name : '김승환',
        libraries : ['인문도서 도서관']
    },
    {
        name : '목진덕',
        libraries : ['자연과학 도서관', '이공계 도서관']
    },
    {
        name : '김판기',
        libraries : ['역사 도서관']
    },
];

function usingFind(ins) {
    const librarian = ins.find(instructor => {
        return instructor.libraries.includes('역사');
    })
    console.log(librarian);
}
console.log(instructors);
usingFind(instructors);