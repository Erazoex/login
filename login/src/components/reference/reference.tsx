

export default function Reference(props: any) {
    return(<div className="bg-stone-700 hover:bg-stone-600 flex justify-center text-stone-100 mx-4 w-6/12 px-2 py-2 rounded drop-shadow-md ">
        {props.img? <img src={props.img} width="25px" height="25px"/>: <></> }
    </div>)
}