

export default function Button(props: any) {
    return (<button className="bg-stone-800 hover:bg-stone-600 text-stone-100 mb-4 rounded h-10 w-full">{props.value? props.value : "click me"}</button>)
}