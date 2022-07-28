import { Item } from '../item/item';
import './navBar.css';


export default function NavBar() {
    return(<div className='bg-stone-800 text-white p-2 flex justify-between items-center'>
        <div>lorem Ipsum</div>
        <div className='flex justify-center items-center'>
            <Item route="login" value="Login"/>
            <Item route="signup" value="Sign up"/>
        </div>
    </div>)
}