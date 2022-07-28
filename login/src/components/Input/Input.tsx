

export default function Input(props: any) {
    return(
        <div className="flex items-start flex-col">
            <p className="mb-0.5">{props.title}</p>
            <input className="bg-transparent w-full mb-4" type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}