export default function MovieDetail (
    props
    // { params: { id }, searchParams } : { params: {id : string}, searchParams: object }
) {
    console.log(props);
    // console.log('id ---> ', id);
    // console.log('search params ---> ', searchParams);
    return (
        <div>
            <h1>Movie ID : {props?.params?.id}</h1>
            {/*<h1>Movie ID : {id}</h1>*/}
        </div>
    )
}