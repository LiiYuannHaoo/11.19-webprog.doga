

async function init(){
    const response = await fetch("/patrons.json");
    const adatok = await response.json();

    const tablazat = document.getElementsByTagName('main')[0]

    for(const adat of adatok){
        const table = createElement('table');
        tablazat = document.appendChild(table);

        const trSub = createElement('tr')
        table = document.appendChild(trSub);
        const trPrem = createElement('tr')
        table = document.appendChild(trPrem);
        const trPaid = createElement('tr')
        table = document.appendChild(trPaid);

        const thSub = createElement('th')
        thSub.
        trSub = document.appendChild(thSub);


        


        console.log("betölt")
    }

}
init() 
   console.log("betölt")