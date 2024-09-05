const elementTable = document.querySelector('.elementTable');

fetch('data.json')
.then((rep) => {
    return rep.json()
})
.then((datas)=>{
    datas.map((data)=>{
        
        let elementTable =document.querySelector('.elementTable');
        let card = document.createElement ('div');
        card.setAttribute ('class', 'elementCard');
        let typeFilter = data.groupBlock.replaceAll(" ", "-");
        card.setAttribute ('id', typeFilter)
        elementTable.appendChild(card);
       
        //creation de la div numéro atomique
        let atomicNumber = document.createElement ('p');
        atomicNumber.setAttribute('id', 'atomicNumber');
        card.appendChild(atomicNumber);
        atomicNumber.innerHTML = data.atomicNumber

        //creation de la div symbol
        let elementSymbole = document.createElement ('h2');
        elementSymbole.setAttribute ('id', 'symbol');
        card.appendChild(elementSymbole);
        elementSymbole.innerHTML = data.symbol;


        //creation de la div nom
        let elementName = document.createElement('p');
        elementName.setAttribute ('id', 'nom')
        card.appendChild(elementName);
        elementName.innerHTML = data.name;


        

         })
})


