export async function load({url}) {
    const queryData = {}
    queryData.name = url.searchParams.get("name")
    queryData.facing = url.searchParams.get("facing")
    queryData.area = url.searchParams.get("area")
    queryData.plotId = url.searchParams.get("plot_id")
    queryData.is_sold = url.searchParams.get("is_sold")
    queryData.is_sold = queryData.is_sold === "1";
    const measurement = url.searchParams.get("measurement")
    if(measurement) {
        for(let data of measurement.split(", ")) {
            const tempSplit = data.split("-")
            if(tempSplit.length === 2) {
                switch (tempSplit[0]) {
                    case "E":
                        queryData.east = tempSplit[1]
                        break
                    case "W":
                        queryData.west = tempSplit[1]
                        break
                    case "N":
                        queryData.north = tempSplit[1]
                        break
                    case "S":
                        queryData.south = tempSplit[1]
                        break
                    default:
                        break
                }
            }
        }
    } else {
        queryData.north = null
        queryData.south = null
        queryData.east = null
        queryData.west = null
    }

    return {
        queryParams: queryData
    }
}
