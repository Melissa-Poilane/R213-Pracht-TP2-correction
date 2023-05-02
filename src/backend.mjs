import PocketBase from 'pocketbase'
const pb = new PocketBase('http://127.0.0.1:8090')

// 5) récupérer la liste de toutes les maison

try {
  const fulllist = await pb.collection('maison').getFullList()
  console.log(JSON.stringify(fulllist, null, 2))
} catch (e) {
  console.error(e)
}

// 6) récupérer une maison par id

try {
  const oneRecord = await pb.collection('maison').getOne('yxui4b61ovt1nct')
  console.log(oneRecord)
} catch (e) {
  console.error(e)
}

// 7) les maisons par ordre croissant de leur date de creation dans la base de donnees

try {
  const sortedRecords = await pb.collection('maison').getFullList({
    sort: 'created'
  })
  console.log(sortedRecords)
} catch (e) {
  console.error(e)
}

// 8) les maisons par ordre décroissant de leur date de creation dans la base de donnees

try {
  const sortedRecords = await pb.collection('maison').getFullList({
    sort: '-created'
  })
  console.table(sortedRecords)
} catch (e) {
  console.error(e)
}

// 9) les maisons en favori

try {
  const maisonFavori = await pb.collection('maison').getList(1, 50, {
    filter: 'favori=true'
  })
  console.log(maisonFavori)
} catch (e) {
  console.error(e)
}

// 10) les maisons dont la superficie plus grande que 100

try {
  const maisonFavori = await pb.collection('maison').getList(1, 50, {
    filter: 'surface > 100'
  })
  console.log(maisonFavori)
} catch (e) {
  console.error(e)
}

// 10) les maisons dont la superficie plus grande que 100

try {
  const maisonResult = await pb.collection('maison').getList(1, 50, {
    filter: 'surface > 100 && nbSdb >=2'
  })
  console.log(maisonResult)
} catch (e) {
  console.error(e)
}

// 11) les maisons dont la superficie plus grande que 100 et nb salle debains 2

try {
  const maisonResult = await pb.collection('maison').getList(1, 50, {
    filter: 'surface > 100 && nbSdb >=2'
  })
  console.log(maisonResult)
} catch (e) {
  console.error(e)
}

// 12) les maisons dont la superficie plus grande que 100 ou nb chambres 4

try {
  const maisonResult = await pb.collection('maison').getList(1, 50, {
    filter: 'surface > 100 || nbChambres >=4'
  })
  console.log(maisonResult)
} catch (e) {
  console.error(e)
}

// 13) les maisons dont la superficie plus grande que 100 oordre croissant prix

try {
  const maisonResult = await pb.collection('maison').getList(1, 50, {
    filter: 'surface > 100',
    sort: 'prix'
  })
  console.log(maisonResult)
} catch (e) {
  console.error(e)
}

// 14) odre par nom

try {
  const maisonResult = await pb.collection('maison').getList(1, 50, {
    //filter: 'nomMaison="gamma"',
    sort: 'nomMaison'
  })
  console.log(maisonResult)
} catch (e) {
  console.error(e)
}

//15) afficher une maison par son nom

try {
  const maisonResult = await pb.collection('maison').getList(1, 50, {
    filter: 'nomMaison="gamma"'
    //sort: 'nomMaison'
  })
  console.log(maisonResult)
} catch (e) {
  console.error(e)
}

//16) afficher les maisons ayant un nom différent

try {
  const maisonResult = await pb.collection('maison').getList(1, 50, {
    filter: 'nomMaison!="gamma"'
    //sort: 'nomMaison'
  })
  console.log(maisonResult)
} catch (e) {
  console.error(e)
}
