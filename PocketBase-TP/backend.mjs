/* Mélissa Poilâne */

import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;


try {
    const fulllist = await pb.collection('maison').getFullList() ;
    console.log(JSON.stringify(fulllist, null, 2)) ;
} catch (e) {
    console.error(e) ;
}
/*

try { const Onerecords = await pb.collection('maison').getOne('b8vt1k1kx3sbtpu');
console.table(Onerecords);
} catch (e) {
console.error(e);
} 


try {
    const sortedRecordscroissant = await pb.collection('maison').getFullList({sort: 'created'
    });
    console.log(sortedRecordscroissant);
} catch (e) {
    console.error(e);
}

try {
    const sortedRecordsdecroissant = await pb.collection('maison').getFullList({sort: '-created'
    });
    console.log(sortedRecordsdecroissant);
} catch (e) {
    console.error(e);
}


try {
    const sortedfavori = await pb.collection('maison').getFullList({ filter: 'favori = true',
    });
    console.log(sortedfavori);
} catch (e) {
    console.error(e);
}


try {
    const superficie100 = await pb.collection('maison').getFullList({ filter: 'surface > 100',
    });
    console.log(superficie100);
} catch (e) {
    console.error(e);
}


try {
    const superficie100sdb = await pb.collection('maison').getFullList({ filter: 'surface > 100 && nbSdb >=2',
    });
    console.log(superficie100sdb);
} catch (e) {
    console.error(e);
}


try {
    const superficie100chambre = await pb.collection('maison').getFullList({ filter: 'surface > 100 || nbChambres >=3',
    });
    console.log(superficie100chambre);
} catch (e) {
    console.error(e);
}

try {
    const superficie100croissant = await pb.collection('maison').getFullList({ filter: 'surface > 100',sort: 'prix'
    });
    console.log(superficie100croissant);
} catch (e) {
    console.error(e);
}


try {
    const croissantalphabet = await pb.collection('maison').getFullList({ sort: 'nomMaison'
    });
    console.log(croissantalphabet);
} catch (e) {
    console.error(e);
}


try {
    const Maisonnom = await pb.collection('maison').getFullList({ filter: 'nomMaison = "Villa moderne"',
    });
    console.log(Maisonnom);
} catch (e) {
    console.error(e);
}


try{
    const maisonNomPasDonne = await pb.collection('maison').getFullList({filter: 'nomMaison!="Villa moderne"', sort: 'nomMaison'});
    console.log(maisonNomPasDonne);
} catch(e){
    console.error(e);
}*/