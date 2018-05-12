function DistanceIn3D(points) {
    let x=points[0];
    let y=points[1];
    let z=points[2];
    let x1=points[3];
    let y1=points[4];
    let z1=points[5];
    dist1=Math.sqrt((Math.pow((x-x1),2))+(Math.pow((y-y1),2))+(Math.pow((z-z1),2)));
    console.log(dist1)
}
DistanceIn3D([1, 1, 0, 5, 4, 0]);

//Math.sqrt-koren kwadraten
//Math.pow-powdiga na 2ra stepen