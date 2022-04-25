fetch('http://api.worldbank.org/v2/country/')
    .then(function (res) {
        console.log(res);
        // return JSON.parse(res);
    }).then(function (data) {
        console.log(data.adminregion);
    }).catch(function (error) {
        console.log(error);
    })