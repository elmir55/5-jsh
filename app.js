const list = document.querySelector('.list');
const btn = document.querySelector('button');
const spinner = document.querySelector("#spinner");

let devs = [
    { name: 'Elham', age: 15, salary: 100000, level: "senior" },
    { name: 'Datkayim', age: 16, salary: 500000, level: "senior" },
    { name: 'Medina', age: 18, salary: 500000, level: "senior" },
    { name: 'Muslim', age: 19, salary: 400000, level: "junior" },
];
 
for (const dev of devs){ 
    if(dev.age >17) { 
        dev.salary += 5000;
    };
    }; 

function getDevs(isData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isData) {
                resolve(devs);
            } else {
                reject('Katta ketti');
            }
            resolve(devs);
        }, 5000);
    });
};

btn.onclick = () => {
    spinner.style.display = "block";
    console.log(
        getDevs(true)
            .then((mass) => {
                console.log(mass);
                showDevs(mass);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                console.log("Work is done");
                spinner.style.display = "none";
            })
    );
};

function showDevs(arr) {
    list.innerHTML = "";
    for (const obj of arr) {
        list.innerHTML += ` 
        <li>${obj.name} 
        <b>${obj.salary}</b> 
         </li> 
         `;
    };
};
