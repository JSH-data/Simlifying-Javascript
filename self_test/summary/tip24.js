const clubMember = [
    'kim',
    'jack',
    'dainel',
    'amanda',
];

const checking = [];

function sendEmail(name) {
    checking.push(name);    
};

function checkMember (clubMember, sendEmail) {
    clubMember.forEach(member => sendEmail(member));
};

checkMember(clubMember, sendEmail);

console.log(checking);