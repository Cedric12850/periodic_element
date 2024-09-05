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


        filterIsotope("all")
        function filterIsotope(c) {
            let x, i;
            x = document.getElementsByClassName('elementCard');
            if (c === "all")
                c = "";
             // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
             for (i=0; i<x.length; i++) {
                x[i].classList.remove( "show");
                if (x[i].className.indexOf(c) > -1) x[i].classList.add("show");
             }
        }

         })
})


