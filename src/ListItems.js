import React from 'react';
import './ListItems.css';

const ListItems = ({ setUpdate, deleteItem, theseItems }) => {

    const items = theseItems;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input type="text" id={item.key} value={item.text} onChange={(e) => {
                    setUpdate(e.target.value, item.key)
                }}
                />
                <span>
                    <button className="deleteButton" onClick={() => {
                        deleteItem(item.key)
                    }}
                    />
                </span>
            </p>
        </div>
    })

    return (
        <div>
            {listItems}
        </div>
    )
}

export default ListItems;
