import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <nav className="navgs">
                <div className="btn-group">
                    {
                        menuList.map((curElem) => {
                            return (
                                <button className="btn-group__item" onClick={() => filterItem(curElem)}>{curElem}</button>
                            );
                        })
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar;
