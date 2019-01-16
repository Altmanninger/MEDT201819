var  lebensmittel= new Array();

addelem(1,"wurst",10,2)
addelem(2,"wurst",10,2)
addelem(3,"wurst",10,2)
addelem(4,"wurst",10,2)
addelem(5,"wurst",10,2)
addelem(6,"wurst",10,2)

function addelem(i,art,packungsgroesse,einkaufspreis) {
    lebensmittel[i]['art']=art;
    lebensmittel[i]['packungsgroesse']=packungsgroesse;
    lebensmittel[i]['einkaufspreis']=einkaufspreis;
    lebensmittel[i]['verkaufspreis']=mwst(einkaufspreis);
}

function mwst(einkaufspreis){
    verkaufspreis=einkaufspreis*1.1;
    return verkaufspreis;
}


function ausgabe() {
    for (i=1;i<=6;i++){
        document.write(lebensmittel[i].getVa)

    }

}