import useItems from '../Hooks/useItems';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useItems();

    return (
        <div>
           <div className='m-12 p-10'>
                <h1 className='text-4xl font-semibold pb-5'>Laptop:</h1>
                <hr />
                <div className='flex justify-evenly pt-2'>
                   <div className='mr-10 text-gray-500 text-sm font-bold'>
                   <button className='m-3'>HP</button>
                    <button className='m-3'>ASUS</button>
                    <button className='m-3'>MACBOOK</button>
                    <button className='m-3'>DEL</button>
                    <button className='m-3'>ACER</button>
                    <button className='m-3'>HUAWEI</button>
                    <button className='m-3'>LENOVO</button>
                   </div>
                    <div className=''>
                        <button className='h-10 w-28 m-2 bg-blue-500 text-sm text-white font-bold'>New Arrivals</button>
                        <button className='h-10 w-28 m-2 bg-gray-300 text-sm font-bold'>Best Sellers</button>
                        <button className='h-10 w-28 m-2 bg-gray-300 text-sm font-bold'>On Sale</button>
                    </div>
                </div>
                <hr />
                <div className="grid gap-10 grid-cols-2 lg:grid-cols-3 pt-10">
                    {
                        items.map(item => <Item 
                        key={item._id} 
                        item={item}>
                        </Item>)
                    }
                </div>
            </div> 
        </div>
    );
};

export default Items;