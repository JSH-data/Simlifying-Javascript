const sailors = [
    {
        name: 'yi hong',
        active: true,
        email: 'yh@yhproductions.io'
    },
    {
        name: 'alex',
        active: true,
        email: ''
    },
    {
        name: 'nathan',
        active: false,
        email: ''
    }
];

/*function activeMembers(group) {
    const active = group.filter(sailor => sailor.active)
    console.log(JSON.stringify(active));
};

function emailRegular(group) {
    const email = group.map(sailor => sailor.email || `${sailor.name}@wiscsail.io`);
    console.log(email)
}*/

const checking = [];

function sendEmail(name) {
    checking.push(name);    
};

function chainnig(group, sendEmail) {
    const main = group
        .filter(sailor => sailor.active)
        .map(sailor.email || `${sailor.name}@wiscsail.io`)
        .forEach(sailor => sendEmail(sailor));
};

chainnig(sailors, sendEmail);

console.log(checking);
