let filters = new Map() 
	.set('견종', '치와와')
    .set('크기', '소형견')
    .set('성별', '남');

function checkFilters(filter) {
    const check = [...filter].sort(sortKey).map(([key, value])=>{return `${key}:${value}`})
    console.log(check[1]);
};

function init() {
    checkFilters(filters);
};

init();