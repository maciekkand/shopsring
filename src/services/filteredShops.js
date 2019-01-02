export const filteredShops = (shops, homeGPS) => {
  //console.log('homeGPS = ', homeGPS)
  //console.log('shops = ', shops)

  function distance(lat1, lon1, lat2, lon2) {
    function toRad(x) { return x * Math.PI / 180 }

    const R = 6371 // km
    const x1 = lat2 - lat1
    const dLat = toRad(x1)
    const x2 = lon2 - lon1
    const dLon = toRad(x2)

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return Math.round(R * c * 1000)
  }

  const shopsInRadius = shops.filter(el => {
    return distance(el.lat, el.lon, homeGPS.lat, homeGPS.lon) < homeGPS.radius
  })

  // console.log('shopsInRadius', shopsInRadius)
  return shopsInRadius
}






