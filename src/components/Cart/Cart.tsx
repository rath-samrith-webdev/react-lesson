interface CartProps {
    items:string[],
    onClear:()=>void,
}
const Cart = ({items,onClear}:CartProps) => {
    return <>
        <div className="d-flex gap-2 justify-content-between align-content-center">
            {items.map((item) => <div key={item} className="badge badge-light text-bg-success p-2 rounded-md">{item}</div>)}
        </div>
        <button onClick={onClear} className="btn btn-danger">Clear</button>
    </>
}
export default Cart;