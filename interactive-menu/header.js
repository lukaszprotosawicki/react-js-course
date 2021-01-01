const Header = (props) => {

    const activeItems = props.items.filter(item => item.active)
    const number = activeItems.length

    return (
        <header>
            <h2>Wielkość zamówienia: {activeItems.length}</h2>
            <h2>Do zapłaty: {number ? `${number * 10} złotych` : 'nie kupujesz, to nie płacisz'} </h2>
        </header>
    )
}